import React from 'react';
import Data from './Data.js'
import * as S from "../Style/Card";

export default function Card(){
    return (
        <>
            {Data.map((item, index) => (
                <S.Card_About key={index}>
                    <img src={item.img} alt={"TecnologiasTI"}/>
                </S.Card_About>
            ))}
        </>
    );
}