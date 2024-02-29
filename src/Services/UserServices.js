import axios from 'axios';

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login", credentials);
        console.log(response.data);
        const data = response.data;
        window.localStorage.setItem("token", data.id);
        return response;
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }
};


const signupUser = async (userDetails) => {
    try {
        const response = await fetch('https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        });

        if (!response.ok) {
            const errorData = await response.json();

            
            if (errorData.error && errorData.error.statusCode === 422) {
                if (errorData.error.details && errorData.error.details.messages) {
                    if (errorData.error.details.messages.username && errorData.error.details.messages.username.length > 0) {
                        console.error(`Username error: ${errorData.error.details.messages.username[0]}`);
                    }
                    if (errorData.error.details.messages.email && errorData.error.details.messages.email.length > 0) {
                        console.error(`Email error: ${errorData.error.details.messages.email[0]}`);
                    }
                }
            } else {
                throw new Error(`Failed to sign up: ${response.status} - ${errorData.message}`);
            }
        }

        const responseData = await response.json();
        console.log('Details posted successfully:', responseData);
        console.log('Data sent to the server:', userDetails);

        return responseData;
    } catch (error) {
        throw new Error(`Error during signup: ${error.message}`);
    }
};

export {signupUser};