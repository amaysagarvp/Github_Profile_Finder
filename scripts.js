const input = document.getElementById("input");
const button = document.getElementById("searchBtn");
const profile = document.getElementById("profile");

button.addEventListener("click", () => {
    const username = input.value.trim();

    searchProfile(username)
})
function searchProfile(username) {
    if (username == "") {
        return;
    }
    showLoading();
    fetchProfile(username)
}
function showLoading() {
profile.innerHTML=`<p>loading</p>`;
}
async function fetchProfile(username) {
    const url = `https://api.github.com/users/${username}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayProfile(data);
    } catch {
        showError("Network Error");
    }
    function showError(message) {
        profile.innerHTML = `<h2>${message}</h2>`
    }
}
function displayProfile(data) {
    profile.innerHTML = "";
    profile.innerHTML =`
    <h2>${data.login}
    <p>${data.name}
    <p>${data.followers}
    <p>${data.following}
    <p>${data.public_repos}
    <p>${data.avatar_url}
    `
}