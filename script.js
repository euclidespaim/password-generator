function getPassword(){

    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%*()_+?><:{}[]";
    const passwordLength = 16;
    let password = "";

    for (let i=0; i<passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    document.getElementById("password").value = password;
}