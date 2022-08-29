import React from "react";
import axios from "axios";
import { withRouter } from "next/router";

export const handleSubmitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const senderEmail = <HTMLInputElement>event.currentTarget[0]
    const senderPassowrd = <HTMLInputElement>event.currentTarget[1];

    const requestBody = {
        email: senderEmail.value,
        password: senderPassowrd.value,
    }


    try {
        const response = await axios.post("http://localhost:3001/api/auth/register", requestBody);

        if (response.status === 201) {
            console.log("IN try if");
            window.location.replace("../../");
        }
    } catch (err: any) {
        alert(err.response.data.msg);
    }

}