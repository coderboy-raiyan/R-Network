import httpService from "./httpService";

class HttpAuthServices {
    async login(payload: any) {
        const response = await httpService.postDataApI("auth/login", payload);
        return response;
    }
}

const httpAuthServices = new HttpAuthServices();

export default httpAuthServices;
