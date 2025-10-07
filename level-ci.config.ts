import type { Config } from "@level-ci/cli";
export default {
  organization: "ivan-haliurov-levelaccess-com-hspeq",
  project: "test-new-ai-suggestions",
  token: process.env.LEVEL_CI_TOKEN,
  server: "https://api.dev.userway.dev", //change
  reportPaths: ["./level-ci-reports"],
} satisfies Config;
