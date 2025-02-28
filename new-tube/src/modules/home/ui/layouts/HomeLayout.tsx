import { SidebarProvider } from "@/components/ui/sidebar";
import HomeSidebar from "../components/home-sidebar";
import HomeNavbar from "../components/home-navbar";

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<div>
			<SidebarProvider>
				<div className="bg-gray-900">
					<HomeNavbar />
				</div>
				<div className="flex min-h-screen pt-[4rem]">
					<HomeSidebar />
					<main className="flex-1 overflow-y-auto">{children}</main>
				</div>
			</SidebarProvider>
		</div>
	);
};

export default HomeLayout;
