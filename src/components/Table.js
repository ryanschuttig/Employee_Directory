import React from "react";

function Table() {
  return (
    <table className="table table-hover table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
    </table>
  );
}

export default Table;