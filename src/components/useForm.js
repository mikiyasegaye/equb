import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [userData, setUserData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    userData,
    setUserData,
    errors,
    setErrors,
    handleChange,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
