"use client";

import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { UserCircle2Icon } from "lucide-react";

const AuthButton = () => {
	return (
		<>
			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<SignInButton mode="modal">
					<Button
						variant="outline"
						className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-600 border-blue-500/20 rounded-full shadow-none [&_svg]:size-5"
					>
						<UserCircle2Icon />
						Sign In
					</Button>
				</SignInButton>
			</SignedOut>
		</>
	);
};

export default AuthButton;
