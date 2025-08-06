url =
  "https://api.github.com/repos/rezaghz/chetorchatkonim/contributors?per_page=100&page=1";

async function updateContributors() {
  const contributors = document.getElementById("contributors");
  contributors.style.display = "flex";
  contributors.style.justifyContent = "center";
  contributors.style.alignItems = "center";

  const response = await fetch(url);
  const data = await response.json();
  data.forEach((user) => {
    const a = document.createElement("a");
    a.href = user.html_url;
    a.target = "_blank";
    a.className = "mx-2";

    const element = document.createElement("img");
    element.className = "rounded-full w-6";
    element.alt = user.login;
    element.src = user.avatar_url;

    a.appendChild(element);
    contributors.appendChild(a);
  });
}
