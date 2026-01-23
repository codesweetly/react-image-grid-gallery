/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["main"],
  repositoryUrl: "https://github.com/codesweetly/react-image-grid-gallery",
  plugins: [
    // 1. Analyze commits and map them to release types
    [
      "@semantic-release/commit-analyzer", // infer bump from commits
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "refactor", release: "patch" },
          // Docs & DX improvements still get patch releases
          { type: "docs", release: "patch" },
          { type: "style", release: "patch" },
          // Ignore noise
          { type: "test", release: false },
          { type: "chore", release: false },
          { type: "ci", release: false },
        ],
      },
    ],
    // 2. Generate clean, readable release notes
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "✨ Features" },
            { type: "fix", section: "🐛 Bug Fixes" },
            { type: "perf", section: "⚡ Performance" },
            { type: "refactor", section: "♻️ Refactoring" },
            { type: "docs", section: "📚 Documentation" },
            { type: "style", section: "🎨 Code Style" },
          ],
        },
        writerOpts: {
          groupBy: "type", // 🔑 THIS enables grouping
          commitGroupsSort: "title", // Sort sections
          commitsSort: ["scope", "subject"],
        },
      },
    ],
    // 3. Write formatted changelog to CHANGELOG.md
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
        changelogTitle:
          "# 📦 Changelog\n\nAll notable changes to **react-image-grid-gallery** are documented here.\n",
        writerOpts: {
          groupBy: "type", // 🔑 Required here too
          commitGroupsSort: "title",
        },
      },
    ],
    // 4. Update version + publish to npm
    [
      "@semantic-release/npm",
      {
        npmPublish: true,
      },
    ],
    // 5. Commit changelog + version bump back to repo
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    // 6. Create GitHub release notes & tag
    "@semantic-release/github",
  ],
};
