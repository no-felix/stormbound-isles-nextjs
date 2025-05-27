// Get version info from package.json
import packageJson from "../../package.json";

export const getVersionInfo = () => {
  return {
    version: packageJson.version,
    nextVersion: packageJson.dependencies.next,
    buildDate:
      process.env.NODE_ENV === "production"
        ? new Date().toISOString().split("T")[0]
        : "dev",
  };
};

export const formatVersion = (version: string) => {
  return version.startsWith("v") ? version : `v${version}`;
};
