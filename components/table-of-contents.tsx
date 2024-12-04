"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
	{ id: "welcome", title: "Welcome" },
	{ id: "what-is-a-blockchain", title: "What is a Blockchain?" },
	{ id: "enter-ethereum", title: "Enter Ethereum" },
	{ id: "the-problem-with-ethereum", title: "The Problem with Ethereum" },
	{ id: "rollups-as-a-solution", title: "Rollups as a Solution" },
	{ id: "introducing-base", title: "Introducing Base" },
	{ id: "create-a-wallet", title: "Create a Wallet" },
	{ id: "deploy-a-smart-contract", title: "Deploy a Smart Contract" },
	{ id: "write-to-the-contract", title: "Write to the Contract" },
	{ id: "read-contract", title: "Read Contract" },
	{ id: "offchain-data", title: "Offchain Data" },
	{ id: "reading-offchain-data", title: "Reading Offchain Data" },
	{ id: "whats-next", title: "What's Next?" },
	{ id: "go-build", title: "Go Build" },
];

export function TableOfContents() {
	const [activeSection, setActiveSection] = useState<string>("");
	const [isLanding, setIsLanding] = useState(true);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
						setIsLanding(entry.target.id === "landing");
					}
				}
			},
			{
				rootMargin: "-50% 0px -50% 0px",
			},
		);

		// Observe landing section as well
		const landingElement = document.getElementById("landing");
		if (landingElement) observer.observe(landingElement);

		for (const section of sections) {
			const element = document.getElementById(section.id);
			if (element) observer.observe(element);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<nav
			className={cn(
				"hidden 2xl:block fixed right-8 top-1/2 -translate-y-1/2 max-w-[200px] min-w-[180px] transition-opacity duration-500",
				isLanding ? "opacity-0 pointer-events-none" : "opacity-100",
			)}
		>
			<ul className="space-y-1 text-xs">
				{sections.map((section) => (
					<li key={section.id}>
						<a
							href={`#${section.id}`}
							className={cn(
								"block py-1 text-white/60 hover:text-white transition-all duration-300",
								"transform origin-left",
								activeSection === section.id &&
									"text-white font-bold scale-[1.15]",
							)}
						>
							{section.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
