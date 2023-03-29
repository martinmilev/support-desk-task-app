export const fetchPeople = () =>
  fetch("src/assets/api.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      return myJson
    });
