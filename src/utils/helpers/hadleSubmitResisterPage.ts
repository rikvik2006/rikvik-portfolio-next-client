import React from "react";
import axios from "axios";
import { withRouter } from "next/router";
import { APIBaseUrl } from "../constants";

export const handleSubmitRegister = async (
    event: React.FormEvent<HTMLFormElement>
) => {
    event.preventDefault();

    const senderEmail = <HTMLInputElement>event.currentTarget[0];
    const senderPassowrd = <HTMLInputElement>event.currentTarget[1];

    const requestBody = {
        email: senderEmail.value,
        password: senderPassowrd.value,
    };

    try {
        const response = await axios.post(
            `${APIBaseUrl}/api/auth/register`,
            requestBody,
            {
                withCredentials: true,
            }
        );

        if (response.status === 201) {
            console.log("IN try if");
            window.location.replace("/auth/continueregister");
        }
    } catch (err: any) {
        alert(err.response.data.msg);
    }
};

export const handleSubmitRegisterContinue = async (
    event: React.FormEvent<HTMLFormElement>
) => {
    event.preventDefault();

    const senderName = <HTMLInputElement>event.currentTarget[0];
    const senderSurname = <HTMLInputElement>event.currentTarget[1];
    const senderUsername = <HTMLInputElement>event.currentTarget[2];

    const requestBody = {
        name: senderName.value,
        surname: senderSurname.value,
        username: senderUsername.value,
    };

    try {
        const response = await axios.post(
            `${APIBaseUrl}/api/auth/continueregister`,
            requestBody,
            {
                withCredentials: true,
            }
        );

        if (response) {
            window.location.replace(`${window.origin}/auth/login`);
        }
    } catch (err) {
        console.log(err);

        const ErrorBox: HTMLElement | null =
            document.getElementById("ErrorBox");
        ErrorBox!.style.visibility = "visible";
        ErrorBox!.style.opacity = "1";
        setTimeout(() => {
            ErrorBox!.style.visibility = "hidden";
            ErrorBox!.style.opacity = "0";
        }, 3000);
    }
};
