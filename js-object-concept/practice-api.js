const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

const displayPhotos = photos => {
    // console.log(photos);
    const imageContainer = document.getElementById('image');

    photos.forEach(photo => {
        // console.log(photo);
        let div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('m-2');
        div.innerHTML = `<img src="${photo.url}" style="width: 200px;">
        <h5 class="card-title">${photo.title}</h5>`;
        imageContainer.appendChild(div);

        div.addEventListener('click', function () {
            let imgDetail = document.getElementById('image-details');

            fetch(`https://jsonplaceholder.typicode.com/photos/${photo.id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const details = document.createElement('div');
                    imgDetail.innerHTML = '';
                    details.innerHTML = ` <h1>Album Id: ${data.albumId}</h1>
                    <h2>Id: ${data.id}</h2>
                    <p>Title: ${data.title}</p>
                    <img src="${data.url}" alt="">
                    <img src="${data.thumbnailUrl}" alt="">`;
                    imgDetail.appendChild(details);
                })

        })
    })

}
loadPhotos();