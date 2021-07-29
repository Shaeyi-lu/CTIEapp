const forumPost = document.querySelector('#forum');

//create a post
forumPost.addEventListener('submit', (e) => {
  e.preventDefault();

  if (forumPost.blogPost.value == null) {
    alert("Post can't be empty");
  }
  var user = firebase.auth().currentUser;

  if (user != null) {
    db.collection('taxes').add({
      blog: forumPost.blogPost.value,
      username: user.displayName
    })

    .then(() => {

        window.location.href = 'Taxes_forum.html';
    });

   
  } else {
    alert("Please sign in");
  }
});

// display each post
const posts = document.querySelector('#forum-posts');

function renderPost(doc) {
  let li = document.createElement('li');
  let username = document.createElement('span');
  let text = document.createElement('span');

  username.textContent = doc.data().username;
  text.textContent = doc.data().blog;

  li.appendChild(username);
  li.appendChild(text);

  posts.appendChild(li);
}

// display posts
db.collection('taxes').get().then(snapshot => {
  snapshot.forEach(doc => {
    renderPost(doc);
  })
});
