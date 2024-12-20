'use client';

import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Textarea } from '@nextui-org/input';
import * as actions from '@/actions';
import { useActionState, startTransition, useEffect } from 'react';
import FormButton from '../common/FormButton';

const TopicCreateForm = () => {
  const [formState, action, isPending] = useActionState(actions.createTopic, {
    errors: {},
  });
  // const { toast } = useToast();

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
          <Button color="primary">Create Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">Create a Topic</h3>
              <Input
                name="name"
                type="text"
                label="Title"
                placeholder="Enter title of your topic"
                labelPlacement="outside"
                isInvalid={!!formState.errors.name}
                errorMessage={formState.errors.name?.join(', ')}
              />
              <Textarea
                name="description"
                label="Description"
                labelPlacement="outside"
                isInvalid={!!formState.errors.description}
                errorMessage={formState.errors.description?.join(', ')}
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

export default TopicCreateForm;
