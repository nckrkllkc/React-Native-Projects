import axios from 'axios';
import {useState, useEffect} from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      setData(await axios.get(url));
      setLoading(false);
    } catch (err) {
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
