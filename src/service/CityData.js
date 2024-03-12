import axios from "axios";

export const GetCityData = async () => {
    try {
        const response =  await axios("http://localhost:4000/api/cities")
        return response.data.data
    } catch (error) {
        return[]
    }
}
