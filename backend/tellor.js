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
  newPostOption.innerHTML = `<div class="postOption">
            <p class="deadline">${deadline}</p>
            <button><i class="fas fa-check"></i></button>
            <button><i class="fas fa-exchange-alt"></i></button>
            <button><i class="fas fa-edit"> </i></button>
            <button><i class="fas fa-trash"> </i></button>
          </div><hr>`;
  
  let newContent = document.createElement("div");
  newContent.className = "content";
  newContent.innerHTML = `<div class="content">
            ${content}
          </div>`;

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