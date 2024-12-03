import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki"; // Import the types from shiki

type Props = {
	code: string;
	lang?: BundledLanguage;
	theme?: BundledTheme;
};

export default async function Code({
	code,
	lang = "javascript",
	theme = "catppuccin-latte",
}: Props) {
	const html = await codeToHtml(code, {
		lang,
		theme,
	});

	return (
		<div
			className="opacity-75"
			dangerouslySetInnerHTML={{ __html: html }}
		></div>
	);
}
