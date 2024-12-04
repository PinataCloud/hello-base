import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export function getConfig() {
	return createConfig({
		ssr: true,
		chains: [baseSepolia],
		connectors: [
			coinbaseWallet({
				appName: "HelloBase",
				preference: "smartWalletOnly",
				appLogoUrl: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
			}),
		],
		transports: {
			[baseSepolia.id]: http(),
		},
		storage: createStorage({
			storage: cookieStorage,
		}),
	});
}

declare module "wagmi" {
	interface Register {
		config: ReturnType<typeof getConfig>;
	}
}
