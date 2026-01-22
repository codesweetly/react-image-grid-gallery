/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["main"],
  repositoryUrl: "https://github.com/codesweetly/react-image-grid-gallery",
  plugins: [
    "@semantic-release/commit-analyzer", // infer bump from commits
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/npm", // update version + publish to npm
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md", "package-lock.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github", // GitHub release notes & tag
  ],
};
