const content = document.querySelector(".content");

fetch("http://localhost:8000/results")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((fighter) => {
      const name = `<p>` + fighter + `</p>`;
      content.insertAdjacentHTML("beforeend", name);
    });
  })
  .catch((error) => console.log(error));
