import { useForm } from "react-hook-form";
import Select from 'react-select';
import {Error, Form, Button} from './FilterForm.styled';
import { nanoid } from "nanoid";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import sprite from '../../images/sprite.svg';
import { useDispatch } from "react-redux";
import {getProductsFilter} from '../../redux/operations';
import {SearchInput} from '../SearchInput/SearchInput';

const SignupSchema = Yup.object().shape({
    category: Yup.string(),
    name: Yup.string(),
});


export const FilterForm=()=>{

    const dispatch=useDispatch();
    
    const customStyles = {
        placeholder: (provided) => ({
          ...provided,
          color: '#1D1E2166', 
        }),
        control: (provided, state) => ({
          ...provided,
          height: '44px',
          padding: '0 0 0 20px',
          marginBottom: '10px',
          borderRadius: '60px',
          border: state.isFocused ? '1px solid #59B17A' : '1px solid #1D1E2133',
          '&:hover': {
            border: '1px solid #59B17A',
          },
        }),
       
        option: (provided, state) => ({
          ...provided,
          border: 'none',
          padding: '0 20px',

          fontFamily: 'Inter',
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '1.5',
          letterSpacing: '-0.03em',
          color: state.isSelected ? '#fff' : '#1D1E21',
          backgroundColor: state.isSelected ? '#59B17A' : '#fff',
        }),

        indicatorSeparator: (provided) => ({
            display: 'none',
          }),
      };

    const { register, handleSubmit, setValue, formState: { errors },reset} = useForm({
        resolver: yupResolver(SignupSchema),
      });

      const onSubmit = async (data, e) => {
        e.preventDefault();
        try {
            await dispatch(getProductsFilter(data));
            reset();
        } catch (errors) {
            alert(errors.message)
        }
    };

    const categoryOptions= [
        "",
        'Medicine',
        'Heart',
        'Head',
        'Leg',
    ]

    const iscategoryOptions = categoryOptions.map(option => ({
        key: nanoid(),
        value: `${option}`,
        label: `${option}`
      }));

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
                 <Select id="category"
                                styles={customStyles}
                                placeholder="Product category"
                                isClearable
                                options={iscategoryOptions}
                               {...register('category', { required: 'Required' })}
                               onChange={value => setValue('category', value?.value || '')}
                        />
                  {errors.category && <Error>{errors.category.message}</Error>}

                <SearchInput id='name'/>

                <Button type="submit" >
                     <svg width={14} height={14}>
                          <use xlinkHref={sprite + '#icon-filter'}/>
                     </svg>
                    Filter
                </Button>
        </Form>
    )
}