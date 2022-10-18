import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as S from "../Style/Form"

export default function Form() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_544so5q', 'template_wnpqrzk', 
                        form.current, 'x6wLsUgh9SHXBdIUv')

        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
         <S.Form ref={form} onSubmit={sendEmail}>
            <label htmlFor='name'>Nome:</label>
            <input id='name' type="text" name="user_name" placeholder='Nome'/>
            <label htmlFor='email'>E-mail:</label>
            <input id='email' type="email" name="user_email" placeholder='exemplo@gmail.com'/>
            <label htmlFor='questions'>Assunto:</label>
            <textarea id="questions" name="message" cols="30" rows="5" placeholder='Assunto a ser trato!'/>
            <input type="submit" value="Enviar" />
        </S.Form>
        </>
    );
}