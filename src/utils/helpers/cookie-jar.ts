import { CookieJar } from "tough-cookie";
import { wrapper } from "axios-cookiejar-support";
import axios from "axios";

export const cookieJar = async (url: string, data: any) => {
    const jar = new CookieJar();
    const client = wrapper(axios.create({ jar }))

    return client.post(url, data);
}