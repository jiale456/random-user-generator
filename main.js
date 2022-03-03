function fetchUsersData() {
    let fetchRes = fetch("https://jsonplaceholder.typicode.com/users");

    fetchRes.then((response) => response.json())
                .then((users) => {
                    const randomNumber = Math.floor(Math.random() * 10);
                    const placeholderName = document.querySelector(".placeholder-name");
                    const placeholderUsername = document.querySelector(".placeholder-username");
                    const placeholderEmail = document.querySelector(".placeholder-email");

                    placeholderName.textContent = users[randomNumber].name;
                    placeholderUsername.textContent = users[randomNumber].username;
                    placeholderEmail.textContent = users[randomNumber].email;
                });
}


// Add eventListener to button
const buttonGenerate = document.querySelector(".btn-generate");

buttonGenerate.addEventListener("click", fetchUsersData);