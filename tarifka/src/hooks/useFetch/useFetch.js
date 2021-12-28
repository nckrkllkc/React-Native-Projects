import axios from 'axios';
import {useState, useEffect} from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {data, loading, error};
}
