import styled from "styled-components";
import Person from "../img/Person.jpeg"


export const Container = styled.div`
width:100%;
heigth:auto;
display:flex;
justify-content: space-evenly;
margin-top:63px;
`;

export const Section = styled.section`
  background-image: url(${Person});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left:2px;
  margin-top:80px;
  margin-bottom:30px;
  justify-content:flex-end;
  align-items: center;
  width: 360px;
	height: 430px;
	border-radius: 30%;
`;

export const H1 = styled.h1`
display:flex;
font-family:
width:30px;
height:80px;
margin-left:600px;
margin-top:100px;
font-family:'Roboto', sans-serif;
font-weight:900;
font-size:4rem;
`;


