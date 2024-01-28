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
  return true;
};
