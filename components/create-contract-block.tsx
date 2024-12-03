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
import Code from "./code";
import { decodeEventLog } from "viem";
import { useEffect } from "react";

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

	if (receipt) {
		console.log(receipt.logs);
	}

	useEffect(() => {
		if (isConfirmed && receipt?.logs[1].data && !deployedContract) {
			try {
				const decodedLog = decodeEventLog({
					abi: factory.abi,
					data: receipt.logs[1].data,
					topics: receipt.logs[1].topics,
				}) as unknown as { args: { cloneAddress: string } };
				const contractAddress = decodedLog.args.cloneAddress;
				setDeployedContract(contractAddress);
				localStorage.setItem("deployedContract", contractAddress);
			} catch (error) {
				console.error("Error decoding log:", error);
			}
		}
	}, [isConfirmed, receipt, deployedContract, setDeployedContract]);

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
