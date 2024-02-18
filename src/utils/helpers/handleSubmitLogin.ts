import axios from "axios";
import React from "react";
import { cookieJar } from "./cookie-jar";
import { APIBaseUrl } from "../constants";

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
        const response = await axios.post(`${APIBaseUrl}/api/auth/login`, requestBody, {
            withCredentials: true,
        });

        if (response.status === 200) {
            window.location.replace("../personalpage")
        }
    } catch (err: any) {
        console.log(err);

        const ErrorBox: HTMLElement | null = document.getElementById("ErrorBox")
        ErrorBox!.style.visibility = "visible"
        ErrorBox!.style.opacity = "1";
        setTimeout(() => {
            ErrorBox!.style.opacity = "0";
            ErrorBox!.style.visibility = "hidden"
        }, 3000)
    }

}