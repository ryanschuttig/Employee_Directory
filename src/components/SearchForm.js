import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div class="jumbotron jumbotron-fluid">
        <div class="container text-center">
          <h1 class="display-4">Employee Directory</h1>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
            class="md-3"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;