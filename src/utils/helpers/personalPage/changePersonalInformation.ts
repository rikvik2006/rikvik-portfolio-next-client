import axios from "axios";
import toast from "react-hot-toast";
import { APIBaseUrl } from "../../constants";

type RequestBody = {
    name: string;
    surname: string;
    username: string;
}

export const changePersonalInformation = async (event: React.FormEvent<HTMLFormElement>) => {
    await event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const name: string = formData.get("name") as string;
    const surname: string = formData.get("surname") as string;
    const username: string = formData.get("username") as string;

    const requestBody: RequestBody = {
        name,
        surname,
        username
    }

    console.log("❤️", requestBody);

    const response = axios.put(`${APIBaseUrl}/api/user/`, requestBody, {
        withCredentials: true,
    });

    toast.promise(response, {
        success: "Saved!",
        error: "An error occured",
        loading: "Loading"
    })
}