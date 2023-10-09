const form = document.createElement("form");
const input = document.createElement("input");
const resultWrapper = document.createElement("section");
const url = new URL("https://api.github.com/search/repositories");
const optionsInfo = [];
const resultsDeck = [];

function debounce(callee, timeoutMs) {
  return function perform(...args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}

async function searchRepos() {
  url.searchParams.set("q", input.value);
  let repos = await fetch(url);
  let reposObj = await repos.json();
  for (let i = 0; i < 5; i++) {
    optionsInfo.push(reposObj.items[i]);
    const option = document.createElement("div");
    option.style.cssText = `
    width: 70vw;
    margin:0 auto;
    background: #fff;
    border: solid 2px black;
    `;
    option.textContent = reposObj.items[i].name;

    form.appendChild(option);
  }
}

input.addEventListener(
  "input",
  debounce(() => {
    if (document.querySelectorAll("Form > div")) {
      let divs = document.querySelectorAll("Form > div");
      for (let div of divs) {
        div.remove();
      }
    }
    optionsInfo.length = 0;
    searchRepos();
  }, 1000)
);

form.addEventListener("click", (event) => {
  switch (event.target) {
    case document.querySelector("div:nth-child(2)"):
      let result1 = document.createElement("div");
      let button1 = document.createElement("button");
      button1.style.cssText = buttonCSS;
      result1.style.cssText = divCSS;
      result1.textContent = `Name: ${optionsInfo[0].name}
                            Owner: ${optionsInfo[0].owner.login}
                            Stars: ${optionsInfo[0].stargazers_count}`;
      result1.append(button1);
      resultsDeck.push(result1);
      break;
    case document.querySelector("div:nth-child(3)"):
      let result2 = document.createElement("div");
      let button2 = document.createElement("button");
      button2.style.cssText = buttonCSS;
      result2.style.cssText = divCSS;
      result2.textContent = `Name: ${optionsInfo[1].name}
                            Owner: ${optionsInfo[1].owner.login}
                            Stars: ${optionsInfo[1].stargazers_count}`;
      result2.append(button2);
      resultsDeck.push(result2);
      break;
    case document.querySelector("div:nth-child(4)"):
      let result3 = document.createElement("div");
      let button3 = document.createElement("button");
      button3.style.cssText = buttonCSS;
      result3.style.cssText = divCSS;
      result3.textContent = `Name: ${optionsInfo[2].name}
                            Owner: ${optionsInfo[2].owner.login}
                            Stars: ${optionsInfo[2].stargazers_count}`;
      result3.append(button3);
      resultsDeck.push(result3);
      break;
    case document.querySelector("div:nth-child(5)"):
      let result4 = document.createElement("div");
      let button4 = document.createElement("button");
      button4.style.cssText = buttonCSS;
      result4.style.cssText = divCSS;
      result4.textContent = `Name: ${optionsInfo[3].name}
                            Owner: ${optionsInfo[3].owner.login}
                            Stars: ${optionsInfo[3].stargazers_count}`;
      result4.append(button4);
      resultsDeck.push(result4);
      break;
    case document.querySelector("div:nth-child(6)"):
      let result5 = document.createElement("div");
      let button5 = document.createElement("button");
      button5.style.cssText = buttonCSS;
      result5.style.cssText = divCSS;
      result5.textContent = `Name: ${optionsInfo[4].name}
                            Owner: ${optionsInfo[4].owner.login}
                            Stars: ${optionsInfo[4].stargazers_count}`;
      result5.append(button5);
      resultsDeck.push(result5);
      break;
  }
  resultsDeck.forEach((el) => resultWrapper.append(el));
  input.value = "";
  if (document.querySelectorAll("Form > div")) {
    let divs = document.querySelectorAll("Form > div");
    for (let div of divs) {
      div.remove();
    }
  }
});

resultWrapper.addEventListener("click", (event) => {
  let list = document.querySelectorAll("section > div");
  for (let i = 0; i < list.length; i++) {
    if (list[i] === event.target.closest("div")) {
      resultsDeck.splice(i, 1);
    }
  }
  if (event.target.matches("button")) {
    event.target.closest("div").remove();
  }
});

document.body.style.backgroundColor = "#C4C4C4";
input.setAttribute("type", "text");
input.style.cssText = `
    display: block;
    margin: 50px auto;
    width: 70vw;
    font-size: 48px;
`;

form.style.cssText = `
    font-family: Roboto; 
    font-size: 48px; 
    font-style: normal; 
    font-weight: 400; 
    line-height: normal; 
    margin: 50px auto `;

resultWrapper.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
`;

const buttonCSS = `
    display: block;
    border: none;
    background: url(cross-svgrepo-com.svg) center,
                #E27BEB;
    height: 64px;
    width: 64px;
    margin-right: 10px;
`;

const divCSS = `
display: flex;
justify-content: space-between;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
border: 1px solid #000;
background: #E27BEB;
height: 20vh;
width: 70vw;
margin: 0 auto;
`;

document.body.append(form);
form.appendChild(input);
document.body.append(resultWrapper);
