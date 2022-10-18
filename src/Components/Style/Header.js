import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display:flex;
  justify-content:end;
  width: 100%;
  padding:10px;
  background: rgba(196, 196, 196, 0.11);
  position: fixed;
  top: 0;
  z-index: 1;
  border-bottom: solid 1px rgba(255, 255, 255, 0.452);
}


`;

export const Menu = styled.div`
{ 
  display: flex;
  @media (max-width:768px) {
    display:flex;
    flex-direction:columm;
}

`;

export const Ul = styled.ul`
 {  
    display: flex;
    list-style:none;
    padding:10px;
 }
 @media (max-width:768px) {
  display:flex;
  flex-flow:columm;
  
  }

`;

export const A = styled(Link)`
  text-align:center;
  margin-left:40px;
  text-decoration: none;
  color: silver;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #808080;
    transition: ease-in-out 0.3s;
  }
`;
