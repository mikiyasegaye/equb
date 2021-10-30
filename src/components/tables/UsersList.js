import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
// import { makeStyles } from "@material-ui/core/styles";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import Controls from "../controls/Controls";
import Modal from "../Modal";

// const useStyles = makeStyles({});

export default function UsersList({ notify, setNotify, idValue, setIdValue }) {
  // const classes = useStyles();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [notify]);

  const fetchUsers = async () => {
    setIsLoading(true);
    var result = await createAPIEndpoint(ENDPOINTS.USER).fetchAll();
    let users = result.data.result;
    setUserData(users);
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
            title: "Created By",
            field: "createdBy.fullName",
          },
          {
            title: "Activate/Deactivate",
            filed: "activationStatus",

            render: (rowData) => {
              rowData.activationStatus ? (
                <div>
                  <Controls.Button
                    text="Deactivate"
                    endIcon={<BlockIcon />}
                    onClick={(e) => handleClick(e, rowData.id)}
                  />
                </div>
              ) : (
                <div>
                  <Controls.Button
                    text="Activate"
                    endIcon={<CheckCircleIcon />}
                    onClick={(e) => handleClick(e, rowData.id)}
                  />
                </div>
              );
            },
          },
        ]}
        data={userData}
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
        title="RESET PASSWORD"
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
