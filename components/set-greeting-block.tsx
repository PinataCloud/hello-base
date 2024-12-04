"use client";

import { contract } from "@/lib/contracts";
import {
	useAccount,
	useWaitForTransactionReceipt,
	useWriteContract,
} from "wagmi";
import { Button } from "./ui/button";
import { CoinbaseWalletLogo } from "./coinbase-wallet-logo";
import { truncate } from "@/lib/utils";
import Code from "./code";
import { useEffect } from "react";

interface SetGreetingBlockProps {
	deployedContract: string;
	greetingTx: string;
	setGreetingTx: (hash: string) => void;
	greetingArg: string;
}

export function SetGreetingBlock({
	deployedContract,
	greetingTx,
	setGreetingTx,
	greetingArg,
}: SetGreetingBlockProps) {
	const account = useAccount();
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
				args: [greetingArg],
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

	useEffect(() => {
		if (isConfirmed && hash) {
			setGreetingTx(hash);
			localStorage.setItem("greetingTx", hash);
		}
	}, [isConfirmed, hash, setGreetingTx]);

	return (
		<div className="bg-white flex-1 flex flex-col items-start p-4 rounded-md justify-center sm:w-full w-screen overflow-x-scroll">
			<Code
				lang="ts"
				code={`
async function setGreeting() {
  try {
  	writeContract({
  		address: ${deployedContract},
  		abi: contract.abi,
  		functionName: "setGreeting",
  		args: ["${greetingArg}"],
  	});
  } catch (error) {
    console.log(error);
  }
}`}
			/>
			{account.isConnected ? (
				<Button
					disabled={!!greetingTx}
					onClick={setGreeting}
					className="mx-auto mt-12"
				>
					<CoinbaseWalletLogo />
					{isContractPending ? "Writing..." : "Write to Contract"}
				</Button>
			) : (
				<p className="text-black mx-auto mt-12">Create your wallet first!</p>
			)}

			<div className="flex flex-col w-full text-black mt-6 mx-auto">
				{isConfirming && <div>Waiting for confirmation...</div>}
				{greetingTx && (
					<p className="text-center">
						Tx:{" "}
						<a
							href={`https://sepolia.basescan.org/tx/${greetingTx}`}
							target="_blank"
							rel="noreferrer"
							className="underline text-primary text-center"
						>
							{truncate(greetingTx)}
						</a>
					</p>
				)}
			</div>
		</div>
	);
}
