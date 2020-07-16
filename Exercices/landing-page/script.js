let getComment = () => {
  fetch('https://quotes-light-api.herokuapp.com/api/comments/', {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
      let data = response;
      data.forEach(element => {
        let newDivAuteur = document.createElement('div');
        let newDivComment = document.createElement('div');
        let newContentAuteur = document.createTextNode(element.auteur);
        let newContentComment = document.createTextNode(element.comment);
        let currentDiv = document.getElementById('balise');
        console.log(currentDiv);
        newDivAuteur.appendChild(newContentAuteur);
        newDivComment.appendChild(newContentComment);
        currentDiv.appendChild(newDivAuteur);
        currentDiv.appendChild(newDivComment);
      });
    });
};
getComment();
