document.getElementById("postNewPostButton").addEventListener("click",addNewPost)
document.getElementById("cancelButton").addEventListener("click",closePrompt)
let addNewPostButton = document.getElementsByClassName("addNewPostButton")

for(let n = 0;n<addNewPostButton.length; n++){
  addNewPostButton[n].value = n;
  addNewPostButton[n].addEventListener("click",showPrompt)
}
let currentId = ""

function showPrompt(event){
  //resetvalue
  document.getElementById("postContent").value = ""
  document.getElementById("postDeadline").value =""

  document.getElementById("modal").classList.remove("hide");
  document.getElementById("promptAddPost").classList.remove("hide")
  currentId = event.target.parentElement.parentElement.id;

}

//menambahkan post baru
function addNewPost(event){
  event.preventDefault()
  console.log(currentId)
  
  let content = document.getElementById("postContent").value
  let deadline = document.getElementById("postDeadline").value

  closePrompt(event)
  return 
  console.log(
    {
      content,
      deadline
    }
  )

  //add ke array baru
  //re render
}

//menutup prompt
function closePrompt(event){
  event.preventDefault()
  document.getElementById("modal").classList.add("hide");
  document.getElementById("promptAddPost").classList.add("hide")
}