import React from "react";
import { useField } from "formik";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const OPTIONS = [
  { v: "", label: "—" },
  { v: "ebooks", label: "ebooks" },
  { v: "free-ebooks", label: "free-ebooks" },
  { v: "full", label: "full" },
  { v: "paid-ebooks", label: "paid-ebooks" },
  { v: "partial", label: "partial" },
];

const SelectInput = ({ name = "filter", label = "", onChange }) => {
  const [field, meta, helpers] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  const handle = (e) => {
    helpers.setValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <FormControl fullWidth error={isError} sx={sxSelect}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
        label={label}
        value={field.value || ""}
        onChange={handle}
      >
        {OPTIONS.map((o) => (
          <MenuItem key={o.v} value={o.v}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const sxSelect = {
  width: "180px",
  height: "50px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    height: "50px",
    fontSize: "20px",
    color: "#3E2F1C",
    "& fieldset": { borderColor: "#C16E4F", borderWidth: "2px" },
    "&:hover fieldset": { borderColor: "#a8563b" },
    "&.Mui-focused fieldset": {
      borderColor: "#C16E4F",
      boxShadow: "0 0 0 3px rgba(193,110,79,.2)",
    },
  },
};

export default SelectInput;
