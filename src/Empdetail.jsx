import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Empdetail() {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="card text-start">
        <div className="card-title">
          <h2> New Employee</h2>
        </div>
        <div className="card-body"></div>

        {empdata && (
          <div>
            <h2>
              The Employee Name Is : {empdata.name} ({empdata.id})
            </h2>
            <h3>Contact</h3>
            <h5>Email is: {empdata.email}</h5>
            <h5>Phone is : {empdata.phone}</h5>
            <Link className="btn btn-danger" to="/">
              Back to Listing
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Empdetail;
