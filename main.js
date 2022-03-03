function fetchUsersData() {
    let fetchUsers = fetch("https://jsonplaceholder.typicode.com/users");

    let userData = fetchUsers
                        .then((response) => response.json())
                        .then((users) => {
                            const randomNumber = Math.floor(Math.random() * 10);

                            console.log(randomNumber);

                            const displayName = document.querySelector(".display-name");
                            const displayUsername = document.querySelector(".display-username");
                            const displayEmail = document.querySelector(".display-email");

                            displayName.textContent = users[randomNumber].name;
                            displayUsername.textContent = users[randomNumber].username;
                            displayEmail.textContent = users[randomNumber].email;
                        });

    console.log(userData);
}

const buttonGenerate = document.querySelector(".btn-generate");

buttonGenerate.addEventListener("click", () => {
    fetchUsersData();
});