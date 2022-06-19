const API =
  "http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json";

const excute = () => {
  getChampions(renderFrame);
};

excute();

function getChampions(callback) {
  fetch(API)
    .then((Response) => {
      return Response.json();
    })
    .then(callback);
}

function renderFrame(datas) {
  const data = datas.data;
  const listFrame = document.querySelector("#list");
  const champions = Object.values(data);
  const html = champions.map((champion) => {
    return `
      <li id="champions-${champion.key}" class="liss" name="${champion.name}">
        <img src="https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${champion.image.full.toLowerCase()}" alt=""/>
        <h4>${champion.name}</h4>
      </li>
    `;
  });
  listFrame.innerHTML = html.join("");
  const fullLiTagss = document.querySelectorAll(".liss");
  fullLiTagss.forEach((fullLiTag) => {
    fullLiTag.addEventListener("click", () => {
      // console.log(data[fullLiTag.getAttribute("name")].tags);
      let stats = data[fullLiTag.getAttribute("name")].stats;
      for (let m in stats) {
        console.log(m + ": " + stats[m]);
      }
    });
  });
}
