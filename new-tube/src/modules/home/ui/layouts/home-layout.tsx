import { SidebarProvider } from "@/components/ui/sidebar";

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<div>
			<SidebarProvider>
				<div className="w-full">
					<HomeNavbar />
				</div>
				{children}
			</SidebarProvider>
		</div>
	);
};

export default HomeLayout;
