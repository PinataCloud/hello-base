"use client";

import { CreateWalletButton } from "@/components/create-wallet-button";
import { useState } from "react";
import { useConnect, useDisconnect } from "wagmi";
import { CreateContractBlock } from "@/components/create-contract-block";
import { SetGreetingBlock } from "@/components/set-greeting-block";
import { ReadGreetingBlock } from "@/components/read-greeting-block";
import Image from "next/image";

export default function Home() {
	const { connectors, connect, status, error } = useConnect();
	const { disconnect } = useDisconnect();

	const [deployedContract, setDeployedContract] = useState<string>(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("deployedContract") || "";
		}
		return "";
	});

	const [greetingTx, setGreetingTx] = useState<string>(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("greetingTx") || "";
		}
		return "";
	});

	const [offchainGreetingTx, setOffchainGreetingTx] = useState<string>(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("offchainGreetingTx") || "";
		}
		return "";
	});

	return (
		<main className="bg-[#0052FF] text-white min-h-screen font-cbMono flex flex-col gap-6 items-center justify-top">
			<section className="flex flex-col items-center justify-center w-full h-screen">
				<h1 className="text-9xl text-center">
					HELLO
					<br />
					BASE
				</h1>
				<img src="/base_logo.svg" alt="base logo" className="w-[200px]" />
				<div className="flex flex-row  gap-4 items-center justify-center mt-24">
					<p className="text-2xl">by</p>
					<Image
						src="/pinata_logo.png"
						alt="pinata logo"
						height={800}
						width={800}
						className="w-[130px]"
					/>{" "}
				</div>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Welcome!</h1>
					<p>
						If you're a developer and you've never touched a blockchain or know
						very little about them, you're in the right place. In just a few
						short minutes you'll learn the fundementals and see how you can
						start building on Base, a blockchain designed to bring the next
						generation of developers onchain.
					</p>
					<p>
						You don't need anything to start this tutorial, we'll take care of
						everything for you. just start scrolling!
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<img
						src="/base_logo.svg"
						alt="base"
						className="w-[300px] h-[300px]"
					/>
				</div>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">What is a Blockchain?</h1>
					<p>
						In short, a blockchain is an immutable digital ledger that lives on
						multiple computers. They use cryptography to link blocks of
						transactions tegether to form a history. They differ in form, but
						all blockchains have a consensus mechanism to make sure all the
						nodes (aka computers) are on the same page and keep the same
						history.
					</p>
					<p>
						These blockchain networks allow you to create an account with a
						cryptographic public and private key-pair. You can think of it like
						a PO Box where anyone can send you mail (public key address) but
						only you can open the box to see the mail (private key).
					</p>
					<p>
						Bitcoin is perhaps the most popular blockchain example, where
						transactions are simply transfers of the digitial currency from one
						account to another.
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<img
						src="/base_logo.svg"
						alt="base"
						className="w-[300px] h-[300px]"
					/>
				</div>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Enter Ethereum</h1>
					<p>
						Ethereum saw the portnetial of going beyond a simple financial
						transfer, and built a virtual machine that could run compiled
						byte-code. The Ethereum Virtual Machine was born, or "EVM" for
						short. Programs are built by writing smart contracts in Solidity
						that dictate what the code does on the EVM.
					</p>
					<p>
						Once a program or smart contract is deployed it can be interated
						with by other accounts on the network, either user accounts
						(Externally Owned Accounts) or other smart contract accounts.
						Interactions with these programs are still recorded as transactions
						on the blockchain, giving you an immutable ledger of software being
						run.
					</p>
					<p>
						This leads to a foundation of trustless software execution, which is
						perfect for financial and governance applications, and beyond!
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<img
						src="/base_logo.svg"
						alt="base"
						className="w-[300px] h-[300px]"
					/>
				</div>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">The Problem with Ethereum</h1>
					<p>
						While Ethereum was an exciting advancement in distributed computers,
						it had a few problems that have kept it from being adopted by the
						masses. As it grew so did it's cryptogrpahic operations, and this
						caused a scaling issue.
					</p>
					<p>
						All transactions onchain cost gas to keep the node operators
						running, and when the network is congested with high traffic, the
						fees become higher as well. This gets to a point where doing a
						simple transfer could cost dozens if not hundreds of dollars.
					</p>
					<p>
						There have been multiple improvements and upgrades made to Ethereum
						over the years, but not enough to keep up with the demand of
						blockchain developers and consumers.
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<img
						src="/base_logo.svg"
						alt="base"
						className="w-[300px] h-[300px]"
					/>
				</div>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Rollups as a Solutions</h1>
					<p>
						One solution to Ethereum's problem that has gained a lot of
						popularity over the past few years are Layer 2 (L2) Blockchains.
						These are blockchains that process transactions with nodes just like
						Ethereum, except when it comes to settling the transaction, these
						chains will roll up a bunch of transactions and batch process them
						on Ethereum (the Layer 1 chain). By doing this the experience on the
						L2 is much faster and cheaper than using raw Ethereum.
					</p>
					<p>
						Another large benefit to these rollups is they stay EVM compatible,
						which means the code you wrote for Ethereum can be deployed to an L2
						without any extra work. This also assists with making tools and
						infrastructure interoperable.
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<img
						src="/base_logo.svg"
						alt="base"
						className="w-[300px] h-[300px]"
					/>
				</div>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Introducing Base</h1>
					<p>
						<a
							href="https://base.org"
							target="_blank"
							rel="noreferrer"
							className="underline font-bold"
						>
							Base
						</a>{" "}
						is an Optimistic Rollup incubated by{" "}
						<a
							href="https://coinbase.com"
							target="_blank"
							rel="noreferrer"
							className="underline font-bold"
						>
							Coinbase
						</a>
						, and aims to bring the world onchain. It provides fast and cheap
						transactions, almost all of them being under $0.01. Base is open
						sourced, trusted, and has become one of the most popular blockhains
						to date.
					</p>
					<p>
						Now that you have some fundemental understandings around blockchains
						and Base, let's have you start cooking right away!
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<img
						src="/base_logo.svg"
						alt="base"
						className="w-[300px] h-[300px]"
					/>
				</div>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Create a Wallet</h1>
					<p>
						To get started on Base you'll need an account. The easiest way to do
						that is through a wallet, which is a piece of software that makes it
						easy to manage a blockchain account.
					</p>
					<p>
						We've simplified the process of making a wallet, so all you have to
						do is click the button on the right that says "Create Wallet."
						Everything we'll do is on a testnet so there won't be any real funds
						being used here. Always test on dev first ;)
					</p>
				</div>
				<div className="bg-white flex-1 flex items-center h-[500px] rounded-md justify-center">
					<CreateWalletButton />
				</div>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Deploy a Smart Contract</h1>
					<p>
						You're a developer, so we're gonna speak your language: "Hello
						World," but in our case "Hello Base" onchain. To the right is a
						simple smart contract where we have the following:
					</p>
					<ul className="list-disc pl-4">
						<li>A state variable to hold our greeting</li>
						<li>A function to set the state</li>
						<li>A function to read the state</li>
					</ul>
					<p>
						With that, click the "Deploy" button below the code. This will
						prompt a transaction to your new wallet, making this your first
						smart contract deployed onchain!
					</p>
				</div>
				<CreateContractBlock
					deployedContract={deployedContract}
					setDeployedContract={setDeployedContract}
				/>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Write to the Contract</h1>
					<p>Congrats!! Your contract is deployed 🎉</p>
					<p>
						Now we can interact with it by calling some of the functions. This
						is done by using a JSON RPC provider that can take our instructions
						+ an ABI (application binary interface) so the EVM can interpret it
						and run the code.
					</p>
					<p>
						Since the RPC uses JSON we can use libraries in Typescript, making
						it really easy to access onchain data in modern web apps like the
						one you're using now. The code on the right is being used when you
						click "Write to Contract"!
					</p>
				</div>
				<SetGreetingBlock
					deployedContract={deployedContract}
					greetingTx={greetingTx}
					setGreetingTx={setGreetingTx}
					greetingArg="Hello Base!!"
				/>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Read Contract</h1>
					<p>
						Now that you've set the greeting state on the contract, let's read
						it!
					</p>
					<p>
						We'll use the same Typescript library and pass in our contract
						address, as well as the previously mentioned ABI and function name.
					</p>
					<p>Just click the "Read Contract" button to fetch the greeting!</p>
				</div>
				<ReadGreetingBlock deployedContract={deployedContract} />
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Offchain Data</h1>
					<p>Ok we got strings, but what about larger pieces of data?</p>
					<p>
						Storing larger pieces of data onchain has proven to be difficult as
						it requires more space on the blockchain, and that means much higher
						gas payments. The solution is using a string as an offchain pointer,
						where we can fetch the data after getting the pointer.
					</p>
					<p>
						Another problem quickly encountered was that offchain storage with
						services like AWS are mutable and could be taken down, which is not
						ideal when you're building with an immutable ledger. The most
						popular solution became{" "}
						<a
							href="https://ipfs.io"
							className="underline"
							target="_blank"
							rel="noreferrer"
						>
							IPFS
						</a>
						, a distribured immutable file sharing protocol.
					</p>
					<p>
						You can learn more about IPFS{" "}
						<a
							href="https://docs.pinata.cloud/web3/ipfs-101"
							target="_blank"
							rel="noreferrer"
							className="underline"
						>
							here
						</a>
						, but for now we'll change our greeting to an offchain pointer on
						IPFS via{" "}
						<a
							href="https://pinata.cloud"
							className="underline"
							target="_blank"
							rel="noreferrer"
						>
							Pinata
						</a>
					</p>
				</div>
				<SetGreetingBlock
					deployedContract={deployedContract}
					greetingTx={offchainGreetingTx}
					setGreetingTx={setOffchainGreetingTx}
					greetingArg="ipfs://QmVLwvmGehsrNEvhcCnnsw5RQNseohgEkFNN1848zNzdng"
				/>
			</section>
			<section className="flex flex-row items-center justify-between gap-6 max-w-screen-xl h-screen">
				<div className="flex flex-col gap-4 flex-1">
					<h1 className="text-7xl text-start">Reading Offchain Data</h1>
					<p>
						Just like before we'll make a call to the contract to get the
						greeting.
					</p>
					<p>
						Since we know we're expecting an offchain reference on IPFS, we can
						render the response as a link we can click on to access it while it
						lives on IPFS
					</p>
				</div>
				<ReadGreetingBlock deployedContract={deployedContract} />
			</section>
		</main>
	);
}
