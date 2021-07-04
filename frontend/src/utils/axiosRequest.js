import axios from 'axios'

export const axiosRequest = async (url) => {
    try {
        const data = await axios(url);
        return [data, null]
    }
    catch(error) {
        return [null, error]
    }
}

