import { readFile, writeFile } from 'fs/promises';

const content = await readFile('./content/ingredients/list.txt', {
	encoding: 'utf8',
});

const lines = content.split(/\r?\n/);

for (const line of lines) {
	const fileContent = `---
title: ${line}
available: true
---

## Description

## Notes`;
	const fileName = line
		.replace(/[\s\(\)\?,\\]+/g, '-')
		.replace(/-{2,}/g, '-')
		.replace(/^-?(.+)-$/g, '$1')
		.toLowerCase();
	writeFile(`./content/ingredients/${fileName}.md`, fileContent, {
		encoding: 'utf-8',
	});
}
