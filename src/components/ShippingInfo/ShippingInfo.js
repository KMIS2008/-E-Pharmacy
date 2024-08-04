import {Title, Container, Text, Label, Input, Line, RadioInput,RadioGroup, RadioLabel,
    ContainerTotal, TextTotal, Button, ContainerForm, LabelText
} from './ShippingInfo.styled';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {selectIdOrders} from '../../redux/selects';
import { useSelector } from 'react-redux';


const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),

    email: Yup.string().email("Email must contain @")
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,'Enter a valid Email')
    .required('Required'),

    phone: Yup.string()
    .required('Phone number is required'),
    
    address: Yup.string().required('Required'),

    paymentMethod: Yup.string().required('Select a payment method'),
});

export const ShippingInfo=()=>{
    const orders=useSelector(selectIdOrders);

    const calculateTotalPrice = (orders) => {
        return orders.reduce((total, order) => {
            return total + parseFloat(order.price); // Преобразуем значение price в число и добавляем к общему
        }, 0);
    };

    const totalPrice = calculateTotalPrice(orders);

    const { register, handleSubmit, reset, } = useForm({
        resolver: yupResolver(SignupSchema),
      });

    const onSubmit = async (data, e) => {
        e.preventDefault();
        try {
            // await dispatch(registr(data));
            reset();
        }  
        catch (errors) {
            alert(errors.message)
        }
    };

  return(
    <Container>
       <Title>Enter shipping info </Title>
       <Text>Enter your delivery address where you get the product. You can also send any other location where you send the products.</Text>
       <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerForm>
             <Label>
              <LabelText>Name</LabelText>
                <Input
                    id="name"
                    placeholder="Enter text"
                    {...register('name')}
                 />
           </Label>

           <Label>
                <LabelText>Email</LabelText>
                    <Input
                        id="email"
                        placeholder="Enter text"
                        {...register('email')}
                    />
            </Label>

            <Label>
                    <LabelText> Phone</LabelText>
                    <Input
                        id="phone"
                        placeholder="Enter text"
                        {...register('phone')}
                    />
            </Label>

            <Label>
                <LabelText>Address</LabelText>
                    <Input
                        id="address"
                        placeholder="Enter text"
                        {...register('address')}
                    />
            </Label>
          </ContainerForm>
          

            <Line></Line>
            <Title>Payment method </Title>
            <Text>You can pay us in a multiple way in our payment gateway system.</Text>

            <RadioGroup>
                   <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="Cash On Delivery"
                            {...register('paymentMethod')}
                        />
                        Cash On Delivery
                    </RadioLabel>
                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="Bank"
                            {...register('paymentMethod')}
                        />
                        Bank
                    </RadioLabel>                
            </RadioGroup>

            <Line></Line>

            <Title>Order details  </Title>
            <Text>Shipping and additionnal costs are calculated based on values you have entered.</Text>

            <ContainerTotal>
                <TextTotal>Total:</TextTotal>
                <TextTotal>৳ {totalPrice}</TextTotal>
            </ContainerTotal>

            <Button type='submit'>Place order</Button>

       </form>
    </Container>
)
}