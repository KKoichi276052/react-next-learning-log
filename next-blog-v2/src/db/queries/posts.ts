import type { Post } from "@prisma/client";
import { db } from "@/lib/db";

export type PostWithData = Post & {
	topic: {
		slug: string;
	};
	user: { name: string | null };
	_count: { comments: number };
};

// PostWithData represents a single post with additional data such as topic slug, user name, and comment count.
// Alternative way to type PostWithData is to use the type alias defined above.
// export type PostWithData = Awaited<
//   ReturnType<typeof fetchPostsByTopicSlug>
// >[number];

export function fetchPostsBySearchTerm(term: string): Promise<PostWithData[]> {
	return db.post.findMany({
		include: {
			topic: {
				select: {
					slug: true,
				},
			},
			user: {
				select: {
					name: true,
					image: true,
				},
			},
			_count: {
				select: {
					comments: true,
				},
			},
		},
		where: {
			OR: [{ title: { contains: term } }, { content: { contains: term } }],
		},
	});
}

export const fetchPostsByTopicSlug = (
	slug: string,
): Promise<PostWithData[]> => {
	return db.post.findMany({
		where: {
			topic: {
				slug,
			},
		},
		include: {
			topic: {
				select: {
					slug: true,
				},
			},
			user: {
				select: {
					name: true,
				},
			},
			_count: {
				select: {
					comments: true,
				},
			},
		},
	});
};

export const fetchTopPosts = async (): Promise<PostWithData[]> => {
	return db.post.findMany({
		orderBy: [
			{
				comments: {
					_count: "desc",
				},
			},
		],
		include: {
			topic: {
				select: {
					slug: true,
				},
			},
			user: {
				select: {
					name: true,
					image: true,
				},
			},
			_count: {
				select: {
					comments: true,
				},
			},
		},
	});
};
