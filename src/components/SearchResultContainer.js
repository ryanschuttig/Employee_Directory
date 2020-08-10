import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import Table from "./Table";

// SORT BY CATEGORY CODE SOMEWHERE IN HERE
class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        API.searchEmployee()
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };
    // LOGIC FOR FILTERING GOES HERE

    // When the form is submitted, search the Random User API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };

    render() {
        let filterEmployee = this.state.results.filter((employee) => {
            return (
                employee.name.last
                    .toLowerCase()
                    .indexOf(this.state.search.toLowerCase()) !== -1
            );
        });

        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Table />
                <ResultList
                    results={this.state.results}
                    filterEmployee={filterEmployee} />
            </div>
        );
    }
}

export default SearchResultContainer;