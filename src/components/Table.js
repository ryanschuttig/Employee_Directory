import React from "react";

function Table() {
  return (
    <table className="table table-hover table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col-md-2">Image</th>
          <th scope="col-md-3">First Name</th>
          <th scope="col-md-3">Last Name</th>
          <th scope="col-md-2">Email</th>
          <th scope="col-md-2">Age</th>
        </tr>
      </thead>
    </table>
  );
}

export default Table;