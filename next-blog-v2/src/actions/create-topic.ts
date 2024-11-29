'use server';

import { z } from 'zod';

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

export const createTopic = async (formData: FormData) => {
  // const name = formData.get('name');
  // const description = formData.get('description');
  const rawData = Object.fromEntries(formData);
  const validatedData = createTopicSchema.safeParse(rawData);

  if (!validatedData.success)
    console.log(validatedData.error.flatten().fieldErrors);

  console.log(validatedData);
};
