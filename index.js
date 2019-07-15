"use strict";

module.exports = {
  plugins: ["react-hooks"],
  extends: [
    "wanews-base",
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies,
    "react/prop-types": 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
