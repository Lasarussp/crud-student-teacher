import React, { useState } from "react";
import Table from "./Components/Table/Table";
import "./App.css";
import Form from "./Components/Form/Form";
import { Routes, Route } from "react-router-dom";
import EditUser from "./Components/Edit/EditUser";
import Login from "./Components/Login/Login";
import TeacherTable from "./Components/TeacherTable";
import CreateTeacher from "./Components/CreateTeacher";
import EditTeacher from "./Components/EditTeacher";
import Home from "./Components/Home";

function App() {
  const [formList, setFormList] = useState([
    {
      id: 1,
      name: "Lasarus",
      email: "lasarus@gmail.com",
      contact: 8778075566,
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@gmail.com",
      contact: 9080706050,
    },
  ]);

  const [teacher, setTeacher] = useState([
    {
      id: 1,
      name: "Vinay",
      email: "vinay@gmail.com",
      subject: "Html",
      contact: 9876543210,
    },
    {
      id: 2,
      name: "Sathesh",
      email: "sathesh@gmail.com",
      subject: "Css",
      contact: 9998887770,
    },
  ]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<Table formList={formList} setFormList={setFormList} />}
        />
        <Route path="/main" element={<Home />} />
        <Route
          path="/form"
          element={<Form formList={formList} setFormList={setFormList} />}
        />
        <Route path="/edit/:id" element={<EditUser formList={formList} />} />
        <Route
          path="/editteacher/:id"
          element={<EditTeacher teacher={teacher} />}
        />
        <Route
          path="/form1"
          element={<CreateTeacher teacher={teacher} setTeacher={setTeacher} />}
        />
        <Route
          path="/home1"
          element={<TeacherTable teacher={teacher} setTeacher={setTeacher} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div className="error">
      <img
        src="https://d1ivubrj2a21dq.cloudfront.net/wp-contact/uploads/2021//ezgif.com-crop.gif"
        alt="404-Not-Found"
      />
    </div>
  );
}

export default App;
