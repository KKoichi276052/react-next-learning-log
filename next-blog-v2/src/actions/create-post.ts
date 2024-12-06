'use server';

import { z } from 'zod';
import { auth } from '@/lib/auth';
import type { Post } from '@prisma/client';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import paths from '@/app/paths';
import { revalidatePath } from 'next/cache';

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export const createPost = async (
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> => {
  console.log(formData);
  const rawData = Object.fromEntries(formData);
  console.log(rawData);
  const validatedData = createPostSchema.safeParse(rawData);

  console.log(validatedData);

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  console.log(session);

  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to create a post'],
      },
    };
  }

  const topic = await db.topic.findFirst({
    where: { slug },
  });

  if (!topic)
    return {
      errors: {
        _form: ['Topic not found'],
      },
    };

  console.log(topic);

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: validatedData.data.title,
        content: validatedData.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    }

    return {
      errors: {
        _form: ['Something went wrong'],
      },
    };
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));
};
