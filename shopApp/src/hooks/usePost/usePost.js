import {useState} from 'react';
import axios from 'axios';

export default function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const response = await axios.post(url, apiData);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return {data, loading, error, post};
}
