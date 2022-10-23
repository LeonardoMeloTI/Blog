import styled from "styled-components";

export const Card = styled.section`
    max-width: 500px;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    border: 3px solid black;
    align-items:center;
    flex-direction: column;
    margin-top:110px;
    margin-left:2px;
    margin-bottom:40px;
    justify-content: space-between;
    gap: clamp(1rem, 1vw, 1.2rem);
    background-color:  #ffa500;
    @media screen and (max-width:48em){
        max-width: 100%;
    }
    img{
        width:400px;
        border-radius: 5px;
    }
    h1{
        font-size: clamp(1.25rem, 2vw, 1.5rem);
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 3px;
        color: black;
    }
    p{  
        margin-left:20px;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: black;
    }
`;

export const BtnBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    button{
        margin-left:170px;
        padding: 0.5em 1em;
        border: 5px solid;
        background-color:  #ffa500;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    }
    button:where(:hover, :focus){
        outline: 1px solid black;
        transform: scale(0.95);
    }
    a{        
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;;
        font-weight: 800;
        color: blue ;
        text-decoration: none;
        outline: none;
    }
`;