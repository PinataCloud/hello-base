import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function truncate(address: string) {
	if (address.length > 43) {
		return `${address.slice(0, 21)}...${address.slice(-21)}`;
	}
	return address;
}
