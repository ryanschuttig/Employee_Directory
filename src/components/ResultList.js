import React from "react";

function ResultList({ filterEmployee }) {
  return (
    <>
      {filterEmployee.map((employee) => (
        <div className="row emp-card" key={filterEmployee.indexOf(employee)}>
          <div className="col-md-1">
            <img src={employee.picture.large} alt="Employee Image" />
          </div>
          <div className="col-md-2">{employee.name.first}</div>
          <div className="col-md-2">{employee.name.last}</div>
          <div className="col-md-1">{employee.email}</div>
          <div className="col-md-1">{employee.dob.split("T")[0]}</div>
        </div>
      ))}
    </>
  );
}

export default ResultList;