// Register.jsx

// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools';
import { useMutation } from 'react-query';
import useApiStore from '../api/ApiStore';
import { useNavigate} from 'react-router-dom';
import { ErrorMessage } from "@hookform/error-message"
import { Loader } from '../components/Loader';
import abstractFirstTwoLetters from '../Helpers/abstractFirstTowLetters';

export default function Register() {
  const {setToken,register:registerForm,setFullName,setUserName} = useApiStore()
  const navigate = useNavigate()
const mutation = useMutation(registerForm)
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState:{errors}
  } = useForm({
    criteriaMode:"all"
  })
  const password = watch("password","")
  const onSubmit = (data) => {
    const { confirmPassword, ...formData } = data;
    console.log(formData);
    const {username} = data
  
    console.log(username);
    mutation.mutate(formData, {
      onSuccess: (data) => {
        setFullName(username)
        const newName =  abstractFirstTwoLetters(username)
          setUserName(newName)
          const {token} = data
         
          setToken(token)
          navigate("/user")
  
        },
      onError: (error) => {
        console.log(error);
      
      },
    });
  };

  
if(mutation.isLoading)
{
  return <Loader/>
}
else
{
  return (
    
    <div className='w-1/2 min-h-fit mx-auto mt-40 min-w-fit z-40 relative  ' onSubmit={handleSubmit(onSubmit)}  >
      <form className='bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 custom-bg-color'>
        <div className='mb-4'>
          <label className='flex justify-center mb-4  text-2xl font-extrabold'>
            Sign Up 🚀
          </label>
          
                
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color'
            {...register("username", { required: "Username is required", pattern:
            {
            value:/^[a-zA-Z0-9_]+$/,
            message:"Username must contain only alphabets, numbers and underscores"
            }
          
          })}
            placeholder='Username'
          />
          </div>
              

<ErrorMessage
  errors={errors}
  name="username"
  render={({ message }) => <p className='text-red-500'>{message}</p>}
/>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("fullName", { required:"You need to enter your  name", maxLength: 20 })}
            placeholder='Full Name'
          />
          <ErrorMessage
  errors={errors}
  name="fullName"
  render={({ message }) => <p className='text-red-500 font-[12px] text-left '>{message}</p>}
/>
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("email", { required: "Email is a requried field",
            
            pattern:
            {value:/.+@.+\..+/,
           message:"Email must be valid"
          } 
          
          })}
            placeholder='Email'
          />
                <ErrorMessage
        errors={errors}
        name="email"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className="text-red-500"key={type}>{message}</p>
          ))
        }
      />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("enrollNo", { required: "Enrollment number is required",pattern:
            {
            value:/^\d{2}[A-Z]{3,4}\d{3}$/,
            message:"Enrollment number must be in the format of 2 digits, 3 or 4 letters, and 3 digits"
            }
          })}
            placeholder='Enrollment Number'
          />
                <ErrorMessage
        errors={errors}
        name="enrollNo"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className='text-red-500' key={type}>{message}</p>
          ))
        }
      />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("phoneNumber", { required: "Phone number is required", pattern:
            
            
           {
            value:/^\d{10}$/,
            message:"Phone number must be 10 digits"
           }
          
          })}
            placeholder='Phone number'
          />
                <ErrorMessage
        errors={errors}
        name="phoneNumber"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className='text-red-500' key={type}>{message}</p>
          ))
        }
      />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" },
            pattern: {
              value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)/,

              message: "Password must include uppercase and lowercase letters, a digit, and a special character",
            },
          
          
          })}
            placeholder='Password'
          />
                <ErrorMessage
        errors={errors}
        name="password"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className='text-red-500' key={type}>{message}</p>
          ))
        }
      />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("confirmPassword", { required: "Confirm Password is required",
            validate:(value)=> value === password || 
            "Password do not match"
          })}
            placeholder='Confirm Password'
          />
          <ErrorMessage
        errors={errors}
        name="confirmPassword"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className='text-red-500' key={type}>{message}</p>
          ))
        }
      />
        </div>
        
        
      
       
        <div className='flex items-center justify-center'>
          <button
            className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type="submit"
            
          >
            Sign Up
          </button>
        </div>
      </form>
      <DevTool control={control}/>
      <div className='text-center'>
        <p className='text-gray-600 text-sm'>
          Already have an account?{' '}
          <Link to='/signin' className='text-blue-500 hover:text-red-500 z-40'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
      }
}