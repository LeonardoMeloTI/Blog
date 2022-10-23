import styled from "styled-components";

export const Container = styled.section`
    max-width: 1980px;
    padding: 15px;
    margin-inline: auto;
`;

export const Wrapper = styled.div`
    width: 100%;
    margin-top:50px;
    padding: 10px;
    margin-inline: auto;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
    img{
        margin-top:0px;
        width:30.2%;
        border-radius: 8px;
        border: 4px solid black;
    }
    @media screen and (max-width:48em){
        width: 100%;
        flex-direction: column;
        align-items: center;
        img{
            width: 300px;
        }
    }
`;

export const AbouTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 1rem;
    p{  
        text-align: right;
        margin-top:240px;
        margin-left:280px;
        width: 65ch;
        font-size: 1.15rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        color: #FFC300;
    }
    @media screen and (max-width:48em){
        align-items: center;,
        p{
            font-size: 1rem;
            margin-top:20px;
            margin-left:3px;
            text-align: center;
            width: 50ch;
        }
        
`;