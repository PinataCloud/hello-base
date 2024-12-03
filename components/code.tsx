"use client";

import { codeToHtml } from "shiki";
import { useEffect, useState } from "react";
import type { BundledLanguage, BundledTheme } from "shiki"; // Import the types from shiki

type Props = {
	code: string;
	lang?: BundledLanguage;
	theme?: BundledTheme;
};

export default function Code({
	code,
	lang = "javascript",
	theme = "min-light",
}: Props) {
	const [html, setHtml] = useState<string>("");

	useEffect(() => {
		const highlight = async () => {
			const highlighted = await codeToHtml(code, {
				lang,
				theme,
			});
			setHtml(highlighted);
		};
		highlight();
	}, [code, lang, theme]);

	return (
		<div
			className="sm:w-full w-[350px]"
			dangerouslySetInnerHTML={{ __html: html }}
		></div>
	);
}
