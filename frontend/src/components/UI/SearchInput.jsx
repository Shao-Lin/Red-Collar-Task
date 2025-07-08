import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SearchInput = ({ name, placeholder, label }) => {
  const [field, meta] = useField(name);

  const isError = Boolean(meta.touched && meta.error);

  return (
    <TextField
      {...field}
      label={label}
      placeholder={placeholder}
      error={isError}
      helperText={isError ? meta.error : ""}
      variant="outlined"
      fullWidth
      sx={{
        width: "clamp(300px, 59vw, 850px)",
        maxWidth: "850px",
        height: "66px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "20px",
          height: "66px",
          fontSize: "28px",
          color: "#3E2F1C",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          "& fieldset": {
            borderColor: "#C16E4F",
            borderWidth: "2px",
          },
          "&:hover fieldset": {
            borderColor: "#a8563b",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#C16E4F",
            boxShadow: "0 0 0 3px rgba(193, 110, 79, 0.2)",
          },
        },
        "& input": {
          padding: "0 16px",
          height: "66px",
        },
      }}
    />
  );
};

export default SearchInput;
