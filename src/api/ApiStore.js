import { create } from 'zustand';
import axios from './axiosConfig';

const useApiStore = create((set) => ({
  token:localStorage.getItem('token')|| null,
  message:null,
  setToken:(newToken)=>
  {
    set({ token: newToken });
    localStorage.setItem('token', newToken);
  },
  setMessage: (newMessage) => {
    set({ msg: newMessage });
  },
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
          const {token} = response.data
         set({token})
         localStorage.setItem('token',token)
         return response.data
        } catch (error) {
          console.error('Error in register:', error.message, error.response);
          throw error;
        }
      },
    }));

export default useApiStore;
