import { create } from 'zustand';
import axios from './axiosConfig';


const useApiStore = create((set) => ({
  token:localStorage.getItem('token')|| null,
  message:null,
  userName:null,
  
  
  setToken:(newToken)=>
  {
    set({ token: newToken });
    localStorage.setItem('token', newToken);
  },
  setUserName:(data)=>
  {
    set({ userName: data });
    localStorage.setItem('userName', data);
  },
  setFullName:(data)=>
  {
    set({ fullName: data });
    localStorage.setItem('fullName', data);
  },



  
  logout:()=>
  {
   
    localStorage.removeItem('token');
    localStorage.removeItem('userName')
    localStorage.removeItem('fullName')
    set({token:null})
    set({userName:null})
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
        submissionEvaluation: 
        async (data) => {
          try {
            const response = await axios.post('/submission/evaulation', data);
            return response.data
          } catch (error) {
            console.error('Error in register:', error.message, error.response);
            throw error;
          }
        },
      
    }));

export default useApiStore;
