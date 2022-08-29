import React from "react";
import axios from "axios";

export const handleSubmitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);

    const senderEmail = <HTMLInputElement>event.currentTarget[0]
    const senderPassowrd = <HTMLInputElement>event.currentTarget[1];

    const requestBody = {
        email: senderEmail.value,
        password: senderPassowrd.value,
    }

    const response = await axios.post("http://localhost:3001/api/auth/register", requestBody);

    await console.log(response);

    if (response.status === 201) {
        console.log("Ok funziona GGGGG")
        console.log(response.data)
    }

}