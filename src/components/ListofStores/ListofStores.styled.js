import styled from "styled-components";

export const Container=styled.ul`
padding: ${p=>p.theme.spacing(4)};
list-style: none;

@media (min-width: 798px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:20px;
}

@media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:20px;
}
`

export const ContainerItem=styled.li`
margin-bottom: ${p=>p.theme.spacing(4)};
padding: 40px 40px 20px 40px;
gap: 14px;
border-radius: 27px;
border: 1.15px solid #F1F1F1;
opacity: 0px;
background: #E7F1ED;
`

export const ContainerTitle=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;
margin-bottom: ${p=>p.theme.spacing(4)};
`

export const ContainerRating=styled.div`
display: flex;
align-items: center;
gap:5px;
`

export const Title=styled.h5`
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 1,38;
text-align: left;
color: #1D1E21;

white-space: nowrap;        /* Не позволяет тексту переноситься на новую строку */
overflow: hidden;           /* Обрезает текст, выходящий за пределы контейнера */
text-overflow: ellipsis;
`

export const SvgRating=styled.svg`
width: 16px;
height: 16px;
`

export const Text=styled.p`
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 1,28;
color: #1D1E21;
`

export const TextStatus=styled.p`
width: 65px;
height: 34px;
padding: 8px 16px 8px 16px;
gap: 10px;
border-radius: 8px;
opacity: 0px;
background: #59B17A1A;

font-family: Inter;
font-size: 12px;
font-weight: 600;
line-height: 1,5;
letter-spacing: -0.02em;
text-align: center;
color: #59B17A;
text-transform: uppercase;
`

export const SvgContact=styled.svg`
width: 18px;
height: 18px;
`

export const ContainerConntact=styled.div`
margin-bottom: ${p=>p.theme.spacing(4)};
display: flex;
align-items: center;
gap:5px;
width: 107px;
`

export const TextContact=styled.p`
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1,29;
text-align: left;
color: #93939A;
`