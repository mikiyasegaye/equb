import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import Controls from "../controls/Controls";
import { useForm, Form } from "../useForm";
// import { postData } from "../../api";

const subcityOptions = [
  { id: "addisKetema", title: "Addis Ketema" },
  { id: "akakiKaliti", title: "Akaki Kaliti" },
  { id: "arada", title: "Arada" },
  { id: "bole", title: "Bole" },
  { id: "gullele", title: "Gullele" },
  { id: "kirkos", title: "Kirkos" },
  { id: "kolfeKeranio", title: "Kolfe Keranio" },
  { id: "lemiKura", title: "Lemi Kura" },
  { id: "ideta", title: "Lideta" },
  { id: "nifasSilkLafto", title: "Nifas Silk Lafto" },
  { id: "yeka", title: "Yeka" },
];

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
  const { formData, errors, setErrors, handleChange } = useForm(initialValues);

  useEffect(() => {}, [notify]);

  const validateForm = () => {
    let temp = {};
    temp.fullName = formData.fullName ? "" : "This field is Required!";
    temp.phoneNumber = !formData.phoneNumber
      ? "This field is Required!"
      : formData.phoneNumber.length === 10
      ? ""
      : "Phone Number Must Be 10 Digits";
    temp.subcity = formData.subcity ? "" : "This field is Required!";
    temp.woreda = formData.woreda ? "" : "This field is Required!";
    temp.houseNumber = formData.houseNumber ? "" : "This field is Required!";
    temp.maritalStatus = formData.maritalStatus
      ? ""
      : "This field is Required!";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const createUser = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("formData: ", formData);
      // var data = await postData({ body: formData });
      // if (data.message === "success") {
      //   setNotify({
      //     isOpen: true,
      //     title: "User Success",
      //     message: "User Registered Successfully!",
      //     type: "success",
      //   });
      //   setOpenModal(false);
      // } else if (data.message === "error") {
      //   console.log("body_data: ", data);
      //   setNotify({
      //     isOpen: true,
      //     title: "User Error",
      //     message: "Can't Register User!",
      //     type: "error",
      //   });
      //   setOpenModal(false);
      // }
    }
  };

  return (
    <>
      <Form onSubmit={createUser}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Controls.Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              error={errors.fullName}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              type="number"
              error={errors.phoneNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Select
              label="Subcity"
              name="subcity"
              value={formData.subcity}
              onChange={handleChange}
              options={subcityOptions}
              error={errors.subcity}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              label="Woreda"
              name="woreda"
              value={formData.woreda}
              onChange={handleChange}
              fullWidth
              error={errors.woreda}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              label="House Number"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              fullWidth
              error={errors.houseNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Select
              label="Marital Status"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              id="maritalStatus"
              options={maritalStatusOptions}
              error={errors.maritalStatus}
            />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={3}>
            <Controls.Button
              variant="contained"
              color="primary"
              size="large"
              text="REGISTER"
              type="submit"
              fullWidth
              startIcon={<AddIcon />}
            />
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
