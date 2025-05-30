interface GitHubRepo {
  name: string;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: string;
  default_branch: string;
}

interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

export interface GitHubStats {
  totalCommits: number;
  lastCommit: string;
  openIssues: number;
  stars: number;
  forks: number;
  lastCommitUrl: string;
  recentCommits: GitHubCommit[];
}

export class GitHubAPI {
  private readonly baseURL = "https://api.github.com";
  public readonly owner = "no-felix";
  public readonly repo = "stormbound-isles";

  private async fetchGitHub(endpoint: string): Promise<unknown> {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers,
      // Cache for 10 minutes to avoid hitting rate limits
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} - ${response.statusText}`
      );
    }

    return response.json();
  }

  async getRepositoryStats(): Promise<GitHubStats> {
    try {
      // Fetch repository info
      const repo = (await this.fetchGitHub(
        `/repos/${this.owner}/${this.repo}`
      )) as GitHubRepo;

      // Fetch recent commits
      const commits = (await this.fetchGitHub(
        `/repos/${this.owner}/${this.repo}/commits?per_page=10`
      )) as GitHubCommit[];

      // Format last commit date
      const lastCommitDate = new Date(repo.pushed_at);
      const lastCommit = this.formatRelativeTime(lastCommitDate);

      return {
        totalCommits: commits.length, // This is just recent commits
        lastCommit,
        openIssues: repo.open_issues_count,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        lastCommitUrl: commits[0]?.html_url || "",
        recentCommits: commits.slice(0, 5), // Latest 5 commits
      };
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      // Return fallback data
      return {
        totalCommits: 50,
        lastCommit: "Unable to fetch",
        openIssues: 0,
        stars: 0,
        forks: 0,
        lastCommitUrl: "",
        recentCommits: [],
      };
    }
  }

  private formatRelativeTime(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;

    const days = Math.floor(diffInSeconds / 86400);
    if (days === 1) return "yesterday";
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;

    return `${Math.floor(days / 30)} months ago`;
  }
}

export const githubAPI = new GitHubAPI();
