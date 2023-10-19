import axios from 'axios';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
async function fetchUserDataFromServer(token) {
    try {
        const response = await axios.get(`${VITE_BASE_URL}/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            return response.data; // Assuming the server returns user data in the response body
        } else {
            throw new Error('Failed to fetch user data');
        }
    } catch (error) {
        // Handle errors, such as network issues or invalid tokens
        console.error('Error fetching user data:', error);
        throw error;
    }
}

export default fetchUserDataFromServer;
