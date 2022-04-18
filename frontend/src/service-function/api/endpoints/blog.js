import axios from "../axios";

const endpoints = {
  get_all_blog: () => axios.get("blog/"),
  get_blog_detail: (name) => axios.get(`blog/${name}/`),
  get_blog_song: (name) => axios.get(`blog/${name}/song/`),
};

export default endpoints;
