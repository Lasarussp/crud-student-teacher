import React from "react";
import { useNavigate } from "react-router-dom";
import TeacherTableList from "./TeacherTableList";
const TeacherTable = ({ teacher, setTeacher }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container container-1 mt-5">
        <div className="row row-main mt-3">
          <div className="col">
            <h2 className="text-center pb-3">Teacher Details</h2>
            <div className="row">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>

                    <th scope="col">Subject</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <TeacherTableList teacher={teacher} setTeacher={setTeacher} />
              </table>
            </div>
            <div className="create-div">
              <button
                className="btn btn-primary create-btn"
                onClick={() => navigate(`/form1`)}
              >
                Create
              </button>
              <button
                className="btn btn-primary create-btn"
                onClick={() => navigate(`/main`)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherTable;
