import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

 
function EmpList() {
 const navigate=useNavigate();
  const [empdat,empchange]=useState(null);
const LoadDetail=(id)=>{
navigate('/employee/detail/'+id);
}
const Removefunction=(id)=>{
  if(window.confirm("Are you sure you want to remove")){
    fetch(`http://localhost:3000/employee/`+id, {
      method:"DELETE"
    })
      .then((res) => {
        alert("DELETED successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      })
  }


}
const LoadEdit=(id)=>{
  navigate('/employee/edit/'+id);
}


  useEffect(()=>{

  
    fetch("http://localhost:3000/employee").then(( res )=>{
    return res.json();
    }).then(( resp )=>{
      empchange(resp);
  
    })
     .catch((err)=>{console.log(err.message);
    })
      
    },[])



  return (
    <div className="container">
      <div className="card">
        

        <div className="card-title">
          <h2 className="text-center">EmpIoyee Listing </h2>
        </div>
        <div className="card-body ">
          <div className="divbtn">
             <Link  to="/employee/create" className='btn btn-success'> Add New  (+)
            </Link>
          </div>
            <table className="text-center table table-bordered">
              <thead className="table-dark text-center text-white">
                <tr >
                  <th scope="">ID</th>
                  <th scope="">Name</th>
                  <th scope="">Email</th>
                  <th scope="">Phone</th>
                  <th scope="">Action</th>
                </tr>
              </thead>
              <tbody>
                {empdat &&
                  empdat.map(item=>(
                    <tr className="" key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td className="text-center d-flex justify-content-around" >
                      <a className="btn btn-danger"onClick={()=>{Removefunction(item.id)}} >REMOVE</a>
                      <a className="btn btn-primary" onClick={()=>{LoadDetail(item.id)}}>Detail</a>
                      <a className="btn btn-success" onClick={()=>{LoadEdit(item.id)}}>Edit</a>
                      
                      
                      
                      </td>
                    </tr>
                  ))
                }
                
              </tbody>
            </table>

        </div>
      </div>
    </div>
  );
}

export default EmpList;
