import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./SearchInput";
import AuthButton from "@/modules/auth/ui/AuthButton";

const HomeNavbar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center  px-2 pr-5 z-50">
			{/* Logo and side nav bar */}
			<div className="flex items-center justify-between gap-4 w-full">
				<div className="flex items-center flex-shrink-0">
					<SidebarTrigger />
					<Link href="/" className="">
						<div className="flex items-center p-4 gap-1">
							<Image src="/logo.svg" width={32} height={32} alt="logo" />
							<p className="text-xl font-semibold tracking-tight">NewTube</p>
						</div>
					</Link>
				</div>

				{/* Search Bar */}
				<div className="flex flex-1 justify-center max-w-[720px]">
					<SearchInput />
				</div>

				<div className="flex items-center flex-shrink-0 gap-4">
					<AuthButton />
				</div>
			</div>
		</nav>
	);
};

export default HomeNavbar;
