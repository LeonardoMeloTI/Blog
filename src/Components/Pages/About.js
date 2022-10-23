import React from "react";
import Card from '../Pages/Card.js';
import * as S from "../Style/About.js";

import Formatura from '../img/Formatura.jpeg'

const About = () => {
  return (
    <>
      <S.Container>
                <S.Wrapper>
                    <img src={Formatura} alt="Its me"/>
                    <S.AbouTxt>
                        <p>Logo depois da graduação,fiz transição para programação com foco em programação web, consegui uma vaga no Vai na Web estudos direcionado em Front-End, moro em Santa Teresa.
                            Eu gosto muito da dinâmica de trabalho em time, onde é trabalhado as soft skills e hard skills,desde o inicio no processo de autoconhecimento descobrindo novas habilidades e agregando meu conhecimento a equipe do jeito que ajude a melhorar no âmbito do projeto que venha ser desenvolvido. Sou uma pessoa curiosa que se aventura a descobrir conteúdos e assuntos novos todos os dias e me tornando um programador mais eficiente no mercado de trabalho, para isso estou diariamente aprendendo e pesquisando as minha dúvidas.
                            Procuro buscar o máximo de Feedback possível sobre os projetos, de forma a melhorar e poder fazer projetos que sejam acessíveis e funcionais.
                            Essas são as tecnologias que eu mais uso no momento</p>
                    </S.AbouTxt>
                    <Card/>
                </S.Wrapper>
            </S.Container>       
            
    </>
  );
};

export default About;