"use client";

import { factory } from "@/lib/contracts";
import {
	useAccount,
	useWaitForTransactionReceipt,
	useWriteContract,
} from "wagmi";
import { Button } from "./ui/button";
import { CoinbaseWalletLogo } from "./coinbase-wallet-logo";
import { truncate } from "@/lib/utils";
import { codeToHtml } from "shiki";
import Code from "./code";

export function CreateContractBlock({
	deployedContract,
	setDeployedContract,
}: {
	deployedContract: string;
	setDeployedContract: (address: string) => void;
}) {
	const account = useAccount();
	const {
		data: hash,
		isPending: isContractPending,
		writeContract,
	} = useWriteContract();

	async function deployContract() {
		try {
			writeContract({
				address: "0xa1E4FeD32ebB56806773A04e40DC88da794a445A",
				abi: factory.abi,
				functionName: "createHelloBase",
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
		<div className="bg-white flex-1 flex flex-col items-center p-4 rounded-md justify-center w-full">
			<Code
				lang="solidity"
				code={`
// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

contract HelloBase {

	// State variable to store our string
	string private greeting;

	// Function to store a string
	function setGreeting(string memory _newGreeting) public {
		greeting = _newGreeting;
	}

	// Function to retrieve the stored string
	function getGreeting() public view returns (string memory) {
		return greeting;
	}

}`}
			/>
			{account.isConnected ? (
				<Button
					onClick={deployContract}
					disabled={!!deployedContract}
					className="mx-auto mt-12"
				>
					<CoinbaseWalletLogo />
					{isContractPending ? "Deploying..." : "Deploy"}
				</Button>
			) : (
				<p className="text-black">Create your wallet first!</p>
			)}

			<div className="flex flex-col text-black mt-6">
				{isConfirming && <div>Waiting for confirmation...</div>}
				{isConfirmed && !deployedContract && (
					<div>
						{receipt.logs[1].data &&
							(() => {
								const contractAddress = `0x${receipt.logs[1].data.slice(26)}`;
								// Store in state
								setDeployedContract(contractAddress);
								// Store in localStorage
								localStorage.setItem("deployedContract", contractAddress);
								return "";
							})()}
					</div>
				)}
				{deployedContract && (
					<p>
						Contract:{" "}
						<a
							href={`https://sepolia.basescan.org/address/${deployedContract}`}
							target="_blank"
							rel="noreferrer"
							className="underline text-primary"
						>
							{truncate(deployedContract)}
						</a>
					</p>
				)}
			</div>
		</div>
	);
}
