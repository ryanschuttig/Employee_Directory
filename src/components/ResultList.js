import React from "react";

function ResultList({ filterEmployee }) {
  return (
    <>
      {filterEmployee.map((employee) => (
        <div className="row emp-card" key={filterEmployee.indexOf(employee)}>
          <div className="col-md-1 text-center">
            <img src={employee.picture.large} alt="Employee Image" />
          </div>
          <div className="col-md-3 text-center">{employee.name.first}</div>
          <div className="col-md-3 text-center">{employee.name.last}</div>
          <div className="col-md-3 text-center">{employee.email}</div>
          <div className="col-md-2 text-center">{employee.dob.date.split("T")[0]}</div>
        </div>
      ))}
    </>
  );
}

export default ResultList;