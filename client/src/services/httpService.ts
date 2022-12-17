import axios from "axios";

// axios.defaults.withCredentials = true;

const PublicInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true,
});

class HttpService {
    async getDataApI(url: string, token?: string) {
        const res = await PublicInstance.get(`/api/${url}`, { headers: { Authorization: token } });
        return res;
    }

    async postDataApI(url: string, post: any, token?: string) {
        const res = await PublicInstance.post(`/api/${url}`, post, {
            headers: { Authorization: token },
        });
        return res;
    }

    async putDataApI(url: string, post: any, token?: string) {
        const res = await PublicInstance.put(`/api/${url}`, post, {
            headers: { Authorization: token },
        });
        return res;
    }

    async deleteDataApI(url: string, token?: string) {
        const res = await PublicInstance.delete(`/api/${url}`, {
            headers: { Authorization: token },
        });
        return res;
    }
}

const httpService = new HttpService();

export default httpService;
