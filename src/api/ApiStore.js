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
  
  logout:()=>
  {
    set({token:null})
    localStorage.removeItem('token');
  },


    testApi: async () => {
        try {
          const response = await axios.get('/ping');
          set({ responseData: response.data });
          return response.data;
        } catch (error) {
          console.error('Error in testApi:', error.message, error.response);
          throw error; 
        }
      },
      getSubmission: async () => {
        try {
          const response = await axios.get('/submission/my');
          set({ responseData: response.data });
          return response.data;
        } catch (error) {
          console.error(error);
          throw error; 
        }
      },
      getAdminSubmission: async (domain) => {
        try {
          const response = await axios.get(`/submission/all/${domain}`);
          set({ responseData: response.data });
          return response.data;
        } catch (error) {
          console.error(error);
          throw error; 
        }
      },
      getLeaderBoard: async () => {
        try {
          const response = await axios.get('/leaderboard/all');
          set({ responseData: response.data });
          return response.data;
        } catch (error) {
          console.error(error);
          throw error; 
        }
      },

      register: 
        async (data) => {
          try {
            const response = await axios.post('/user/signup', data);
            return response.data
          } catch (error) {
            console.error('Error in register:', error.message, error.response);
            throw error;
          }
        },
        login: 
        async (data) => {
          try {
            const response = await axios.post('/user/login', data);
            return response.data
          } catch (error) {
            console.error('Error in register:', error.message, error.response);
            throw error;
          }
        },
        submission: 
        async (data) => {
          try {
            const response = await axios.post('/submission', data);
            return response.data
          } catch (error) {
            console.error('Error in register:', error.message, error.response);
            throw error;
          }
        },
        
        
      
    }));

export default useApiStore;
