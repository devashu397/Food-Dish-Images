function foodImage() {
  const url = "https://foodish-api.herokuapp.com/api/";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const img = document.getElementById("img");
      img.src = data.image;
      img.width = 375;
    })
    .catch((err) => {
      alert("Image not available at the moment");
    });
}
