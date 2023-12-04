import { useQuery } from 'react-query';
import axios from '../api/axiosConfig'

export const useDayNumber = (onSuccess,onError) => {
  return useQuery('dayNo', async () =>   {
    
    const response = await axios.get('/utility/day');
    console.log(response.data.dayNo);
    return  response.data.dayNo;
  },
  {
    onSuccess,
    onError
  });
 };