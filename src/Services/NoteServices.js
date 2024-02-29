import axios from "axios";
const baseUrl = "https://fundoonotes.incubation.bridgelabz.com/api/notes/"

const configForNotes = () => {
    const accessToken = localStorage.getItem("token")
    const header = {
        headers: {
            "Content-Type": "application/json",
            Authorization: accessToken
        }
    }
    return header
}
export const getNotes = async () => {
    try {
        const response = await axios.get(`${baseUrl}getNotesList`, configForNotes());
        console.log(response.data.data.data);
        return (response.data.data.data)
        // window.localStorage.setItem(, value);
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }

};

export const addNotes = async (noteObj) => {
    try {
        const response = await axios.post(`${baseUrl}addNotes`, noteObj, configForNotes());
        console.log(response);
        return response
    }catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }

}