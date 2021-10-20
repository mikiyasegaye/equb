import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../controls/Controls";
import { useForm, Form } from "../useForm";
import { createAPIEndpoint, ENDPOINTS } from "../../api";

const initialValues = {
  fullName: "",
};

export default function CreateUser({ setOpenModal, notify, setNotify }) {
  const { userData, errors, setErrors, handleChange } = useForm(initialValues);

  useEffect(() => {}, [notify]);

  const validateForm = () => {
    let temp = {};
    temp.fullName = userData.fullName ? "" : "This field is Required!";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const createUser = (e) => {
    e.preventDefault();
    if (validateForm()) {
      createAPIEndpoint(ENDPOINTS.USER)
        .create(userData)
        .then((res) => {
          setNotify({
            isOpen: true,
            title: "User Success",
            message: "User Created Successfully!",
            type: "success",
          });
        })
        .catch((err) => {
          setNotify({
            isOpen: true,
            title: "User Error",
            message: "Can't Create User!",
            type: "error",
          });
          console.log("create_user_error", err); //TODO: remove this line
        });

      setOpenModal(false);
    }
  };

  return (
    <>
      <Form onSubmit={createUser}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              label="Full Name"
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
              fullWidth
              error={errors.fullName}
            />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Controls.Button
              variant="contained"
              color="primary"
              size="large"
              text="SUBMIT"
              type="submit"
            />
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
