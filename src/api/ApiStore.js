import { create } from 'zustand';
import axios from './axiosConfig';

const useApiStore = create((set) => ({
    testApi: async () => {
        try {
          const response = await axios.get('/ping');
          set({ responseData: response.data });
          return response.data;
        } catch (error) {
          console.error('Error in testApi:', error.message, error.response);
          throw error; // Re-throw the error so it can be caught by the caller
        }
      },
      register: async (data) => {
        try {
          const response = await axios.post('/user/signup',data);
          return response.data;
        } catch (error) {
          console.error('Error in testApi:', error.message, error.response);
          throw error; // Re-throw the error so it can be caught by the caller
        }
      },
    }));

export default useApiStore;
