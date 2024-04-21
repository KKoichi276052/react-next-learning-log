import { Box, Slider, TextField } from "@mui/material";
import { useState } from "react";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [value, setValue] = useState(50);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ border: "1px solid gray" }}>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={name}
        onChange={updateName}
      />
      <Slider aria-label="Volume" value={value} onChange={handleChange} />
    </Box>
  );
}
