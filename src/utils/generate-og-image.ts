import { readFile } from "fs/promises";
import type React from "react";
import satori from "satori";
import sharp from "sharp";

export async function generateOpenGraphImage(component: React.JSX.Element) {
	const svg = await satori(component, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: "Barlow",
				data: await readFile(
					"./node_modules/@fontsource/barlow/files/barlow-latin-400-normal.woff"
				),
				style: "normal",
				weight: 400,
			},
			{
				name: "Barlow",
				data: await readFile(
					"./node_modules/@fontsource/barlow/files/barlow-latin-700-normal.woff"
				),
				style: "normal",
				weight: 700,
			},
			{
				name: "Outfit",
				data: await readFile(
					"./node_modules/@fontsource/outfit/files/outfit-latin-400-normal.woff"
				),
				style: "normal",
				weight: 400,
			},
		],
	});

	return sharp(Buffer.from(svg)).png().toBuffer();
}
