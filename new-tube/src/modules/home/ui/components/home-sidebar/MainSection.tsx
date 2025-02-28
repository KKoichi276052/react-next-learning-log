"use client";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	FlameIcon,
	HomeIcon,
	type LucideIcon,
	PlaySquareIcon,
} from "lucide-react";
import Link from "next/link";

interface MenuItem {
	title: string;
	url: string;
	icon: LucideIcon;
	auth?: boolean;
}

const items: MenuItem[] = [
	{
		title: "Home",
		url: "/",
		icon: HomeIcon,
	},
	{
		title: "Subscriptions",
		url: "/feed/subscriptions",
		icon: PlaySquareIcon,
		auth: true,
	},
	{
		title: "Trending",
		url: "/feed/trending",
		icon: FlameIcon,
		auth: true,
	},
];

// TODO: Duplication with personal section. consider to make them reusable but personal section is auth required component
const MainSection = () => {
	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								tooltip={item.title}
								asChild
								isActive={window.location.pathname === item.url}
								onClick={() => {}}
							>
								<Link href={item.url} className="flex items-center gap-4">
									<item.icon />
									<span className="text-sm">{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};
export default MainSection;
