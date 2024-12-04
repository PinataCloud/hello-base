"use client";

import { CreateWalletButton } from "@/components/create-wallet-button";
import { useEffect, useState } from "react";
import { useConnect, useDisconnect } from "wagmi";
import { CreateContractBlock } from "@/components/create-contract-block";
import { SetGreetingBlock } from "@/components/set-greeting-block";
import { ReadGreetingBlock } from "@/components/read-greeting-block";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";

export default function Home() {
	const { connectors, connect, status, error } = useConnect();
	const { disconnect } = useDisconnect();
	const [deployedContract, setDeployedContract] = useState("");
	const [greetingTx, setGreetingTx] = useState("");
	const [offchainGreetingTx, setOffchainGreetingTx] = useState("");

	useEffect(() => {
		const storedContract = localStorage.getItem("deployedContract");
		if (storedContract) setDeployedContract(storedContract);

		const storedGreeting = localStorage.getItem("greetingTx");
		if (storedGreeting) setGreetingTx(storedGreeting);

		const storedOffchain = localStorage.getItem("offchainGreetingTx");
		if (storedOffchain) setOffchainGreetingTx(storedOffchain);
	}, []);

	return (
		<main className="bg-[#0052FF] text-white min-h-screen font-cbMono flex flex-col sm:gap-6 gap-36 items-center justify-top">
			<section className="flex flex-col items-center justify-center w-full gap-4 min-h-screen">
				<h1 className="sm:text-9xl text-8xl text-center">
					HELLO
					<br />
					BASE
				</h1>
				<img src="/base_logo.svg" alt="base logo" className="w-[200px]" />
				<a
					className="flex flex-row  gap-4 items-center justify-center mt-24"
					href="https://pinata.cloud"
					target="_blank"
					rel="noreferrer"
				>
					<p className="text-2xl">by</p>
					<Image
						src="/pinata_logo.png"
						alt="pinata logo"
						height={800}
						width={800}
						className="w-[130px]"
					/>{" "}
				</a>
			</section>
			<section className="flex sm:flex-row flex-col-reverse items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">Welcome!</h1>
					<p>
						If you're a developer and you've never touched a blockchain or know
						very little about them, you're in the right place. In just a few
						short minutes you'll learn the fundementals and see how you can
						start building on Base, a blockchain designed to bring the next
						generation of developers onchain.
					</p>
					<p>
						You don't need anything to start this tutorial, we'll take care of
						everything for you. Just start scrolling!
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-[300px] h-[300px] text-current"
					>
						<title>handshake</title>
						<path
							fill="currentColor"
							d="M12.1 21q-.425 0-.712-.288T11.1 20q0-.175.075-.363t.225-.337l4.625-4.625l-.725-.725l-4.6 4.625q-.15.15-.325.225t-.375.075q-.425 0-.712-.287T9 17.875q0-.25.075-.413t.2-.287L13.9 12.55l-.7-.7l-4.625 4.6q-.15.15-.325.225t-.4.075q-.4 0-.7-.3t-.3-.7q0-.2.075-.375t.225-.325l4.625-4.625l-.725-.7l-4.6 4.625q-.125.125-.3.2t-.425.075q-.425 0-.713-.288t-.287-.712q0-.2.075-.375t.225-.325L10.6 7.35l3.75 3.775q.275.275.65.438t.75.162q.8 0 1.4-.562t.6-1.438q0-.35-.125-.725t-.45-.7L12.7 3.825q.425-.4.95-.612T14.7 3q.65 0 1.2.213t1 .662l4.225 4.25q.45.45.663 1T22 10.4q0 .5-.225 1.013t-.65.937L12.8 20.7q-.2.2-.35.25t-.35.05m-8.575-8l-.65-.65q-.425-.4-.65-.95T2 10.25q0-.65.25-1.2t.625-.925L7.1 3.875q.4-.4.95-.638T9.125 3q.675 0 1.2.188t1.025.687L16.475 9q.15.15.225.325t.075.375q0 .4-.3.7t-.7.3q-.225 0-.375-.062t-.325-.238l-4.5-4.45z"
						/>
					</svg>
				</div>
			</section>
			<section className="flex sm:flex-row flex-col-reverse items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">
						What is a Blockchain?
					</h1>
					<p>
						In short, a blockchain is an immutable digital ledger that lives on
						multiple computers. They use cryptography to link blocks of
						transactions together to form a history. They differ in form, but
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
						transaction blocks are simply transfers of the digitial currency
						from one account to another.
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-[300px] h-[300px] text-current"
					>
						<title>blockchain</title>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M12 17c.227 0 .438-.106.86-.318l3.39-1.704c1.5-.754 2.25-1.131 2.25-1.728v-7.5M12 17c-.227 0-.438-.106-.86-.318l-3.39-1.704c-1.5-.754-2.25-1.131-2.25-1.728v-7.5M12 17V9.5m6.5-3.75c0-.597-.75-.974-2.25-1.728l-3.39-1.704C12.438 2.106 12.227 2 12 2s-.438.106-.86.318L7.75 4.022C6.25 4.776 5.5 5.153 5.5 5.75m13 0c0 .597-.75.974-2.25 1.728l-3.39 1.704c-.422.212-.633.318-.86.318M5.5 5.75c0 .597.75.974 2.25 1.728l3.39 1.704c.422.212.633.318.86.318m-2 11.25c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25m-4 0c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25m-4 0H5m9 0h5"
							color="currentColor"
						/>
					</svg>
				</div>
			</section>
			<section className="flex sm:flex-row flex-col-reverse items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">Enter Ethereum</h1>
					<p>
						Ethereum saw the potential of going beyond a simple financial
						transfer and built a virtual machine that could run compiled
						byte-code. The Ethereum Virtual Machine was born, or "EVM" for
						short. Programs are built by writing smart contracts in Solidity
						that dictate what the code does on the EVM.
					</p>
					<p>
						Once a program or smart contract is deployed it can be interacted
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-[300px] h-[300px] text-current"
					>
						<title>Ethereum</title>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="m19 12l-5.76 2.579c-.611.28-.917.421-1.24.421s-.629-.14-1.24-.421L5 12m14 0c0-.532-.305-1-.917-1.936L14.58 4.696C13.406 2.9 12.82 2 12 2s-1.406.899-2.58 2.696l-3.503 5.368C5.306 11 5 11.468 5 12m14 0c0 .532-.305 1-.917 1.936l-3.503 5.368C13.406 21.1 12.82 22 12 22s-1.406-.899-2.58-2.696l-3.503-5.368C5.306 13 5 12.532 5 12"
							color="currentColor"
						/>
					</svg>
				</div>
			</section>
			<section className="flex sm:flex-row flex-col-reverse items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">
						The Problem with Ethereum
					</h1>
					<p>
						While Ethereum was an exciting advancement in distributed computers,
						it had a few problems that have kept it from being adopted by the
						masses. As it grew so did it's cryptographic operations, and this
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 32 32"
						className="w-[300px] h-[300px] text-current"
					>
						<title>Eth problem</title>
						<path
							fill="currentColor"
							d="M31 25a6 6 0 1 0-6 6a6.007 6.007 0 0 0 6-6m-2 0a3.95 3.95 0 0 1-.567 2.019l-5.452-5.452A3.95 3.95 0 0 1 25 21a4.005 4.005 0 0 1 4 4m-8 0a3.95 3.95 0 0 1 .567-2.019l5.452 5.452A3.95 3.95 0 0 1 25 29a4.005 4.005 0 0 1-4-4m-1.41-9L17 18.59L18.42 20l4-4l-4-4L17 13.41zm-9.18 0L13 13.41L11.58 12l-4 4l4 4L13 18.59z"
						/>
						<path
							fill="currentColor"
							d="M4 9h22v7h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12v-2H4Zm0-5h22v3H4Z"
						/>
					</svg>
				</div>
			</section>
			<section className="flex sm:flex-row flex-col-reverse items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">
						Rollups as a Solution
					</h1>
					<p>
						Layer 2 (L2) blockchains have emerged as a popular solution to
						Ethereum's scaling challenges. These networks process transactions
						independently using their own nodes, but instead of settling each
						transaction individually on Ethereum (Layer 1), they bundle multiple
						transactions together and process them as a single batch. This
						batching approach makes L2 transactions significantly faster and
						more cost-effective than direct Ethereum transactions.
					</p>
					<p>
						Another large benefit to these rollups is they stay EVM compatible,
						which means the code you wrote for Ethereum can be deployed to an L2
						without any extra work. This also assists with making tools and
						infrastructure interoperable.
					</p>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-[300px] h-[300px] text-current"
					>
						<title>rollup</title>
						<g
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							color="currentColor"
						>
							<path d="M5 9.5C5 10.88 7.015 12 9.5 12S14 10.88 14 9.5S11.985 7 9.5 7S5 8.12 5 9.5" />
							<path d="M14 16.647C14 17.947 11.985 19 9.5 19S5 17.947 5 16.647V9.5m9 0v4m-4.5-4h-.009M2 18l20-7M2 14l3-1.35M22 5l-8 3.6" />
						</g>
					</svg>
				</div>
			</section>
			<section className="flex sm:flex-row flex-col-reverse items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">Introducing Base</h1>
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
						sourced, trusted, and has become one of the most popular blockchains
						to date.
					</p>
					<p>
						Now that you have some fundamental understandings around blockchains
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
			<section className="flex sm:flex-row flex-col items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">Create a Wallet</h1>
					<p>
						To get started on Base you'll need an account. The easiest way to do
						that is through a wallet, which is a piece of software that makes it
						easy to manage a blockchain account.
					</p>
					<p>
						We've simplified the process of making a wallet, so all you have to
						do is click the button that says "Create Wallet." Everything we'll
						do is on a testnet so there won't be any real funds being used here.
						Always test on dev first ;)
					</p>
				</div>
				<div className="bg-white flex-1 flex items-center h-[500px] sm:w-auto w-[350px] rounded-md justify-center">
					<CreateWalletButton />
				</div>
			</section>
			<section className="flex sm:flex-row flex-col items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">
						Deploy a Smart Contract
					</h1>
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
			<section className="flex sm:flex-row flex-col items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">
						Write to the Contract
					</h1>
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
			<section className="flex sm:flex-row flex-col items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">Read Contract</h1>
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
			<section className="flex sm:flex-row flex-col items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">Offchain Data</h1>
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
						, a distributed immutable file sharing protocol.
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
			<section className="flex sm:flex-row flex-col items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">
						Reading Offchain Data
					</h1>
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
			<section className="flex sm:flex-row flex-col items-center justify-between gap-6 max-w-screen-xl min-h-screen">
				<div className="flex flex-col gap-4 flex-1 sm:mx-auto mx-4">
					<h1 className="sm:text-7xl text-5xl text-start">What's Next?</h1>
					<p>
						In just a matter of minutes you've deployed a smart contract to
						Base, wrote data to it, and read it back. Now it's time to start
						building!
					</p>
					<p>
						Of course you don't have to do this alone. There are so many good
						resources for how you can take the next steps with Base, so we've
						decided to link a few.
					</p>
				</div>
				<div className="flex-1 flex flex-col w-full gap-4 items-center justify-center">
					{links.map((item) => (
						<Button
							key={item.name}
							className="w-[300px] p-4"
							variant="secondary"
							asChild
						>
							<a
								className="text-center"
								href={item.url}
								target="_blank"
								rel="noreferrer"
							>
								{item.name}
							</a>
						</Button>
					))}
				</div>
			</section>
			<section className="flex flex-col items-center justify-center w-full gap-4 min-h-screen max-w-2xl sm:px-auto px-4">
				<h1 className="sm:text-9xl text-8xl text-center">GO BUILD</h1>
				<p>
					Thank you for taking the time to visit HelloBase! We hope you found it
					helpful to kickstart your journey to building on Base.
				</p>
				<p>
					If you're interested in how this site was built or if you'd like to
					contribute, please check out the{" "}
					<a
						href="https://github.com/PinataCloud/hello-base"
						className="underline font-bold"
						target="_blank"
						rel="noreferrer"
					>
						GitHub repository
					</a>
				</p>
				<a
					className="flex flex-row  gap-4 items-center justify-center mt-4"
					href="https://pinata.cloud"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/pinata_logo.png"
						alt="pinata logo"
						height={800}
						width={800}
						className="w-[130px]"
					/>{" "}
				</a>
			</section>
		</main>
	);
}
