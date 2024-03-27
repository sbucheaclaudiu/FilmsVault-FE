export const baseURL = "http://localhost:8080/moviesVault";

export const encodeSpaces = (inputString) => {
    console.log(inputString.replace(/ /g, '%20'));
    return inputString.replace(/ /g, '%20');
}
  
  