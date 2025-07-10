import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

const SearchInput = () => {
  const name = "search";
  const placeholder = "Поиск...";
  const [field, meta, helpers] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  const handle = (e) => {
    helpers.setValue(e.target.value);
  };

  return (
    <TextField
      {...field}
      onChange={handle}
      placeholder={placeholder}
      error={isError}
      helperText={isError ? meta.error : ""}
      variant="outlined"
      fullWidth
      sx={sxSearch}
    />
  );
};

const sxSearch = {
  width: "clamp(300px, 59vw, 850px)",
  maxWidth: "850px",
  height: "66px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    height: "66px",
    fontSize: "28px",
    color: "#3E2F1C",
    transition: "border-color .3s, box-shadow .3s",
    "& fieldset": { borderColor: "#C16E4F", borderWidth: "2px" },
    "&:hover fieldset": { borderColor: "#a8563b" },
    "&.Mui-focused fieldset": {
      borderColor: "#C16E4F",
      boxShadow: "0 0 0 3px rgba(193,110,79,.2)",
    },
  },
  "& input": { padding: "0 16px", height: "66px" },
};

export default SearchInput;
