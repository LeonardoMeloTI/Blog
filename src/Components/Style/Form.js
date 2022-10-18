import styled from "styled-components";

export const Form = styled.form`
    width: 45%;
    margin:80px 400px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border: 3px solid #deb887;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    label{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family:'Roboto', sans-serif;
        font-weight: 600;
    }
    input{
        margin-bottom: 1rem;
    }
    input[type="text"],
    input[type="email"]{    
        width: 100%;
        min-height: 6vh;
        padding-inline: 1rem;
        border-radius: 8px;
        border: 1px solid #deb887;
        font-size: clamp(1rem, 1vw, 1.2rem);
        background-color: #deb887;
        color:#000080;
    }
    input[type="text"]::placeholder,
    input[type="email"]::placeholder,
    textarea::placeholder{
        color: 	#000080;
        opacity: 0.7;
    }
    textarea{
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: clamp(1rem, 1vw, 1.2rem);
        color: #000080;
        background-color: #deb887;
    }
    input:focus,
    textarea:focus{
        outline: 1px solid #deb887;
    }
    input[type="submit"]{
        width:200px;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        background-color: #000080;
        color: #deb887;
        cursor: pointer;
        padding: 0.5em 1em;
        border-radius: 8px;
        font-size: clamp(1rem, 1vw, 1.2rem);
        border: none;
        outline: none;
        transition: none;
    }
    input[type="submit"]:where(:hover, :focus){
        background-color: #deb887;
        font-weight: 500;
        color: #000080;
    }
    @media screen and (max-width:48em){
        width: 74%;
        padding: 1rem;
        display:flex;
        margin:20px 20px;
    }
    @media (max-width:360px) {
        width: 74%;
        padding: 1rem;
        display:flex;
        margin:20px 20px;
        }
`;