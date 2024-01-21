export const createUser = async(userId, displayName, email, photoUrl) =>{
    const reqData = {
        userId: userId,
        name: displayName,
        username: email.split('@')[0],
        email: email,
        photoUrl: photoUrl,
    }
}