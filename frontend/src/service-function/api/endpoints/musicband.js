import axios from "../axios";

const endpoints = {
  //musicband
  get_all_musicband: () => axios.get("musicbands/"),
  get_musicband_id: (name) => axios.get(`musicbands/${name}`),

  //interaction with the band
  post_musicband_follow: (id) => axios.post(`/musicband_like/${id}/like/`),
  post_musicband_unlike: (id) => axios.post(`/musicband_like/${id}/unlike/`),
  get_musicband_followers: (id) => axios.get(`/musicband_like/${id}/fans/`),

  //song
  get_all_song: (name) => axios.get(`song/?artist__name=${name}`),
  get_all_single: (name) => axios.get(`song/?artist__name=${name}&single=true`),
  get_all_album: (name) => axios.get(`album/?artist__name=${name}`),
  get_all_video: (name) => axios.get(`video/?artist__name=${name}`),
  get_all_photo: (name) => axios.get(`photo/?artist__name=${name}`),
};

export default endpoints;
