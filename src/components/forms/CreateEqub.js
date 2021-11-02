import React from "react";
import { Grid } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import Controls from "../controls/Controls";
import { useForm, Form } from "../useForm";
import { postData } from "../../api";

const initialValues = {
  equbName: "",
  startingDate: new Date(),
  endingDate: new Date(),
  mainAmount: "",
  numberOfCategories: "",
};

export default function CreateUser() {
  const { formData, errors, setErrors, setOpenModal, setNotify, handleChange } =
    useForm(initialValues);

  const validateForm = () => {
    let temp = {};
    temp.equbName = formData.equbName ? "" : "This field is Required!";
    temp.startingDate = formData.startingDate ? "" : "This field is Required!";
    temp.endingDate = formData.endingDate ? "" : "This field is Required!";
    temp.mainAmount = formData.mainAmount ? "" : "This field is Required!";
    temp.numberOfCategories = formData.numberOfCategories
      ? ""
      : "This field is Required!";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const createEqub = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("formData: ", formData);
      try {
        var data = await postData({ body: formData });
        if (data.message === "success") {
          setNotify({
            isOpen: true,
            title: "Equb Success",
            message: "Equb Registered Successfully!",
            type: "success",
          });
          setOpenModal(false);
        } else if (data.message === "error") {
          console.log("body_data: ", data);
          setNotify({
            isOpen: true,
            title: "Equb Error",
            message: "Can't Register Equb!",
            type: "error",
          });
          setOpenModal(false);
        } else {
          setNotify({
            isOpen: true,
            title: "Equb Error",
            message: "Can't Register Equb!",
            type: "error",
          });
          setOpenModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Form onSubmit={createEqub}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Controls.Input
              label="Equb Name"
              name="equbName"
              value={formData.equbName}
              onChange={handleChange}
              fullWidth
              error={errors.equbName}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.DatePicker
              label="Starting Date"
              format="MMM d, yyyy"
              name="startingDate"
              value={formData.startingDate}
              onChange={handleChange}
              error={errors.startingDate}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Currency
              label="Main Amount"
              name="mainAmount"
              value={formData.mainAmount || ""}
              onChange={handleChange}
              fullWidth
              error={errors.mainAmount}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.DatePicker
              label="Ending Date"
              format="MMM d, yyyy"
              name="endingDate"
              value={formData.endingDate}
              onChange={handleChange}
              error={errors.endingDate}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Number
              label="Number of Categories"
              name="numberOfCategories"
              value={formData.numberOfCategories}
              onChange={handleChange}
              fullWidth
              error={errors.numberOfCategories}
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
