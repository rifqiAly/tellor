/*


yak di si ni ya
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
