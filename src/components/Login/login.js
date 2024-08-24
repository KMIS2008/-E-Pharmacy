import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import {Container, ContainerInput, Input, ContainerNavigate, Button, Navigate} from './Login.styled';
import {logIn} from '../../redux/auth/operations';
import { useDispatch } from "react-redux";

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Email must contait @").required('Required'),
    password: Yup.string().min(6, "Password contain min 6 symbols").required('Required'),
});

export const LoginForm=({isModal, setLoginModal})=>{
            const dispatch=useDispatch();
            const navigate=useNavigate();

            const handleNavigate=async()=>{
                if (!isModal)
                    navigate('/register')
                else {
                    setLoginModal(false);
                }}
         
             const { register, handleSubmit,
                  reset} = useForm({
                 resolver: yupResolver(SignupSchema),
               });
         
               const onSubmit = async (data, e) => {
                 e.preventDefault();
                 
                 try {
                     await dispatch(logIn(data));
                     reset();
                 } catch (errors) {
                     alert(errors.message)
                 }
             };
             return (
         
                 <Container onSubmit={handleSubmit(onSubmit)} $isModal={isModal}>
                  <ContainerInput $isModal={isModal}>
                   
                      <Input type="email"
                             id = "email" 
                             placeholder='Email address'
                             {...register('email', { required: true })} />
         
                      <Input 
                             id = "password" 
                             type="password"
                             placeholder='Password' 
                             {...register('password', { required: true })} />        
                  </ContainerInput>
         
                  <ContainerNavigate>
                       <Button type="submit">Log in</Button>        
                       <Navigate  onClick={handleNavigate}>Don't have an account?</Navigate>
                  </ContainerNavigate>
         
               </Container>   
    )
}