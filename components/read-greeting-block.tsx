"use client";

import { contract } from "@/lib/contracts";
import { useAccount, useReadContract } from "wagmi";
import { Button } from "./ui/button";
import { CoinbaseWalletLogo } from "./coinbase-wallet-logo";
import { useState } from "react";
import Code from "./code";

interface ReadGreetingBlockProps {
	deployedContract: string;
}

export function ReadGreetingBlock({
	deployedContract,
}: ReadGreetingBlockProps) {
	const [greeting, setGreeting] = useState<string | undefined>("");
	const account = useAccount();

	const { data, isLoading, status } = useReadContract({
		abi: contract.abi,
		address: deployedContract as `0x`,
		functionName: "getGreeting",
	});

	async function readGreeting() {
		try {
			if (status === "success") {
				setGreeting(data as string);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="bg-white flex-1 flex flex-col items-start p-4 rounded-md justify-center w-full">
			<Code
				lang="ts"
				code={`
  const { data, isLoading, status } = useReadContract({
    abi: contract.abi,
  	address: ${deployedContract}
  	functionName: "getGreeting",
  });
`}
			/>
			{account.isConnected ? (
				<Button onClick={readGreeting} className="mx-auto mt-12">
					<CoinbaseWalletLogo />
					Read Contract
				</Button>
			) : (
				<p className="text-black">Create your wallet first!</p>
			)}

			<div className="flex flex-col text-black mt-6">
				{!isLoading && greeting && <p>Greeting: {greeting}</p>}
				{greeting && greeting.startsWith("ipfs") && (
					<a
						href={`https://dweb.mypinata.cloud/ipfs/${greeting.slice(7)}`}
						className="underline mt-4 text-center text-primary"
						target="_blank"
						rel="noreferrer"
					>
						IPFS Link
					</a>
				)}
			</div>
		</div>
	);
}
