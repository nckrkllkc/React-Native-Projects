import axios from 'axios';
import {useState, useEffect} from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setLoading(false);
      setData(response.data.forecast.forecastday[0].hour);
    } catch (err) {
      setError(err);
    }
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {data, loading, error};
}
