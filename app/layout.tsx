import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";
import { getConfig } from "@/wagmi";
import type { ReactNode } from "react";

const cbSans = localFont({
	src: "./fonts/Coinbase_Mono-Regular-web.woff2",
	variable: "--font-cbMono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout(props: { children: ReactNode }) {
	const initialState = cookieToInitialState(
		getConfig(),
		headers().get("cookie"),
	);
	return (
		<html lang="en">
			<body className={`${cbSans.variable} hantialiased`}>
				<Providers initialState={initialState}>{props.children}</Providers>
			</body>
		</html>
	);
}
