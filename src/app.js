const content = document.querySelector(".content");

let RankingDivision = [
  "Men's Pound-FOR-POUND",
  "FLYWEIGHT",
  "BANTAMWEIGHT",
  "FEATHERWEIGHT",
  "LIGHTWEIGHT",
  "WELTERWEIGHT",
  "MIDDLEWEIGHT",
  "LIGHT HEAVYWEIGHT",
  "HEAVYWEIGHT",
  "WOMENS POUND-FOR-POUND",
  "WOMENS STRAWWEIGHT",
  "WOMENS FLYWEIGHT",
  "WOMENS BANTAMWEIGHT",
  "WOMENS FEATHERWEIGHT",
];

fetch("http://localhost:8000/results")
  .then((response) => response.json())
  .then((data) => {
    const divisionTitle0 = `<p class='ranking'>` + RankingDivision[0] + `</p>`;
    const divisionTitle1 = `<p class='ranking'>` + RankingDivision[1] + `</p>`;
    const divisionTitle2 = `<p class='ranking'>` + RankingDivision[2] + `</p>`;
    const divisionTitle3 = `<p class='ranking'>` + RankingDivision[3] + `</p>`;
    const divisionTitle4 = `<p class='ranking'>` + RankingDivision[4] + `</p>`;
    const divisionTitle5 = `<p class='ranking'>` + RankingDivision[5] + `</p>`;
    const divisionTitle6 = `<p class='ranking'>` + RankingDivision[6] + `</p>`;
    const divisionTitle7 = `<p class='ranking'>` + RankingDivision[7] + `</p>`;
    const divisionTitle8 = `<p class='ranking'>` + RankingDivision[8] + `</p>`;
    const divisionTitle9 = `<p class='ranking'>` + RankingDivision[9] + `</p>`;
    const divisionTitle10 =
      `<p class='ranking'>` + RankingDivision[10] + `</p>`;
    const divisionTitle11 =
      `<p class='ranking'>` + RankingDivision[11] + `</p>`;
    const divisionTitle12 =
      `<p class='ranking'>` + RankingDivision[12] + `</p>`;
    const divisionTitle13 =
      `<p class='ranking'>` + RankingDivision[13] + `</p>`;

    `<p class='ranking'>` + RankingDivision[1] + `</p>`;
    content.insertAdjacentHTML("beforeend", divisionTitle0);
    for (var i = 0; i < data.length; i++) {
      const name = `<p>` + data[i] + `</p>`;
      content.insertAdjacentHTML("beforeend", name);

      if (i === 14) {
        content.insertAdjacentHTML("beforeend", divisionTitle1);
      }
      if (i === 30) {
        content.insertAdjacentHTML("beforeend", divisionTitle2);
      }
      if (i === 46) {
        content.insertAdjacentHTML("beforeend", divisionTitle3);
      }
      if (i === 62) {
        content.insertAdjacentHTML("beforeend", divisionTitle4);
      }
      if (i === 78) {
        content.insertAdjacentHTML("beforeend", divisionTitle5);
      }
      if (i === 94) {
        content.insertAdjacentHTML("beforeend", divisionTitle6);
      }
      if (i === 110) {
        content.insertAdjacentHTML("beforeend", divisionTitle7);
      }
      if (i === 126) {
        content.insertAdjacentHTML("beforeend", divisionTitle8);
      }
      if (i === 142) {
        content.insertAdjacentHTML("beforeend", divisionTitle9);
      }
      if (i === 157) {
        content.insertAdjacentHTML("beforeend", divisionTitle10);
      }
      if (i === 173) {
        content.insertAdjacentHTML("beforeend", divisionTitle11);
      }
      if (i === 189) {
        content.insertAdjacentHTML("beforeend", divisionTitle12);
      }
      if (i === 205) {
        content.insertAdjacentHTML("beforeend", divisionTitle13);
      }
    }
  })
  .catch((error) => console.log(error));
