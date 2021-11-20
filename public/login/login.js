
const login = async () => {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const res = await fetch("/login", {
        body: JSON.stringify({
            username,password
        }),
        method: "post",
        
    })
    console.log(res)
}