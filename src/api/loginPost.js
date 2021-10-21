import axios from 'axios';

export const loginPost = async (loginValues) => {
    const { email, password } = loginValues;
    const baseURL = 'http://localhost:4000';

    try {
        const response = await axios({
            url: `${baseURL}/auth/login`,
            method: 'POST',
            data: {
                email,
                password,
            }
        });

        const user = response.data;
        return user

    } catch (error) {
        console.log(error)
    }
}
