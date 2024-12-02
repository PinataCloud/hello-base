"use client";

import { contract } from "@/lib/contracts";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Button } from "./ui/button";
import { CoinbaseWalletLogo } from "./coinbase-wallet-logo";

interface SetGreetingBlockProps {
	deployedContract: string;
	greetingTx: string;
	setGreetingTx: (hash: string) => void;
}

export function SetGreetingBlock({
	deployedContract,
	greetingTx,
	setGreetingTx,
}: SetGreetingBlockProps) {
	const {
		data: hash,
		isPending: isContractPending,
		writeContract,
	} = useWriteContract();

	async function setGreeting() {
		try {
			if (!deployedContract) {
				return;
			}
			writeContract({
				address: deployedContract as `0x`,
				abi: contract.abi,
				functionName: "setGreeting",
				args: ["Hello Base!!"],
			});
		} catch (error) {
			console.log(error);
		}
	}

	const {
		data: receipt,
		isLoading: isConfirming,
		isSuccess: isConfirmed,
	} = useWaitForTransactionReceipt({
		hash,
	});

	return (
		<div className="bg-white flex-1 flex flex-col items-start p-4 rounded-md justify-center w-full">
			<pre className="p-4 rounded-md text-black">
				<code>{`async function setGreeting() {
  try {
  	writeContract({
  		address: ${deployedContract},
  		abi: contract.abi,
  		functionName: "setGreeting",
  		args: ["Hello Base!!"],
  	});
  } catch (error) {
  		console.log(error);
  }
}`}</code>
			</pre>
			<Button
				disabled={!!greetingTx}
				onClick={setGreeting}
				className="mx-auto mt-12"
			>
				<CoinbaseWalletLogo />
				{isContractPending ? "Writing..." : "Write to Contract"}
			</Button>

			<div className="flex flex-col text-black mt-6">
				{isConfirming && <div>Waiting for confirmation...</div>}
				{isConfirmed && deployedContract && (
					<div>
						Transaction confirmed
						{hash &&
							(() => {
								// Store in state
								setGreetingTx(hash);
								// Store in localStorage
								localStorage.setItem("greetingTx", hash);
								return "";
							})()}
					</div>
				)}
				{greetingTx && <p>Tx: {greetingTx}</p>}
			</div>
		</div>
	);
}
