import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData((values) => {
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
    formData,
    setFormData,
    openModal,
    setOpenModal,
    notify,
    setNotify,
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
