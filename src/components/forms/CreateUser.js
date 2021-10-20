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
    temp.phoneNumber = userData.phoneNumber ? "" : "This field is Required!";
    temp.subcity = userData.subcity ? "" : "This field is Required!";
    temp.woreda = userData.woreda ? "" : "This field is Required!";
    temp.houseNumber = userData.houseNumber ? "" : "This field is Required!";
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
          <Grid item xs={6}>
            <Controls.Input
              label="Phone Number"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
              fullWidth
              error={errors.phoneNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              label="Subcity"
              name="subcity"
              value={userData.subcity}
              onChange={handleChange}
              fullWidth
              error={errors.subcity}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              label="Woreda"
              name="woreda"
              value={userData.woreda}
              onChange={handleChange}
              fullWidth
              error={errors.woreda}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              label="House Number"
              name="houseNumber"
              value={userData.houseNumber}
              onChange={handleChange}
              fullWidth
              error={errors.houseNumber}
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
