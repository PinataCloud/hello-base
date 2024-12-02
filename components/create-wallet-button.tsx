"use client";

import React, { useCallback } from "react";
import { useConnect, useAccount } from "wagmi";
import { CoinbaseWalletLogo } from "./coinbase-wallet-logo";
import { Button } from "./ui/button";

export function CreateWalletButton() {
	const { connectors, connect, data } = useConnect();
	const account = useAccount();

	const createWallet = useCallback(() => {
		const coinbaseWalletConnector = connectors.find(
			(connector) => connector.id === "coinbaseWalletSDK",
		);
		if (coinbaseWalletConnector) {
			connect({ connector: coinbaseWalletConnector });
		}
	}, [connectors, connect]);
	return (
		<Button type="button" onClick={createWallet} className="text-white">
			<CoinbaseWalletLogo />
			{account.isConnected ? "Connected!" : "Create Wallet"}
		</Button>
	);
}
