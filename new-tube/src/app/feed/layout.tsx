interface LayoutProps {
	children: React.ReactNode;
}

const FeedLayout = ({ children }: LayoutProps) => {
	return <div>{children}</div>;
};

export default FeedLayout;
