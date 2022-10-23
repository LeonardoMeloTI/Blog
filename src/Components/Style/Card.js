import styled from "styled-components";

export const Card_About = styled.section`
    
    padding: 10px;
    width:50px;
    position:relative;
    right:410px;
    border-radius: 10px;
    align-items: center;
    margin-top:37px;
    cursor: pointer;

    img{
        position:relative;
        right:1px;
        width: 50px;
        margin-right:10px;
        aspect-ratio: 1;
    }
    @media screen and (max-width:48em){
        width:160px;
        position:relative;
        left:50px;
        bottom:20px;
        }
    
`;