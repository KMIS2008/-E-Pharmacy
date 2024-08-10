import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import{Button,Input, Navigate  } from './Login.styled';
import { useNavigate } from "react-router-dom";


const SignupSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email("Email must contait @").required('Required'),
    password: Yup.string().min(6, "Password contain min 6 symbols").required('Required'),
    phone: Yup.string(),
});

export const LoginForm=()=>{
   const navigate=useNavigate();

   const handleNavigate=()=>{

    navigate('/login')
   }

    const { register, handleSubmit, setValue, formState: { errors },reset} = useForm({
        resolver: yupResolver(SignupSchema),
      });

      const onSubmit = async (data, e) => {
        e.preventDefault();
        try {
            // await dispatch(getProductsFilter(data));
            reset();
        } catch (errors) {
            alert(errors.message)
        }
    };
    return (

        <form onSubmit={handleSubmit(onSubmit)}>

          <Input 
             id = "name" placeholder='User Name' 
             {...register('name', { required: true })} />
        
          <Input type="email" id = "email" 
          placeholder='Email address'
           {...register('email', { required: true })} />

           <Input 
             id = "phone" placeholder='Phone number' 
             {...register('phone', { required: true })} />

             <Input 
             id = "password" placeholder='Password' 
             {...register('password', { required: true })} />

    
        <Button type="submit" >Register</Button>
        {/* {error && <Error>{error}</Error>} */}

        <Navigate onClick={handleNavigate}>Already have an account?</Navigate>
      </form>   
      );
}