import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import AddIcon from "@mui/icons-material/Add";
// import { makeStyles } from "@material-ui/core/styles";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import Controls from "../controls/Controls";
import Modal from "../Modal";

// const useStyles = makeStyles({});

export default function UsersList({
  formData,
  setFormData,
  notify,
  setNotify,
  idValue,
  setIdValue,
}) {
  // const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [notify]);

  const fetchUsers = async () => {
    setIsLoading(true);
    var result = await createAPIEndpoint(ENDPOINTS.USER).fetchAll();
    let users = result.data.result;
    setFormData(users);
    setIsLoading(false);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    setIdValue(id);
    setOpenModal(true);
  };

  return (
    <>
      <MaterialTable
        title=""
        columns={[
          {
            title: "Full Name",
            field: "fullName",
          },
          {
            title: "Phone Number",
            field: "phoneNumber",
          },
          {
            title: "Subcity",
            field: "subcity",
          },
          {
            title: "Woreda",
            field: "woreda",
          },
          {
            title: "House Number",
            field: "houseNumber",
          },
          {
            title: "Marital Status",
            field: "maritalStatus",
          },
          {
            title: "Add to Equb",
            filed: "id",

            render: (rowData) => (
              <div>
                <Controls.Button
                  text="ADD"
                  size="small"
                  startIcon={<AddIcon />}
                  onClick={(e) => handleClick(e, rowData.id)}
                />
              </div>
            ),
          },
        ]}
        data={formData}
        options={{
          headerStyle: {
            backgroundColor: "#23224F",
            color: "#FFF",
          },
          pageSize: 10, // make initial page size
          emptyRowsWhenPaging: false, //to make page size fix in case of less data rows
          pageSizeOptions: [10, 20, 50, 100], // page size options
        }}
        isLoading={isLoading}
      />
      <Modal
        title="ADD USER TO EQUB"
        openModal={openModal}
        setOpenModal={setOpenModal}
        notify={notify}
        setNotify={setNotify}
        idValue={idValue}
        setIdValue={setIdValue}
      ></Modal>
    </>
  );
}
