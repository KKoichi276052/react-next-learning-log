"use client";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	HistoryIcon,
	ListVideoIcon,
	type LucideIcon,
	ThumbsUpIcon,
} from "lucide-react";
import Link from "next/link";

// TODO: duplication of typing. consider to make them reusable
interface MenuItem {
	title: string;
	url: string;
	icon: LucideIcon;
	auth?: boolean;
}

const items: MenuItem[] = [
	{
		title: "History",
		url: "/playlist/history",
		icon: HistoryIcon,
	},
	{
		title: "Liked Videos",
		url: "/playlist/liked",
		icon: ThumbsUpIcon,
	},
	{
		title: "All playlists",
		url: "/playlist",
		icon: ListVideoIcon,
	},
];

const PersonalSection = () => {
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
export default PersonalSection;
