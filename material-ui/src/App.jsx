import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import BasicRating from "./BasicRating";
import "./App.css";

function App() {
  return (
    <>
      {/* <Stack spacing={2} direction="row">
        <Button variant="contained">Contained</Button>
      </Stack> */}

      <BasicRating />
    </>
  );
}

export default App;
