import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Textarea } from '@nextui-org/input';
import * as actions from '@/actions';

const TopicCreateForm = () => {
  return (
    <div>
      <Popover placement="left-start">
        <PopoverTrigger>
          <Button color="primary">Create Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={actions.createTopic}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">Create a Topic</h3>
              <Input
                type="text"
                label="Title"
                placeholder="Enter title of your topic"
                labelPlacement="outside"
              />
              <Textarea label="Description" labelPlacement="outside" />
              <Button type="submit" color="primary">
                Create
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TopicCreateForm;
