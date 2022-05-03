import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { Box } from "@material-ui/core";

const labels = {
  0: "Pas d'avis",
  0.5: "Dégueulasse",
  1: "Mauvais",
  1.5: "Mangeable",
  2: "Ok",
  2.5: "Appréciable",
  3: "Bon",
  3.5: "Très Bon",
  4: "Excellent",
  4.5: "Indescriptible",
  5: "Divin",
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    display: "flex",
    alignItems: "center",
  },
  label: {
    color: theme.palette.text.secondary,
  },
}));

export default function Taste({ numberOfStars }) {
  const [value] = React.useState(numberOfStars || 0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        readOnly
        aria-label="taste rating"
      />
      {value !== null && (
        <Box ml={1} className={classes.label} aria-label="taste rating label">
          {labels[value]}
        </Box>
      )}
    </div>
  );
}
