import React from "react";
import * as S from "../Components/Style/Header";

const Header = ({ home,about,contact,work,onu}) => {
  return (
     <S.Nav>
      <S.Menu>
        <S.Ul>
             <S.A to="/">{home}</S.A>
             <S.A to="/About">{about}</S.A>
             <S.A to="/Contact">{contact}</S.A>
             <S.A to="/Work">{work}</S.A>
             <S.A to="/Onu">{onu}</S.A>
        </S.Ul>
       </S.Menu>
      </S.Nav>
  );
};

export default Header;