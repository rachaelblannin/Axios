axios.get("https://reqres.in/api/users")
.then(res => console.log(res))
.catch(err => console.error(err));

const reqBody = {
    first_name: "Morpheus",
    email: "leader@gmail.com"
}

axios.post("https://reqres.in/api/users", reqBody)
.then(res => console.log(res))
.catch(err => console.error(err));

