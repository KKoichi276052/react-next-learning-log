/**
 * Creates a new topic based on form data and validates user authentication.
 *
 * @param state - The current state of the creation form containing any existing errors
 * @param formData - Form data containing the topic name and description
 * @returns A promise that resolves to CreateTopicFormState containing any validation or processing errors
 * @throws Will redirect to the newly created topic page on success
 *
 * The function performs the following steps:
 * 1. Validates the form data against the createTopicSchema
 * 2. Checks user authentication
 * 3. Creates a new topic in the database
 * 4. Redirects to the new topic page on success
 *
 * @example
 * ```ts
 * const formData = new FormData();
 * formData.append('name', 'my-topic');
 * formData.append('description', 'This is my new topic');
 * const result = await createTopic({errors: {}}, formData);
 * ```
 */
'use server';

import { z } from 'zod';
import { auth } from '@/lib/auth';
import type { Topic } from '@prisma/client';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import paths from '@/app/paths';
import { revalidatePath } from 'next/cache';

/**
 * Schema for creating a topic.
 *
 * This schema validates the following fields:
 * - `name`: A string that must be at least 3 characters long and can only contain lowercase letters and hyphens (`-`).
 * - `description`: A string that must be at least 10 characters long.
 *
 */
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: 'Only lowercase letters and hyphens are allowed',
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export const createTopic = async (
  state: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> => {
  // const name = formData.get('name');
  // const description = formData.get('description');
  const rawData = Object.fromEntries(formData);
  const validatedData = createTopicSchema.safeParse(rawData);

  if (!validatedData.success)
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to create a topic'],
      },
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: validatedData.data.name,
        description: validatedData.data.description,
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
  redirect(paths.topicShow(topic.slug));
};
