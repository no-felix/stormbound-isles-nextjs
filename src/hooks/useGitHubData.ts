import { useState, useEffect } from "react";
import { githubAPI, type GitHubStats } from "@/lib/github-api";

interface UseGitHubDataReturn {
  data: GitHubStats | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useGitHubData(): UseGitHubDataReturn {
  const [data, setData] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const stats = await githubAPI.getRepositoryStats();
      setData(stats);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch GitHub data"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
