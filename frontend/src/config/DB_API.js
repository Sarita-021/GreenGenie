import axios from "axios";

export const createUser = async (userId, displayName, email, photoUrl) => {
  const reqData = {
    userId: userId,
    name: displayName,
    username: email.split("@")[0],
    email: email,
    photoUrl: photoUrl,
  };

  const response = await axios({
    url: `${process.env.REACT_APP_SERVER_URI}/user/new`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  });
  console.log(response);
  return true;
};
