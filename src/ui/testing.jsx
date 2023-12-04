import { useEffect,useState } from 'react';
import useApiStore from '../api/ApiStore';
import { useQuery } from 'react-query';

const Testing = () => {
  const [pong, setPong] = useState();

  const { testApi,responseData } = useApiStore(); // Fix: use destructuring for the named export
  const { data, isLoading, error,onSuccess } = useQuery('testApi', testApi);


  const handleIt = async() => {
    try
    {
       
    console.log('Data:', data);
    setPong(data)
    }
    catch(error)
    {
        console.log(error);
    }
  };

  return (
    <>
    <button onClick={handleIt} className='text-[200px]'>Testing</button> 
    <div className='text-[200px]'>{pong}</div>
      </>
  );
};

export default Testing; // Fix: capitalize the component name
