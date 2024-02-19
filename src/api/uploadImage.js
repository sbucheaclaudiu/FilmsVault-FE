import axios from "axios";

const url = `https://freeimage.host/api/1/upload`;
const authorizationHeader = `6d207e02198a847aa98d0a2a901485a5`;
const contentTypeHeader = 'text/plain';

export const uploadImage = async (image) => {
  try {
    console.log(image);

    const data = {
      image: image
    }

    const response = await axios.post(url, data,
        {
            headers: {
            'Authorization': authorizationHeader,
            }
        });
 
    console.log(response.data);
    return response.data;
  } catch (error) {
    //console.log(error);
    return [];
  }
}