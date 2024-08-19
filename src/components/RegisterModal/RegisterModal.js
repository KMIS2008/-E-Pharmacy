import Modal from "react-modal";
import sprite from '../../images/sprite.svg';
import {Container, SvgButton, Title, Text} from './RegisterModal.styled';
import { RegisterForm } from "components/Register/Register";
import { useEffect, useState } from "react";


Modal.setAppElement('#modal');

export const RegisterModal=({isOpenRegisterModal, setOpenRegisterModal, isModal})=>{

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
     <>
     <Modal   
          isOpen={isOpenRegisterModal}
          onRequestClose={() => {
            setOpenRegisterModal(false);
          }}
               
          style={customStyles}
          contentLabel="More info modal"     
        >
            <Container>
                <SvgButton
                  onClick={() => {
                    setOpenRegisterModal(false);
                }}>
                <svg width= '24px' height='24px'>
                  <use xlinkHref={sprite + '#icon-x'} />
                </svg> 
                </SvgButton>
            </Container>

            <Title>Sign Up</Title>
            <Text>Before proceeding, please register on our site.</Text>
            <RegisterForm isModal={isModal} setOpenRegisterModal={setOpenRegisterModal}/>
        </Modal> 
     </>
    )
}