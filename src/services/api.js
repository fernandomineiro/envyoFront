import axios from "axios";

const api = axios.create({
	baseURL: 'https://api.envyo.com.br',
	withCredentials: true,
});

export const openApi = axios.create({
	baseURL: 'https://api.envyo.com.br'
});

export default api;
