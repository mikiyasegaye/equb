import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import Controls from "../controls/Controls";
import { useForm, Form } from "../useForm";
import { postData } from "../../api";

const maritalStatusOptions = [
  { id: "single", title: "Single" },
  { id: "Married", title: "Married" },
];
const initialValues = {
  fullName: "",
  phoneNumber: "",
  subcity: "",
  woreda: "",
  houseNumber: "",
  maritalStatus: "",
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
    temp.maritalStatus = userData.maritalStatus
      ? ""
      : "This field is Required!";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const createUser = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      var data = await postData({ body: userData });
      if (data.message === "success") {
        setNotify({
          isOpen: true,
          title: "User Success",
          message: "User Registered Successfully!",
          type: "success",
        });
        setOpenModal(false);
      } else if (data.message === "error") {
        console.log("body_data: ", data);
        setNotify({
          isOpen: true,
          title: "User Error",
          message: "Can't Register User!",
          type: "error",
        });
        setOpenModal(false);
      }
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
          <Grid item xs={6}>
            <Controls.Select
              label="Marital Status"
              name="maritalStatus"
              value={userData.maritalStatus}
              onChange={handleChange}
              id="maritalStatus"
              options={maritalStatusOptions}
              error={errors.maritalStatus}
            />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Controls.Button
              variant="contained"
              color="primary"
              size="large"
              text="REGISTER"
              type="submit"
              startIcon={<AddIcon />}
            />
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
