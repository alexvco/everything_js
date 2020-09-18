// --------------------------------------- //
// Async Await Fetch
// --------------------------------------- //

async function getThePosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error(`Something went wrong, got_status: ${res.status}, got_status_text: ${res.statusText}`);
    const data = await res.json(); // this .json() method is unique to fetch api
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

async function addThePost(post) {
  const settings = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(post)
  };

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', settings);
    if (!res.ok) throw new Error(`Something went wrong, got_status: ${res.status}, got_status_text: ${res.statusText}`);
    const data = await res.json();
    console.log(data); // or return data
  } catch (e) {
    console.log(e);
  }
}










// --------------------------------------- //
// Promises (.then)
// --------------------------------------- //

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    if (res.status == 200) {
      return res.json();
    } else {
      throw new Error(`Something went wrong, got_status: ${res.status}, got_status_text: ${res.statusText}`);
    }
  })
  .then((data) => {
    let div = document.createElement('div');
    let posts = '<h2>Posts</h2>'
    data.forEach((post) => {
      posts += `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `
    });
    div.innerHTML = posts;
    document.querySelector('#fetch_and_promises').append(div);
  })
  .catch((err) => {
    // without throwing the new Error above, this catch would log network errors only
    console.log(`${err.name}: ${err.message}`);
    // Error: Something went wrong, got_status: 404, got_status_text: Requested resource could not be found
  });
}

function addPost(e) {
  // e.target // is the form object
  // const formData = new FormData(e.target);
  // console.log(formData.get('title'));
  // console.log(formData.get('body'));

  // const form = document.querySelector('#myform');
  // const data = new URLSearchParams(new FormData(form).entries()); // submitting data nor JSON.stringify(data) did not work

  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: title, body: body})
  })
  .then((res) => {
    if (res.status == 201) {
      return res.json();
    } else {
      throw new Error(`Something went wrong, got_status: ${res.status}, got_status_text: ${res.statusText}`);
    }
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(`${err.name}: ${err.message}`);
  });
}










// --------------------------------------- //
// Callbacks
// --------------------------------------- //



function retrievePosts(callback) {

}

function createPost(post, callback) {

}

// createPost({title, 'mytitle', body: 'mybody'}, retrievePosts)

