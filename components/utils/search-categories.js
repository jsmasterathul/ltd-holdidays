import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";

import { db } from "../../config/firebase";

const SearchCategories = (props) => {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    var docRef = db.collection("categories").doc("categories");

    // docRef
    //   .get()
    //   .then(function (doc) {
    //     if (doc.exists) {
    //       setCategories(doc.data().types);
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log("Error getting document:", error);
    //   });
  });

  return (
    <div>
      <Autocomplete
        multiple
        id="tags-standard"
        options={categories}
        getOptionLabel={(option) => option}
        // defaultValue={"check"}
        renderInput={(params) => (
          <TextField
          fullWidth
            {...params}
            variant="standard"
            label="Select Categories"
            placeholder="Categories"
          />
        )}
      />
    </div>
  );
};

SearchCategories.propTypes = {};

export default SearchCategories;
