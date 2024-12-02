export const factory = {
	abi: [
		{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
		{ inputs: [], name: "FailedDeployment", type: "error" },
		{
			inputs: [
				{ internalType: "uint256", name: "balance", type: "uint256" },
				{ internalType: "uint256", name: "needed", type: "uint256" },
			],
			name: "InsufficientBalance",
			type: "error",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "address",
					name: "cloneAddress",
					type: "address",
				},
			],
			name: "HelloBaseCreated",
			type: "event",
		},
		{
			inputs: [],
			name: "createHelloBase",
			outputs: [{ internalType: "address", name: "", type: "address" }],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [],
			name: "implementation",
			outputs: [{ internalType: "address", name: "", type: "address" }],
			stateMutability: "view",
			type: "function",
		},
	],
};

export const contract = {
	abi: [
		{
			inputs: [],
			name: "getGreeting",
			outputs: [{ internalType: "string", name: "", type: "string" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "string", name: "_newGreeting", type: "string" },
			],
			name: "setGreeting",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
	],
};
