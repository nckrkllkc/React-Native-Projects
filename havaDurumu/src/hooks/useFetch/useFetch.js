import React, {useState, useEffect} from 'react';

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  function fetchData(url) {}
  const response = null; //axios ile data çekme
  return {data, loading, error};
}
