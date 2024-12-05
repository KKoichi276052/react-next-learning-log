'use server';

import { z } from 'zod';
import { auth } from '@/lib/auth';
import type { Post } from '@prisma/client';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import paths from '@/app/paths';
import { revalidatePath } from 'next/cache';

const createPostSchema = z.object({
  name: z.string().min(3),
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
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> => {
  const rawData = Object.fromEntries(formData);
  const validatedData = createPostSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to create a post'],
      },
    };
  }

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: validatedData.data.name,
        content: validatedData.data.content,
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

  revalidatePath('/');
  redirect(paths.postShow(post));
};
