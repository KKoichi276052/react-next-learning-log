import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function BasicRating() {
  const [value, setValue] = useState(2);

  return (
    <>
      <h1>Rating is {value}</h1>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
}
