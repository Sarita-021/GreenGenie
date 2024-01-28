import axios from "axios";

export const createUser = async (
  userId,
  displayName,
  email,
  photoUrl,
  address
) => {
  const reqData = {
    userId: userId,
    fullname: displayName,
    username: email?.split("@")[0],
    email: email,
    profilePicture: photoUrl,
    phone: address?.phone,
    address: address,
  };
  delete reqData.address.phone;
  console.log(reqData);

  // const response = await axios({
  //   url: `${process.env.REACT_APP_SERVER_URI}/user/new`,
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(reqData),
  // });

  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/user/new`,
    reqData
  );
  console.log(response);
  setCookies("accessToken", response.data.data)
  return true;
};


export const setCookies = (key, data) => {
  // Set the user's access token cookie
  document.cookie = `accessToken=${data?.firebaseUserId}; path=/; max-age=${60 * 60 * 24 * 30}`;
  // Set the user's details in local storage
  localStorage.setItem("user", JSON.stringify(data));
}