document.getElementById("postNewPostButton").addEventListener("click",addNewPost)
document.getElementById("cancelButton").addEventListener("click",closePrompt)

let addNewPostButton = document.getElementsByClassName("addNewPostButton")
let plusIcons = document.getElementsByClassName("fas fa-plus");

for(let n = 0;n < addNewPostButton.length; n++){
  addNewPostButton[n].value = n;
  plusIcons[n].value = n;
  addNewPostButton[n].addEventListener("click",showPrompt)
}

let currentId = 0;

function showPrompt(event){
  //resetvalue
  console.log("ELEMENT")
  console.log(event.target);
  document.getElementById("postContent").value = ""
  document.getElementById("postDeadline").value =""

  document.getElementById("modal").classList.remove("hide");
  document.getElementById("promptAddPost").classList.remove("hide")
  currentId = event.target.value;
  console.log(`currentID: ${currentId}`);
}

function deletePost() {
  console.log(event.target.parentElement.parentElement.parentElement);
  

  let parent = event.target.parentElement.parentElement.parentElement;

  let child = event.target.parentElement.parentElement

  parent.removeChild(child);
  
}

let postClicked = false;
function postComplete() {
  console.log(event.target);
  let checkButton = event.target;
  
  if(postClicked === false) {
     checkButton.style = "background-color: chartreuse";
    
  } else {
      checkButton.style = "background-color: none";
  }

  postClicked = !postClicked;
}


function editPost() {
  let editButton = event.target;
  
  let parent = editButton.parentElement;
  let container = parent.parentElement;

  
  let content = container.children[1];
  content.textContent = "";

  let form = document.createElement("form");
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  
  let submitButton = document.createElement("button");
  submitButton.setAttribute("onclick", `event.preventDefault();`);
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "SUBMIT";

  submitButton.addEventListener("click", function() {
    content.textContent = input.value;
    let parentForm = form.parentElement;
    parentForm.removeChild(form);
  });
  // submitEdit(${content}, ${input});

  form.append(input);
  form.append(submitButton);
  parent.append(form);
  // console.log(form);
}

//menambahkan post baru
function addNewPost(event){
  event.preventDefault()
 
  
  let content = document.getElementById("postContent").value
  let deadline = document.getElementById("postDeadline").value

  closePrompt(event)

  // let categoryContainer = document.getElementById(currentId);
  // console.log(categoryContainer);
 
  let containerArray = document.querySelectorAll(".postsContainer");
  let postContainer = containerArray[currentId];
 
  // NEW POST CONTENT
  let newPost = document.createElement("div");
  newPost.className = "post";

  // POST OPTION
  let newPostOption = document.createElement("div");
  newPostOption.className = "postOption";
  newPostOption.innerHTML = `<p class="deadline">${deadline}</p>
            <button onclick=postComplete() class=check-card>O</button>
            <button><i class="fas fa-exchange-alt"></i></button>
            <button onclick=editPost() class=edit-card>EDIT</button>
            <button onclick=deletePost() class=delete-card>X</button>
          <hr>`;
  
  let newContent = document.createElement("div");
  newContent.className = "content";
  newContent.innerHTML = `${content}`;

  newPost.append(newPostOption);
  newPost.append(newContent);
  postContainer.append(newPost);
  
  console.log(postContainer);

  
  // console.log(
  //   {
  //     content,
  //     deadline
  //   }
  // )

}

//menutup prompt
function closePrompt(event){
  event.preventDefault()
  document.getElementById("modal").classList.add("hide");
  document.getElementById("promptAddPost").classList.add("hide")
}
































{/* <div class="postOption">
            <p class="deadline">${deadline}</p>
            <button><i class="fas fa-check"></i></button>
            <button><i class="fas fa-exchange-alt"></i></button>
            <button><i class="fas fa-edit"> </i></button>
            <button onclick=deletePost() class=delete-card><i class="delete-card fas fa-trash"> </i></button>
          </div><hr>` */}


          // `<div class="content">
          //   ${content}
          // </div>`;

// `<div class="postOption">
//             <p class="deadline">${deadline}</p>
//             <button onclick=postComplete() class=check-card>O</button>
//             <button><i class="fas fa-exchange-alt"></i></button>
//             <button onclick=editPost() class=edit-card>EDIT</button>
//             <button onclick=deletePost() class=delete-card>X</button>
//           </div><hr>`;













