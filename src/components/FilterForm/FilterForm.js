import { useForm } from "react-hook-form";
import Select from 'react-select';
import {Error, Form, Input, ContainerInput, Svg, Button} from './FilterForm.styled';
import { nanoid } from "nanoid";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import sprite from '../../images/sprite.svg';

const SignupSchema = Yup.object().shape({
    category: Yup.string().required('Required'),
    name: Yup.string().required('Required'),

});


export const FilterForm=()=>{
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
        //   height: state.isMulti ? '52px' : '42px', 
          border: state.isFocused ? '1px solid #59B17A' : '1px solid #1D1E2133',
        //   boxShadow: state.isFocused ? '0 0 0 1px #F6B83D' : 'none',
          '&:hover': {
            border: '1px solid #59B17A',
          },
        }),
       
        option: (provided, state) => ({
          ...provided,
        //   borderRadius: '15px',
          border: 'none',
          padding: '0 20px',

          fontFamily: 'Inter',
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '1.5',
          letterSpacing: '-0.03em',
          color: state.isSelected ? '#fff' : '#1D1E21',
          backgroundColor: state.isSelected ? '#59B17A' : '#fff',
        //    color: '#1D1E21',

        //   '&:hover': {
        //     color: '#262626',
        //   },
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
            // await dispatch(addPet(data));
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

                <ContainerInput>
                     <Input id="name" 
                            
                            placeholder="Search medicine"
    
                              {...register('name', {
                                required: 'Required',
                            })} />
                     {errors.name && <Error>{errors.name.message}</Error>}

                     <Svg width={16} height={16}>
                          <use xlinkHref={sprite + '#icon-search'}/>
                     </Svg>
                </ContainerInput>

                <Button type="submit" >
                     <svg width={14} height={14}>
                          <use xlinkHref={sprite + '#icon-filter'}/>
                     </svg>
                    Filter
                </Button>
                  

        
        </Form>
    )
}