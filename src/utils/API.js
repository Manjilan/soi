import axios from "axios";

export default {
  // Gets all investments
  getInvestments: function() {
    return axios.get("https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json");
  }
};
