import axios from "axios";

class HttpService {
    async getDataApI(url: string, token: string) {
        const res = await axios.get(`/api/${url}`, { headers: { Authorization: token } });
        return res;
    }

    async postDataApI(url: string, post: any, token: string) {
        const res = await axios.post(`/api/${url}`, post, { headers: { Authorization: token } });
        return res;
    }

    async putDataApI(url: string, post: any, token: string) {
        const res = await axios.put(`/api/${url}`, post, { headers: { Authorization: token } });
        return res;
    }

    async deleteDataApI(url: string, post: any, token: string) {
        const res = await axios.delete(`/api/${url}`, { headers: { Authorization: token } });
        return res;
    }
}

const httpService = new HttpService();

export default httpService;
