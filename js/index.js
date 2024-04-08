const url = "https://api.github.com/search/users?q=octocat";

document.addEventListener("DOMContentLoaded", () => {
  //get the values from the input fields in html
  const form = document.getElementById("github-form");

  const userList = document.getElementById("user-list");

  const getList = document.querySelector(".list");

  const users = [];
  form.addEventListener("submit", getName);
  function getName(e) {
    e.preventDefault();
    //fetch json data from github api
    const login = document.getElementById("search").value;
    fetch(`https://api.github.com/search/users?q=/* ${login}`)
      .then((response) => response.json())
      .then((data) => displayUser(data.item))
      .catch((err) => {
        console.log("user name error", err);
       users.push(data);
      });
   
  }
  //getName();

  const submit = document.getElementById("submit");
  submit.addEventListener("click", displayUser);
  function displayUser(users) {
    // users.push(user)
    users.forEach((user) => {
      //getList.innerHTML = user.login;
      userList.innerHTML = "";
      const userLi = document.createElement("li");
      userLi.textContent = user.login;
      userList.appendChild(userLi);
      //userLi.classList.add("list");
    });
  }
  //displayUser(getName);

  function findPoint() {
    fetch("https://api.github.com/users/octocat/repos")
      .then((response) => response.json())
      .then((repos) => displayRepo(repos))
      .catch((err) => {
        console.log("repo error", err);
      });
  }
  //findPoint();

  function displayRepo(repos) {
    container.innerHTML = "";
    repos.forEach((repo) => {
      const repoLi = document.createElement("li");
      repoLi.textContent = repo.url;
      container.appendChild(repoLi);
    });
  }
});
