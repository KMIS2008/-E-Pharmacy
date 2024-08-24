import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import{Button,Input, Navigate, ContainerInput, ContainerNavigate , Container } from './Register.styled';
import { useNavigate } from "react-router-dom";
import {registr} from '../../redux/auth/operations';
import { useDispatch } from "react-redux";
import { useState } from "react";
import {LoginModal} from '../LoginModal/LoginModal';
import { NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const SignupSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email("Email must contait @").required('Required'),
    password: Yup.string().min(6, "Password contain min 6 symbols").required('Required'),
    phone: Yup.string(),
});

export const RegisterForm=({isModal, setOpenRegisterModal})=>{
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const [isLoginModal, setLoginModal]=useState(false);

   const handleNavigate=async()=>{
    if (!isModal)
   { navigate('/login')}
    else {
        setLoginModal(true);
    }
   }

    const { register, handleSubmit,
         reset} = useForm({
        resolver: yupResolver(SignupSchema),
      });

      const onSubmit = async (data, e) => {
        e.preventDefault();
        try {
            await dispatch(registr(data));
            reset();
        } catch (errors) {
            alert(errors.message)
        }
    };
    return (

        <Container onSubmit={handleSubmit(onSubmit)} $isModal={isModal}>
          <NotificationContainer />
          <ContainerInput $isModal={isModal}>
            <Input 
                  id = "name" 
                  placeholder='User Name' 
                  {...register('name', { required: true })} />
        
             <Input type="email"
                    id = "email" 
                    placeholder='Email address'
                    {...register('email', { required: true })} />

             <Input 
                    id = "phone" 
                    placeholder='Phone number' 
                    {...register('phone', { required: true })} />

             <Input 
                    id = "password" 
                    type="password"
                    placeholder='Password' 
                    {...register('password', { required: true })} />        
         </ContainerInput>

         <ContainerNavigate>
              <Button type="submit">Register</Button>

              <Navigate  onClick={handleNavigate}>Already have an account?</Navigate>
         </ContainerNavigate>

        <LoginModal isLoginModal={isLoginModal} setLoginModal={setLoginModal} isModal={isModal} setOpenRegisterModal={setOpenRegisterModal}/>
      </Container>   
      );
}