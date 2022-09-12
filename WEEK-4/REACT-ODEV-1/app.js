import axios from "axios";

const getUsers = (id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    resolve(data);
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(data);
    //reject("bir sorun daha oluştu!");
  });
};
(async () => {
  await getUsers(1)
    .then((data) => console.log("users basıldı", data))
    .catch((e) => console.log(e));
  await getPost(1)
    .then((data) => console.log("post basıldı", data))
    .catch((e) => console.log(e));
})();

export { getUsers, getPost };
