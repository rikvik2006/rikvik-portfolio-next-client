import axios from "axios";
import toast from "react-hot-toast";

type RequestBody = {
    name: string;
    surname: string;
    username: string;
}

export const changePersonalInformation = async (event: React.FormEvent<HTMLFormElement>) => {
    await event.preventDefault();

    console.log("🚀 ~ file: changePersonalInformation.ts:14 ~ changePersonalInformation ~ currentTarget:", event.currentTarget.elements)
    const formData = new FormData(event.currentTarget);

    console.log("❤️", formData);
    const name: string = formData.get("name") as string;
    const surname: string = formData.get("surname") as string;
    const username: string = formData.get("username") as string;

    const requestBody: RequestBody = {
        name,
        surname,
        username
    }

    const requestBodyJson = JSON.stringify(requestBody);

    const response = axios.put("localhost:3001/api/user/", requestBodyJson, {
        withCredentials: true,
    });

    toast.promise(response, {
        success: "Saved!",
        error: "An error occured",
        loading: "Loading"
    })
}