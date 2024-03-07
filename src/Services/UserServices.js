import axios from 'axios';

export const loginUser = async (credentials) => {

        const response = await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login", credentials);
        console.log(response.data);
        const data = response.data;
        window.localStorage.setItem("token", data.id);
        return response;
};


export const signupUser = async (userData) => {

        const response = await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", userData);
        console.log(response.data);
        return response;
};