import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const TeacherTableList = ({ teacher, setTeacher }) => {
  const DeleteUser = (id) => {
    setTeacher(teacher.filter((num) => num.id !== id));
  };

  const editForm = (id) => {
    navigate(`/editteacher/${id}`);
  };

  const navigate = useNavigate();

  return (
    <>
      <tbody>
        {teacher.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.subject}</td>
            <td>{user.contact}</td>
            <td>
              <div className="button">
                <IconButton
                  aria-label="Edit"
                  color="primary"
                  onClick={() => editForm(user.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => DeleteUser(user.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TeacherTableList;
