export const userLogin = (user) => {
  console.log("user: ", user);
  return {
    type: "LOGIN",
    user
  }
}