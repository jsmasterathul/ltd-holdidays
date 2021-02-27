import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";

const SearchInclusions = (props) => {
  const inclusions = [
    "Cabs",
    "hotels",
    "flights",
    "tolls",
    "ticket fares",
    "breakfast",
    "Dinner",
    "lunch",
  ];
  return (
    <div>
      <Autocomplete
        multiple
        id="tags-standard"
        options={inclusions}
        getOptionLabel={(option) => option}
        // defaultValue={"check"}
        renderInput={(params) => (
          <TextField
            fullWidth
            {...params}
            variant="standard"
            label="Select inclusions"
            placeholder="Inclusions"
          />
        )}
      />
    </div>
  );
};

SearchInclusions.propTypes = {};

export default SearchInclusions;
