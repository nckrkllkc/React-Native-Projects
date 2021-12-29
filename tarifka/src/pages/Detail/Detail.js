import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard/DetailCard';
export default function Detail({route}) {
  const {data, loading, error} = useFetch(
    Config.API_MEAL_FILTER_BY_ID_URL + route.params.idMeal,
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <DetailCard data={data} />;
}
