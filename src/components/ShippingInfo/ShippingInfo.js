import {Title, Container, Text, Label, Input, Line, RadioInput,RadioGroup, RadioLabel,
    ContainerTotal, TextTotal, Button, ContainerForm, LabelText
} from './ShippingInfo.styled';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {selectIdOrders} from '../../redux/selects';
import { useDispatch, useSelector } from 'react-redux';
import {addCartFinish} from '../../redux/operations';
import { nanoid } from 'nanoid';
import { NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const SignupSchema = Yup.object().shape({
    namecustomer: Yup.string().required('Required'),

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
    const dispatch=useDispatch();

    const calculateTotalPrice = (orders) => {
        const total = orders.reduce((sum, order) => {
            return sum + parseFloat(order.price) * parseFloat(order.quantity);
        }, 0);
    
        return parseFloat(total.toFixed(2));
    };

    const totalPrice = calculateTotalPrice(orders);

    const { register, handleSubmit, reset, } = useForm({
        resolver: yupResolver(SignupSchema),
      });

      const onSubmit = async (data, e) => {
        const _id=nanoid();
        
        const payload = {
            ...data,
            orders, 
            _id
        };
        try {

            await dispatch(addCartFinish(payload));
            reset();
        } catch (errors) {
            alert(errors.message);
        }
    };

  return(
    <Container>
       <NotificationContainer />
       <Title>Enter shipping info </Title>
       <Text>Enter your delivery address where you get the product. You can also send any other location where you send the products.</Text>
       <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerForm>
             <Label>
              <LabelText>Name</LabelText>
                <Input
                    id="namecustomer"
                    placeholder="Enter text"
                    {...register('namecustomer')}
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
)}