import Modal from "react-modal";
import sprite from '../../images/sprite.svg';
import { useEffect, useState } from "react";
import {Container, SvgButton, Title, Text} from './LoginModal.styled';
import {LoginForm} from '../Login/login';

Modal.setAppElement('#modal');

export const LoginModal=({isLoginModal, setLoginModal, isModal, setOpenRegisterModal})=>{

    const [customStyles, setCustomStyles] = useState(getCustomStyles());

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)'); // Зміна на розмір планшета
      const handleResize = () => {
          setCustomStyles(getCustomStyles());
      };

      mediaQuery.addEventListener('change', handleResize);

      return () => {
          mediaQuery.removeEventListener('change', handleResize);
      };
  }, []);

  function getCustomStyles() {
    if (window.matchMedia('(max-width: 768px)').matches) { 
        return {
          overlay: {
            backgroundColor: "rgba(38, 38, 38, 0.3)",
          },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              padding: "50px 70px",
              maxWidth: "463px",
              maxHeight: "530px",
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
            },
        };
    } else {
        return {
            overlay: {
              backgroundColor: "rgba(38, 38, 38, 0.3)",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              padding: "40px 32px",
              maxWidth: "343px",
              maxHeight: "494px",
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
            },
        };
    }
}

    return(
    
        <Modal   
          isOpen={isLoginModal}
          onRequestClose={() => {
            setLoginModal(false);
          }}
               
          style={customStyles}
          contentLabel="More info modal"     
        >
            <Container>
                <SvgButton
                  onClick={() => {
                    setLoginModal(false);
                }}>
                <svg width= '24px' height='24px'>
                  <use xlinkHref={sprite + '#icon-x'} />
                </svg> 
                </SvgButton>
            </Container>

            <Title>Log in to your account</Title>
            <Text>Please login to your account before continuing.</Text>
            <LoginForm isModal={isModal} setLoginModal= {setLoginModal} setOpenRegisterModal={setOpenRegisterModal}/>
  
        </Modal> 
    )
}