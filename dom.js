window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  getPosts();
});

document.querySelector('#myform').addEventListener('submit', (e) => {
  e.preventDefault();
  addPost(e);
});

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
    document.querySelector('#dom').append(div);
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






// removeEventListener('click', myFunction);

// querySelector
// querySelectorAll // make sure to have one with class as well as data-attribute

// create element - createElement
// // remove delete element - deleteElement
// var myobj = document.getElementById("demo");
// myobj.remove();

// get attribute
// set attribute // src, disabled, data-rating, input value, selectoption value
// remove attribute

// get klass
// add klass
// toggle klass
// remove klass
// set style/css


// set_text // innerText/textContent
// get_text

// set_html //innerHTML vs innerText
// get_html

// This also works with vanilla JS now
// prepend
// append
// before
// after

// attributes
// hasattribute
// getAttribute()
// setattribute
// next sibling
// remove
// replaceChild

// e.target vs this



// // ajax 
// // fetch
// // promise
// // async await



// var parent = document.createElement("div");
// var child = document.createElement("p");
// parent.append(child);

// console.log(parent.outerHTML);
//   // <div><p></p></div>

// var span = document.createElement("span");
// child.replaceWith(span);

// console.log(parent.outerHTML);
//   // <div><span></span></div>








// h2 = document.createElement('h2');
//   <h2>​</h2>​

// h2.innerText = "dmbo";
//   "dmbo"

// h2.classList.add("mystyle");
//   undefined

// h2
//   <h2 class=​"mystyle">​dmbo​</h2>​

// h2.classList.add("mynewstyle");
//   undefined

// h2
//   <h2 class=​"mystyle mynewstyle">​dmbo​</h2>​

// h2.classList.remove("mystyle");
//   undefined

// h2
//   <h2 class=​"mynewstyle">​dmbo​</h2>​

// h2.classList.remove("mystyless");
//   undefined

// h2
//   <h2 class=​"mynewstyle">​dmbo​</h2>​

// h2.classList
//   DOMTokenList ["mynewstyle", value: "mynewstyle"]

// h2.classList.add("classs");
//   undefined

// h2.classList
//   DOMTokenList(2) ["mynewstyle", "classs", value: "mynewstyle classs"]

// h2.classList.forEach((kl) => console.log(kl));
//   VM4883:1 mynewstyle
//   VM4883:1 classs
//   undefined

// h2.classList.forEach((kl) => console.log(`${kl}: ${typeof kl}`));
//   VM4936:1 mynewstyle: string
//   VM4936:1 classs: string
//   undefined

// h2
//   <h2 class=​"mynewstyle classs">​dmbo​</h2>​

// typeof h2
//   "object"

// h2.id
  // ''

// h2.id = 'myid';
//   "myid"

// h2
  // <h2 class=​"mynewstyle classs" id=​"myid">​dmbo​</h2>​

// h2.id
  // "myid"

// h2.style.backgroundColor = "red";
  // "red"

// h2
  // <h2 class=​"mynewstyle classs" id=​"myid" style=​"background-color:​ red;​">​dmbo​</h2>​

// h2.style.fontSize = "16px";
  // "16px"

// h2
  // <h2 class=​"mynewstyle classs" id=​"myid" style=​"background-color:​ red;​ font-size:​ 16px;​">​dmbo​</h2>​

// h2.setAttribute('data-foo', 'Hello World!');
  // undefined

// h2
  // <h2 class=​"mynewstyle classs" id=​"myid" style=​"background-color:​ red;​ font-size:​ 16px;​" data-foo=​"Hello World!">​dmbo​</h2>​

// h2.getAttribute('data-foo')
  // "Hello World!"

// h2.removeAttribute('data-foo');
  // undefined

// h2
  // <h2 class=​"mynewstyle classs" id=​"myid" style=​"background-color:​ red;​ font-size:​ 16px;​">​dmbo​</h2>​

// h2.setAttribute('href', 'www.example.com');
  // undefined

// h2
  // <h2 class=​"mynewstyle classs" id=​"myid" style=​"background-color:​ red;​ font-size:​ 16px;​" href=​"www.example.com">​dmbo​</h2>​

// h2.removeAttribute('href');
  // undefined

// h2
  // <h2 class=​"mynewstyle classs" id=​"myid" style=​"background-color:​ red;​ font-size:​ 16px;​">​dmbo​</h2>​

// h2.classList.toggle("visible");  

// add or remove multiple classes
  // h2.classList.add("foo", "bar", "baz");
  // h2.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
  // const cls = ["foo", "bar"];
  // h2.classList.add(...cls); 
  // h2.classList.remove(...cls);

// replace class "foo" with class "bar"
  // h2.classList.replace("foo", "bar");
















// <p id="para">hi <b>Your_Name</b></p>
// el = document.querySelector('#para');

// el.outerText
  // "hi Your_Name"

// el.innerText
  // "hi Your_Name"

// el.innerHTML
  // "hi <b>Your_Name</b>"

// el.outerHTML
  // "<p id="para">hi <b>Your_Name</b></p>"

// typeof el.innerHTML    
  // "string"

// typeof el.innerText
  // "string"











// const listings = document.querySelectorAll('.row.listing-marker'); // give a NodeList
// listings.length
  // 10

// listings
//   NodeList(10) [div.row.listing-marker, div.row.listing-marker, div.row.listing-marker, div.row.listing-marker, div.row.listing-marker, div.row.listing-marker, div.row.listing-marker, div.row.listing-marker, div.row.listing-marker, div.row.listing-marker]

// listings[0]
//   <div class="row listing-marker">...</div>

// typeof listings[0]
//   "object"

// listings[0].classList
//   DOMTokenList(2) ["row", "listing-marker", value: "row listing-marker"]

// listings.forEach((listing) => listing.classList.add('list-ing'));
  // # it added the class ('list-ing') to all the elements



