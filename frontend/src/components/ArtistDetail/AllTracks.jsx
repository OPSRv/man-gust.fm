import { PlayList } from "../PlayList/PlayList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AllTracks = () => {
  const location = useLocation();
  console.log(location.pathname);

  const [loading, setLoading] = useState(true);
  const [allSong, setAllSong] = useState([]);

  useEffect(() => {
    const fetchData = async (name) => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://127.0.0.1:8000/api/v1/song/?artist__name=${name}/`
        );
        setAllSong(response);
        console.log(response, "response");
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <PlayList />
    </>
  );
};

export { AllTracks };
