"use client";

import React, { useCallback } from "react";
import { useConnect, useAccount } from "wagmi";
import { CoinbaseWalletLogo } from "./coinbase-wallet-logo";
import { Button } from "./ui/button";

export function CreateWalletButton() {
	const { connectors, connect, data } = useConnect();
	const account = useAccount();

	const handleClick = useCallback(() => {
		if (account.isConnected) {
			window.open("https://wallet.coinbase.com", "_blank");
		} else {
			const coinbaseWalletConnector = connectors.find(
				(connector) => connector.id === "coinbaseWalletSDK",
			);
			if (coinbaseWalletConnector) {
				connect({ connector: coinbaseWalletConnector });
			}
		}
	}, [connectors, connect, account.isConnected]);

	return (
		<Button type="button" onClick={handleClick} className="text-white">
			<CoinbaseWalletLogo />
			{account.isConnected ? "Connected!" : "Create Wallet"}
		</Button>
	);
}
