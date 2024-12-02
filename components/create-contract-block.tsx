"use client";

import { factory } from "@/lib/contracts";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Button } from "./ui/button";
import { CoinbaseWalletLogo } from "./coinbase-wallet-logo";

export function CreateContractBlock({
	deployedContract,
	setDeployedContract,
}: {
	deployedContract: string;
	setDeployedContract: (address: string) => void;
}) {
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
			<pre className="p-4 rounded-md text-black">
				<code>
					{`// SPDX-License-Identifier: MIT
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
				</code>
			</pre>
			{!deployedContract && (
				<Button
					onClick={deployContract}
					disabled={isContractPending}
					className="mx-auto mt-12"
				>
					<CoinbaseWalletLogo />
					{isContractPending ? "Deploying..." : "Deploy"}
				</Button>
			)}

			<div className="flex flex-col text-black">
				{isConfirming && <div>Waiting for confirmation...</div>}
				{isConfirmed && !deployedContract && (
					<div>
						Transaction confirmed: {hash}
						{receipt.logs[1].data &&
							(() => {
								const contractAddress = `0x${receipt.logs[1].data.slice(26)}`;
								// Store in state
								setDeployedContract(contractAddress);
								// Store in localStorage
								localStorage.setItem("deployedContract", contractAddress);
							})()}
					</div>
				)}
				{deployedContract && <p>Contract: {deployedContract}</p>}
			</div>
		</div>
	);
}
