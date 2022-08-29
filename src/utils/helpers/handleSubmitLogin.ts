import axios from "axios";
import React from "react";
import { getCookie } from "../helpers/getCookies";
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

        // const response = await axios.post("http://localhost:3001/api/auth/login", requestBody);
        // const response = await cookieJar("http://localhost:3001/api/auth/login", requestBody);

        const response = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody),
            keepalive: true,
        })

        if (response.ok) {
            console.log("-------");
            console.log(response.headers)
            alert("Ok funziona");
        }
    } catch (err: any) {
        console.log(err);

        alert(err.response.data.msg);
    }

}