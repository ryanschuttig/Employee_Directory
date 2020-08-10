import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10&nat=us";

// Export an object with a "search" method that searches the RandomUser API for the passed query
export default {
  searchEmployee: function(query) {
    return axios.get(BASEURL + query);
  }
};