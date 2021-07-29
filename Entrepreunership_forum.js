const forumPost = document.querySelector('#forum');

//create a post
forumPost.addEventListener('submit', (e) => {
  e.preventDefault();
  if (forumPost.blogPost.value == null) {
    alert("Post can't be empty");
  }
  var user = firebase.auth().currentUser;
  if (user != null) {
    db.collection('entrepreunership').add({
      blog: forumPost.blogPost.value,
      username: user.displayName,
      resList: []
    })
    .then(() => {
        window.location.href = 'Entrepreunership_forum.html';
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
  let responses = document.createElement('span');
  let responseText = document.createElement('textarea');
  let postRes = document.createElement('button');

  li.setAttribute('data-id', doc.id);

  username.textContent = doc.data().username;
  text.textContent = doc.data().blog;
  responseText.placeholder = "Respond to this post";
  postRes.textContent = "Respond";

  for (let i = 0; i < doc.data().resList.length; i++) {
    db.collection('entrepreunershipRes').doc(doc.data().resList[i]).get().then(docRes => {
      let liRes = document.createElement('li');
      let usernameRes = document.createElement('span');
      let textRes = document.createElement('span');

      usernameRes.textContent = docRes.data().username;
      textRes.textContent = docRes.data().blog;

      liRes.appendChild(usernameRes);
      liRes.appendChild(textRes);

      li.appendChild(liRes);

    });
  }

  li.appendChild(username);
  li.appendChild(text);
  li.appendChild(responses);
  li.appendChild(responseText);
  li.appendChild(postRes);

  posts.appendChild(li);

  // response posts
  postRes.addEventListener('click', (e) => {
    let id = e.target.parentElement.getAttribute('data-id');
    var user = firebase.auth().currentUser;
    e.preventDefault();
    if (responseText.value == null || responseText.value === "") {
      alert("Response can't be empty");
    } else {
    var user = firebase.auth().currentUser;
    if (user != null) {
      db.collection('entrepreunershipRes').add({
        blog: responseText.value,
        username: user.displayName
      })
      .then((docRef) => {
        var docid = docRef.id;
        var postsDoc = db.collection('entrepreunership').doc(id);
        postsDoc.update({
          resList: firebase.firestore.FieldValue.arrayUnion(docRef.id)
        })
      }).then(() => {
        window.location.href = 'Entrepreunership_forum.html';
      });
    } else {
      alert("Please sign in");
    }
  }
  });
}

// display posts
db.collection('entrepreunership').get().then(snapshot => {
  snapshot.forEach(doc => {
    renderPost(doc);
  })
});
