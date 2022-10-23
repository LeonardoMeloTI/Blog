import styled from "styled-components";
import Person from "../img/Person.jpeg"


export const Container = styled.div`
width:100%;
heigth:auto;
display:flex;
justify-content:flex-end;
margin-top:63px;
`;

export const Section = styled.section`
  background-image: url(${Person});
  background-repeat: no-repeat;
   max-width: 320px;
  background-size:contain;
  margin-top:80px;
  margin-bottom:30px;
  margin-right:480px;
  align-items: center;
	height: 430px;
	border-radius: 20%;
  
@media screen and (max-width:580px){
  display:flex;
  flex-direction:column;
  width:180px;
  font-size:2.5rem;
  margin-top:90px;
  margin-right:290px;
  }
`;

export const H1 = styled.h1`
display:inline-block;
width:320px;
height:80px;
margin-left:320px;
margin-right:10px;
margin-top:100px;
font-family:'Roboto', sans-serif;
font-weight:900;
font-size:3.0rem;
color: #3c3ccc;

@media screen and (max-width:580px){
  display:flex;
  flex-direction:column;
  width:260px;
  font-size:2.5rem;
  margin-top:260px;
  margin-right:240px;
  }

::after {
  display:flex;
  width:480px;
  margin-top:30px;
  position:relative;
  content: "Desenvolvedor Front-End";
  color: #ffa500;
  border-color: black;
  font-size:2.4rem;
  @media screen and (max-width:560px){
    display:inline-block;
    width:400px;
    margin-top:10px;
    position:relative;
    content: "Desenvolvedor Front-End";
    color: #ffa500;
    border-color: black;
    font-size:2.3rem

    }
  
}
`;


