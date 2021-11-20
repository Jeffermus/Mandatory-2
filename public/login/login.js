
const login = async () => {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    console.log(password)
    console.log(username)
    const res = await fetch("/login", {
        body: JSON.stringify({
            username,password
        
        }),
        method: "post",
        
    })
    console.log(res)

}