const fetchData = (url) => (callback) => {
  return fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((res) => {
      return callback(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const renderContainer = (res) => {
  let getHtml = document.getElementById('container');

  res.forEach((user) => {
    let [userId, id, title, completed] = Object.values(user);

    getHtml.innerHTML += `<div>
    <div>userId:${userId}</div>
    <div>id:${id}</div>
    <div>title:${title}</div>
    <div>completed:${completed}</div>
    </div>`;
  });
};

const renderCarousel = (res) => {
  let [userId, id, title, completed] = res;
  let getHtml = document.getElementById('carousel');

  getHtml.innerHTML = `<div>
  <div>userId:${userId}</div>
  <div>id:${id}</div>
  <div>title:${title}</div>
  <div>completed:${completed}</div>
  </div>`;
};

let mountOnContainer = fetchData('https://jsonplaceholder.typicode.com/todos');

mountOnContainer(renderContainer);
