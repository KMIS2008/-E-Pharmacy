import styled from "styled-components";

export const Container=styled.div`
padding: 20px;
position: relative;

@media (min-width: 1440px) {
    display: flex;
    gap:80px;
    padding-left: 100px;
    padding-top: 100px;
}
`

export const ImgTop=styled.img`
position: absolute;
right: 0;
bottom: 30px;
width: 90px;

@media (min-width: 768px) {
    width: 120px;
    bottom: 80px;
}
`
export const Img=styled.img`
position: absolute;
right: 0;
bottom: -5px;
width: 200px;

@media (min-width: 768px) {
    width: 230px; 
    bottom: 35px;
}
`
export const ImgBottom=styled.img`
position: absolute;
right: 15px;
bottom: 0;
width: 120px;


@media (min-width: 768px) {
    width: 200px;
    bottom: 0px;
    right: 0;
}
`