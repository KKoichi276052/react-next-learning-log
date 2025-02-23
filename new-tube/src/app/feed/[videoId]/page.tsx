interface PageProps {
	params: Promise<{ videoId: string }>;
}

const VideoPage = async ({ params }: PageProps) => {
	const { videoId } = await params;
	return <div>video ID: {videoId}</div>;
};

export default VideoPage;
