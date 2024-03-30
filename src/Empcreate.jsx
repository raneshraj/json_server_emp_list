import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Empcreate() {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [phone, phonechange] = useState("");
  const [email, emailchange] = useState("");
  const [active, activechange] = useState(true);
  const [validate, validchange] = useState(false);

  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = {
      name,
      phone,
      email,
      active,
    };
  

    fetch("http://localhost:3000/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully");
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" on onSubmit={handleSubmit}>
            <div className="card text-start">
              <div className="card-title">
                <h2>Add New Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label> ID </label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-group"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label> Name </label>
                      <input required
                        value={name}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label> Email </label>
                      <input 
                      required
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label> Phone </label>
                      <input
                       required
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      />

                      <label className="form-check-label"> Is Active </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        
                        SAVE
                      </button>
                      <Link to="/" className="btn btn-danger">
                        BACK
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Empcreate;
