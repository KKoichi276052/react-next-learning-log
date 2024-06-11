import { useRef } from 'react';
import Button from './components/Button';
// import Container from './components/Container';
import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';

function App() {
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: number };
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" /> */}
      {/* <Button el="button" href="https://google.com">
        Button
      </Button>
      <Button el="anchor" href="https://google.com">
        Link
      </Button> */}
      {/* <Container as={Button}>Click me</Container> */}
      {/* <Input label="Test" id="test" ref={input} /> */}

      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" name="name" label="Name" id="name" />
        <Input type="number" name="age" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
