import axios from "axios";

type Data = {
    email: string;
    password: string;
}


const handleSubmit = async (event: any) => {
    event.preventDefault()

    console.log("In hanlde submit");

    const data = {
        email: event.target.email.value,
        password: event.target.password.value,
    }

    console.log(data);

    const JSONdata = JSON.stringify(data);
    const endPoint = "http://localhost:3001/api/auth/login"

    console.log(JSONdata);

    axios.post(endPoint, JSONdata)
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
}

export {
    handleSubmit,
}
