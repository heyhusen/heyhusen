import { fontData } from "astro:assets";
import type React from "react";
import satori from "satori";
import sharp from "sharp";
import { readFile } from 'fs/promises'

export async function generateOpenGraphImage(component: React.JSX.Element) {
	const fontBarlowData = fontData['--font-barlow']
	const fontOutfitData = fontData['--font-outfit']
	const barlow = fontBarlowData.at(0)?.src.at(0)?.url
	const outfit = fontOutfitData.at(0)?.src.at(0)?.url

	const svg = await satori(component, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: "Barlow",
				data: await readFile(`./dist${String(barlow)}`),
				style: "normal",
				weight: 400,
			},
			{
				name: "Barlow",
				data: await readFile(`./dist${String(barlow)}`),
				style: "normal",
				weight: 700,
			},
			{
				name: "Outfit",
				data: await readFile(`./dist${String(outfit)}`),
				style: "normal",
				weight: 400,
			},
		],
	});

	return sharp(Buffer.from(svg)).png().toBuffer();
}
