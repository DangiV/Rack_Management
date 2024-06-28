import axios from 'axios'

let BASE_URL = 'http://192.168.0.202:8557';

const MakeRequest = async (req, url, body) => {

    var config = {
        method: req,
        url: BASE_URL + url,
        data: body,
        headers: {
            // Authorization: `Bearer ${userToken}`,
            'Content-Type': 'multipart/form-data',
        }
    };


    try {
        const response = await axios(config);
        // console.log("response at make api try for testing purpose", response)
        // console.log("response at make api try", response.data.error.message)
        // if (response.data.error && response.data.error.message === "Token has expired") {
        //     sessionStorage.removeItem("token");
        //     sessionStorage.removeItem("User_Role");
        //     window.location.href = '/'
        //     return;
        // } else {
        //     return response.data;
        // }

        return response.data;
    } catch (error) {
        // console.log("error at catch of make api", error.response);
        throw error.response;
    }


    // try {
    //     const response = await axios(config);
    //     console.log("response at make api", response)
    //     return response.data;
    // } catch (error) {
    //     if (error.response) {
    //         throw error.response.data;
    //     } else if (error.request) {
    //         console.log(error.request);
    //         throw 'No response received from server';
    //     } else {
    //         console.log('Error', error.message);
    //         throw 'Error setting up request';
    //     }
    // }
}

export default MakeRequest;