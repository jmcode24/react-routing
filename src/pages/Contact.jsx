import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const users = ["Sillas: +233 542 863178", "Kelvin: +233 543 853771", "Henry: +233 540 873678", "Jamil: +233 547 893108"];

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
      <h1 className="mb-3">Contact us through </h1>
      {users.map((user, index) => {
        return <h1 className="text-danger" onClick={() => navigate(`/details/${index}`)}>{user}</h1>;
      })}
      </div>
    </div>
  );
};