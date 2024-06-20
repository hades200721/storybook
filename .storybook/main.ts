import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [{
    // 👇 Sets the directory containing your stories
    directory: '../packages/components',
    // 👇 Storybook will load all files that match this glob
    files: '*.stories.*',
  }],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
