'use client';

import { startTransition, useActionState } from 'react';
import * as actions from '@/actions';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Textarea } from '@nextui-org/input';
import FormButton from '@/components/common/FormButton';

const PostCreateForm = () => {
  const [formState, action, isPending] = useActionState(actions.createPost, {
    errors: {},
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      action(formData);
    });
  }

  return (
    <div>
      <Popover placement="left-start">
        <PopoverTrigger>
          <Button color="primary">Create Post</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">Create a Post</h3>
              <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Enter title of your topic"
                labelPlacement="outside"
                isInvalid={!!formState.errors.title}
                errorMessage={formState.errors.title?.join(', ')}
              />
              <Textarea
                name="content"
                label="Content"
                labelPlacement="outside"
                isInvalid={!!formState.errors.content}
                errorMessage={formState.errors.content?.join(', ')}
              />
              {formState.errors._form && (
                <p className="text-danger">
                  {formState.errors._form?.join(', ')}
                </p>
              )}
              <FormButton isLoading={isPending}>Create</FormButton>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PostCreateForm;
