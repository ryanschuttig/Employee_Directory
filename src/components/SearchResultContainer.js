import React, { Component } from "react";
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
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };
    // LOGIC FOR FILTERING
    

    // When the form is submitted, search the Random User API for `this.state.search`
    handleInputChange = event => {
        event.preventDefault();
        this.setState({ search: event.target.value });
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
                <div class="jumbotron jumbotron-fluid mb-0">
                    <div class="container text-center">
                        <h1 class="display-4">Employee Directory</h1>
                        <input
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            id="search"
                            class="md-3"
                            onChange={this.handleInputChange.bind(this)}
                            value={this.state.search}
                        />
                    </div>
                </div>
                <Table />
                <ResultList
                    results={this.state.results}
                    filterEmployee={filterEmployee} />
            </div>
        );
    }
}

export default SearchResultContainer;