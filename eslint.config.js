import vue from "eslint-plugin-vue";
import typescript from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import node from "eslint-plugin-n";
import promise from "eslint-plugin-promise";
import prettier from "eslint-config-prettier";

export default [
	typescript.configs["recommended-type-checked"],
	node.configs["recommended-module"],
	importPlugin.configs["typescript"],
	promise.configs["recommended"],
	vue.configs["vue3-strongly-recommended"],
	prettier,
	{
		ignores: ["eslint.config.js"],
	},
];
