
// let bodyTag = document.querySelector("body");

// function clickAbout() {
    
// }

// function clickBack() {

// }

// let addButton = document.querySelector(".btn-group1");

// addButton.addEventListener("click", function() {
//     // alert("BANGKEEE, GW DI KLIKKKKK");
//     let group1 = document.querySelector("#group1");

    
//     let firstDiv = document.createElement(`DIV`);
//     firstDiv.className = "post";
    
//     let secondDiv = document.createElement(`DIV`);
//     secondDiv.className = "postOption";
//     secondDiv.innerHTML = `<p class="deadline">26 Feb 2021</p>
//     <button><i class="fas fa-check"></i></button>
//     <button><i class="fas fa-exchange-alt"></i></button>
//     <button><i class="fas fa-edit"> </i></button>
//     <button><i class="fas fa-trash"> </i></button>
//     </div>  
//     <hr>`;
    
//     let contentDiv = document.createElement("DIV");
//     contentDiv.className = "content";
//     contentDiv.innerHTML = `this is a post Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rem dolores distinctio, placeat inventore ipsum delectus labore voluptas aperiam similique in error fuga dicta ipsam. Aliquid dicta vero quis pariatur.`
//     firstDiv.append(secondDiv); 
//     firstDiv.append(contentDiv);
//     group1.append(firstDiv);

// });

/*

<div class="post">     
<div class ="postOption">
<p class="deadline">26 Feb 2021</p>
<button><i class="fas fa-check"></i></button>
<button><i class="fas fa-exchange-alt"></i></button>
<button><i class="fas fa-edit"> </i></button>
<button><i class="fas fa-trash"> </i></button>
</div>  
<hr>

<div class = "content">
this is a post Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rem dolores distinctio, placeat inventore ipsum delectus labore voluptas aperiam similique in error fuga dicta ipsam. Aliquid dicta vero quis pariatur.
</div>

*/

const btn = document.getElementById('button-add-text');
const group1 = document.getElementById('group1');

let postId = 0;
let post = [];

btn.addEventListener("click", function() {

  postId++;
  const post = document.createElement("DIV");
  post.setAttribute('id', `post-${postId}`);

  post.style.backgroundColor = 'lightblue';
  post.style.width = '225px';
  post.style.height = '250px';

  addPostElement(post);
  group1.appendChild(post);
  const submitBtn = document.getElementById(`btn-submit-${postId}`);
  submitBtn.addEventListener('click',submitClicked);

});

function insertPostToArray(postId){
console.log(postId);
  const content = document.getElementById(`content-${postId}`)
  console.log(content);
  const postContent = {'id' : postId, 'contentText': content.value}
  post.push(postContent);
}

function addPostElement(docObj) {
  const textContent = document.createElement("INPUT")
  textContent.setAttribute('id', `content-${postId}`);
  textContent.setAttribute('type', 'text');

  const submitButton = document.createElement("BUTTON")
  submitButton.setAttribute('id', `btn-submit-${postId}`);
  submitButton.innerText = "Ok";

  const contentDisplay = document.createElement("P")
  contentDisplay.setAttribute('id', `content-display-${postId}`);

  docObj.appendChild(textContent);
  docObj.appendChild(submitButton);
  docObj.appendChild(contentDisplay);
}

function submitClicked () {
  insertPostToArray(postId)
  const insertContent = document.getElementById(`content-display-${postId}`)
  insertContent.innerText = post[postId-1]['contentText'];
  const removeInputTextContent = document.getElementById(`content-${postId}`)
  removeInputTextContent.remove();
  const removeBtnSubmit = document.getElementById(`btn-submit-${postId}`)
}