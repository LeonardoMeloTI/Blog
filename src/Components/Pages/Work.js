import React from 'react';
import project from './Project';
import * as S from "../Style/Work";

export default function Work() {

    return (
        <>
        {project.map ((item, index) => (
            <S.Card key={index}>
                <img src={item.img} alt="fotos"/>
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
                <p>Tecnologias usadas:{item.content}</p>
                <S.BtnBox>
                    <button><a href={item.link} target="_blank" rel="noreferrer">GitHub</a></button>
                </S.BtnBox>
            </S.Card>
        ))}
        </>
    );
}