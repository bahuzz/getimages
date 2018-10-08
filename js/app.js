function getPhotos() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET',`https://jsonplaceholder.typicode.com/photos`,true);

  xhr.onreadystatechange = function(){
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);

      let output = '';

      if (response) {
        response.forEach(function(photo){
          if(photo.albumId == 10) {
            output += `<div class="entry"><h6>${photo.title}</h6><img src="${photo.url}" alt="${photo.id}" /></div>`;
          }
        })
      } else {
        output += 'Ooooops! Something happens...';
      }

        document.getElementById('album').innerHTML = output;
    } 
    else {
      document.getElementById('album').innerHTML = 'Something wrong';
    }

  }

  xhr.send();
}

getPhotos();
