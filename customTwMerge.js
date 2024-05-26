import { extendTailwindMerge } from "tailwind-merge";

export const customTwMerge = extendTailwindMerge({
  // ↓ Override elements from the default config
  //   It has the same shape as the `extend` object, so we're going to skip it here.
  // ↓ Extend values from the default config
  extend: {
    // ↓ Add values to existing theme scale or create a new one
    // theme: {
    //   spacing: ['sm', 'md', 'lg'],
    // },
    // ↓ Add values to existing class groups or define new ones
    classGroups: {
      "font-size": ["text-xxs", "text-xsm"],
    },
    // ↓ Here you can define additional conflicts across class groups
  },
});
