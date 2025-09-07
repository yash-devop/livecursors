import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/**/*.ts"],
  clean: true,
  format: ["esm"],
  target: "es2020",
  ...options,
}));
