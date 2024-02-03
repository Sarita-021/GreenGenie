import axios from "axios";

export const createUser = async (
    userId,
    displayName,
    email,
    photoUrl,
    gender,
    address
) => {
    const reqData = {
        userId: userId,
        fullname: displayName,
        username: email?.split("@")[0],
        email: email,
        profilePicture: photoUrl,
        gender: gender,
        phone: address?.phone,
        address: address?.address,
    };
    delete reqData?.address?.phone;
    
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URI}/user/new`,
        reqData
    );
    setCookies("accessToken", response.data?.data)
    return true;
};


export const setCookies = (key, data) => {
    // Set the user's access token cookie
    document.cookie = `accessToken=${data?.firebaseUserId}; path=/; max-age=${60 * 60 * 24 * 30}`;
    // Set the user's details in local storage
    localStorage.setItem("user", JSON.stringify(data));
}