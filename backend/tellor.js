let database = 
{
  group1:
  [
    {
      deadline:"02-03-2021",
      content:"This is a post",
      index:0
    },
    {
      deadline:"02-03-2021",
      content:"This is a post",
      index:1
    },
  ],
  group2:[],
  group3:
  [
    {
      deadline:"02-03-2021",
      content:"This is a post",
      index:2
    },
  ],
  group4:[]
}

let idIndex = 3;

function render(groupPost){
  let postGroup = document.getElementById(groupPost)
  let postsContainer = postGroup.getElementsByClassName("postsContainer")[0]
  postsContainer.innerHTML = ""
    // create div
  for(let n = 0; n<database[groupPost].length; n++){

    let post = document.createElement("div");
    post.classList.add("post")
    post.value = database[groupPost][n].index //simpan data index di tiap post


    let postOption = document.createElement("div")
    postOption.classList.add("postOption")
    let deadline = document.createElement("p")
    deadline.classList.add("deadline")
    deadline.innerHTML = database[groupPost][n].deadline
    let buttonDone = document.createElement("button")
    buttonDone.classList.add("check-card")
    buttonDone.innerHTML = '✓'
    buttonDone.addEventListener("click",postComplete)
    let buttonMove = document.createElement("button")
    buttonMove.classList.add("move-card")
    buttonMove.innerHTML = '→'
    buttonMove.addEventListener("click",movePost)
    let buttonEdit = document.createElement("button")
    buttonEdit.innerHTML = '...'
    buttonEdit.classList.add("edit-card")
    buttonEdit.addEventListener("click",editPost)
    let buttonDelete = document.createElement("button")
    buttonDelete.innerHTML = 'X'
    buttonDelete.classList.add("delete-card")
    buttonDelete.addEventListener("click",deletePost)
    postOption.appendChild(deadline)
    postOption.appendChild(buttonDone)

    if(groupPost!=="group4")
      postOption.appendChild(buttonMove)

    postOption.appendChild(buttonEdit)
    postOption.appendChild(buttonDelete)

    let line = document.createElement("hr")

    let content = document.createElement("div")
    content.classList.add("content")
    content.innerHTML = database[groupPost][n].content
    
    post.appendChild(postOption)
    post.appendChild(line)
    post.appendChild(content)

    postsContainer.appendChild(post)
  }
}

for(let postGroup in database)
  render(postGroup)

/*
        <div class="post">
          <div class="postOption">
            <p class="deadline">26 Feb 2021</p>
            <button><i class="fas fa-check"></i></button>
            <button><i class="fas fa-exchange-alt"></i></button>
            <button><i class="fas fa-edit"> </i></button>
            <button><i class="fas fa-trash"> </i></button>
          </div>
          <hr>

          <div class="content">
            this is a post Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rem dolores distinctio, placeat
            inventore ipsum delectus labore voluptas aperiam similique in error fuga dicta ipsam. Aliquid dicta vero
            quis pariatur.
          </div>
        </div>
*/

document.getElementById("postNewPostButton").addEventListener("click",addNewPost)
document.getElementById("cancelButton").addEventListener("click",closePrompt)

let addNewPostButton = document.getElementsByClassName("addNewPostButton")
// let plusIcons = document.getElementsByClassName("fas fa-plus");

for(let n = 0;n < addNewPostButton.length; n++){
  addNewPostButton[n].addEventListener("click",showPrompt)
}

let currentId = "";

//menutup prompt
function closePrompt(event){
  event.preventDefault()
  document.getElementById("modal").classList.add("hide");
  document.getElementById("promptAddPost").classList.add("hide")
}

//membuka prompt
function showPrompt(event){
  document.getElementById("postContent").value = ""
  document.getElementById("postDeadline").value =""

  document.getElementById("modal").classList.remove("hide");
  document.getElementById("promptAddPost").classList.remove("hide")

  currentId = event.target.parentElement.parentElement.id;
  console.log(currentId)
}

//menambahkan post baru
function addNewPost(event){
  event.preventDefault()
  
  let content = document.getElementById("postContent").value
  let deadline = document.getElementById("postDeadline").value
  let index = idIndex
  idIndex++

  database[currentId].push(
    {
      content,
      deadline,
      index
    }
  )

  closePrompt(event)
  render(currentId)
  // console.log(database)

}

function deletePost(event) {
  event.preventDefault()
  let index = event.target.parentElement.parentElement.value
  let groupPost = event.target.parentElement.parentElement.parentElement.parentElement.id
  
  for(let n = 0; n<database[groupPost].length; n++)
    if(database[groupPost][n].index === index)
      database[groupPost].splice(n,1)

  render(groupPost)
}

function postComplete(event) {
  let post = event.target.parentElement.parentElement

  if(event.target.innerHTML === "✓"){
    post.style.backgroundColor = "green"
  }

  event.target.remove()
   

}

function movePost(event){
  let index = event.target.parentElement.parentElement.value
  let groupPost = event.target.parentElement.parentElement.parentElement.parentElement.id
  
  let newGroup = Number(groupPost[5])+1
  newGroup = "group"+ newGroup

  for(let n = 0; n<database[groupPost].length; n++)
    if(database[groupPost][n].index === index)
      database[newGroup].push(database[groupPost][n])

  deletePost(event)
  render(newGroup)

}


function editPost(event){
  let index = event.target.parentElement.parentElement.value
  let groupPost = event.target.parentElement.parentElement.parentElement.parentElement.id
  
  let form = document.createElement("form");
  let input = document.createElement("input");
  input.setAttribute("type", "text");

  let submitButton = document.createElement("button");
  submitButton.setAttribute("onclick", `event.preventDefault();`);
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "SUBMIT";

  form.append(input);
  form.append(submitButton);
  event.target.parentElement.append(form);

  submitButton.addEventListener("click", function() {
    console.log('masoek')

    for(let n = 0; n<database[groupPost].length; n++)
      if(database[groupPost][n].index === index){
        database[groupPost][n].content = input.value
        let parentForm = form.parentElement;
        parentForm.removeChild(form);
      }

    render(groupPost)

  })

}

function changeTitle(){
  let title = document.querySelector("#titleProject")
  
  let newTitle = prompt("Insert Project's Name:","New Project")
  title.textContent = newTitle

}
