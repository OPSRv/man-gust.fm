import axios from "../axios";

const endpoints = {
  get_slider_data: () => axios.get("slider/"),
};

export default endpoints;
