// This will fetch the photo data by ID (1-5000)
async function getPhoto(id) {
  return fetch("https://jsonplaceholder.typicode.com/photos/${id}").then(
    async (response) => await response.json()
  );
}

// This gets our initial page of photos
async function getPhotoData() {
  const photoData = [];

  for (let i = 1; i <= 25; i++) {
    const photo = await getPhoto(i);
    photoData.push(photo);
  }

  return photoData;
}

// This will create a photo display element
function createPhotoElement(photoInfo) {
  const article = document.createElement("article");
  const image = document.createElement("img");
  const title = document.createElement("h2");
  image.src = photoInfo.thumbnailUrl;
  title.innerHTML = `#${photoInfo.id} ${photoInfo.title}`;

  article.appendChild(image);
  article.appendChild(title);

  return article;
}

async function main() {
  const photoData = getPhotoData();
  const section = document.querySelector("section");

  photoData.forEach((photoInfo) => {
    const photoElement = createPhotoElement(photoInfo);
    section.prepend(photoElement);
  });
}
