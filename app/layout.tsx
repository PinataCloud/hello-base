import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";
import { getConfig } from "@/wagmi";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

const cbSans = localFont({
	src: "./fonts/Coinbase_Mono-Regular-web.woff2",
	variable: "--font-cbMono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "HelloBase",
	description:
		"Where developers can say Hello World onchain for the first time",
	icons: {
		apple: "/apple-touch-icon.png",
		shortcut: "/favicon.ico",
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "HelloBase",
		description:
			"Where developers can say Hello World onchain for the first time",
		url: "https://hellobase.dev",
		siteName: "HelloBase",
		images: ["https://www.hellobase.dev/og.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "HelloBase",
		description:
			"Where developers can say Hello World onchain for the first time",
		images: ["https://www.hellobase.dev/og.png"],
	},
};

export default function RootLayout(props: { children: ReactNode }) {
	const initialState = cookieToInitialState(
		getConfig(),
		headers().get("cookie"),
	);
	return (
		<html suppressHydrationWarning lang="en">
			<body className={`${cbSans.variable} hantialiased bg-primary`}>
				<Providers initialState={initialState}>
					{props.children}
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
