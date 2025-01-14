/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The ingredients, and directions required to make a cocktail
 */
export interface Cocktail {
	/**
	 * Which version of the cocktail is this? e.g. Original, mine, or a named creator
	 */
	version?: string;
	/**
	 * Instructions for making this version of the cocktail
	 */
	directions?: string;
	ingredients?: Ingredient[];
	[k: string]: unknown;
}
/**
 * A reference to an ingredient that can be used in a cocktail
 */
export interface Ingredient {
	ingredient: string;
	amount: number;
	unit?: string;
}
