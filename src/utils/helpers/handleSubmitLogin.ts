import axios from "axios";
import React from "react";
import { cookieJar } from "./cookie-jar";

export const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const senderEmail = <HTMLInputElement>event.currentTarget[0]
    const senderPassowrd = <HTMLInputElement>event.currentTarget[1]

    // console.log(senderEmail.value)
    // console.log(senderPassowrd.value);


    const requestBody = {
        email: senderEmail.value,
        password: senderPassowrd.value,
    }


    try {
        const response = await axios.post("http://localhost:3001/api/auth/login", requestBody, {
            withCredentials: true,
        });

        if (response.status === 200) {
            window.location.replace("../auth/continuelogin")
        }
    } catch (err: any) {
        console.log(err);

        const ErrorBox: HTMLElement | null = document.getElementById("ErrorBox")
        ErrorBox!.style.visibility = "visible"
        ErrorBox!.style.opacity = "1";
        setTimeout(() => {
            ErrorBox!.style.visibility = "hidden"
            ErrorBox!.style.opacity = "0";
        }, 3000)
    }

}


export const handleSubmitLoginContinue = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const senderName = <HTMLInputElement>event.currentTarget[0];
    const senderSurname = <HTMLInputElement>event.currentTarget[1];
    const senderUsername = <HTMLInputElement>event.currentTarget[2];


    const requestBody = {
        name: senderName,
        surname: senderSurname,
        username: senderUsername
    }

    try {
        const response = await axios.post("http://localhost:3001/auth/countiuelogin", requestBody, {
            withCredentials: true,
        })

        if (response) {
            alert("Ok funziona")
        }
    } catch (err) {
        console.log(err);

        const ErrorBox: HTMLElement | null = document.getElementById("ErrorBox")
        ErrorBox!.style.visibility = "visible"
        ErrorBox!.style.opacity = "1";
        setTimeout(() => {
            ErrorBox!.style.visibility = "hidden"
            ErrorBox!.style.opacity = "0";
        }, 3000)
    }

}