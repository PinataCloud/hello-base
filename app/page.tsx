export default function Home() {
	return (
		<main className="bg-[#0052FF] text-white min-h-screen font-cbMono flex flex-col gap-6 items-center justify-top">
			<section className="flex flex-col items-center justify-center w-full h-screen">
				<h1 className="text-9xl text-center">
					HELLO
					<br />
					BASE
				</h1>
				<img src="/base_logo.svg" alt="base logo" className="w-[200px]" />
				<p className="mt-24 text-2xl">Coming soon</p>
			</section>
			<section className="flex flex-col items-center justify-center gap-4 max-w-xl h-screen">
				<h1 className="text-7xl">Welcome!</h1>
				<p>
					If you're a developer and you've never touched a blockchain or know
					very little about them, you're in the right place. In just a few short
					minutes you'll learn the fundementals and see how you can start
					building on Base, a blockchain designed to bring the next generation
					of developers onchain.
				</p>
				<p>
					You don't need anything to start this tutorial, we'll take care of
					everything for you. just start scrolling!
				</p>
			</section>
			<section className="flex flex-col items-center justify-center gap-4 max-w-xl h-screen">
				<h1 className="text-7xl">What is a Blockchain?</h1>
				<p>
					In short, a blockchain is an immutable digital ledger that lives on
					multiple computers. They use cryptography to link blocks of
					transactions tegether to form a history. They differ in form, but all
					blockchains have a consensus mechanism to make sure all the nodes (aka
					computers) are on the same page and keep the same history.
				</p>
				<p>
					These blockchain networks allow you to create an account with a
					cryptographic public and private key-pair. You can think of it like a
					PO Box where anyone can send you mail (public key address) but only
					you can open the box to see the mail (private key).
				</p>
				<p>
					Bitcoin is perhaps the most popular blockchain example, where
					transactions are simply transfers of the digitial currency from one
					account to another.
				</p>
			</section>
		</main>
	);
}
