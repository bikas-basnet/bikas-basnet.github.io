fetch('/data/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h2>${post.title}</h2><p>${post.date}</p><p>${post.content}</p>`;
      container.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error fetching posts:', error));