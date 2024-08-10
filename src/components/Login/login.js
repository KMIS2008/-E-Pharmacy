import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import {Container, ContainerInput, Input, ContainerNavigate, Button, Navigate} from './Login.styled';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Email must contait @").required('Required'),
    password: Yup.string().min(6, "Password contain min 6 symbols").required('Required'),
});

export const LoginForm=()=>{
  
            const navigate=useNavigate();
         
            const handleNavigate=()=>{
         
             navigate('/register')
            }
         
             const { register, handleSubmit,
                 //  setValue, formState: { errors },
                  reset} = useForm({
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
         
                 <Container onSubmit={handleSubmit(onSubmit)}>
                  <ContainerInput>
                   
                      <Input type="email"
                             id = "email" 
                             placeholder='Email address'
                             {...register('email', { required: true })} />
         
                      <Input 
                             id = "password" 
                             placeholder='Password' 
                             {...register('password', { required: true })} />        
                  </ContainerInput>
         
                  <ContainerNavigate>
                       <Button type="submit" >Register</Button>
                       {/* {error && <Error>{error}</Error>} */}
         
                       <Navigate onClick={handleNavigate}>Don't have an account?</Navigate>
                  </ContainerNavigate>
         
               </Container>   
    )
}