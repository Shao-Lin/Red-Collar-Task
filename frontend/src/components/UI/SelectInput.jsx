import React from "react";
import { useField } from "formik";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectInput = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  return (
    <FormControl
      fullWidth
      error={isError}
      sx={{
        width: "180px",
        height: "50px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "20px",
          height: "50px",
          fontSize: "16px",
          color: "#3E2F1C",
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
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
        label={label}
        displayEmpty
        value={field.value || ""}
        onChange={(e) => helpers.setValue(e.target.value)}
      >
        <MenuItem value="None">
          <em>None</em>
        </MenuItem>
        <MenuItem value="ebooks">ebooks</MenuItem>
        <MenuItem value="free-ebooks">free-ebooks</MenuItem>
        <MenuItem value="full">full</MenuItem>
        <MenuItem value="paid-ebooks">paid-ebooks</MenuItem>
        <MenuItem value="partial">partial</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectInput;
