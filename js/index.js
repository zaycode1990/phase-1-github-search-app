document.addEventListener("DOMContentLoaded", () => {
    const gitForm = document.querySelector('#github-form')
    gitForm.addEventListener('submit', (e) =>{
        e.preventDefault()
       gitUserSelect(e.target.querySelector('#search').value)
       
    })

    
})

 async function gitUserSelect(userName) {
 try {const response = await fetch(`https://api.github.com/search/users?q=${userName}`)
 const data = await response.json();
 console.log(data)
 
 data.items.forEach(renderData)
    
 }

catch(error){ console.error(error) }

}
    



function renderData(user){
	
const userList = document.getElementById('user-list')
const userListItem = document.createElement("li")
const userLogin = document.createElement('p')
const userPicPara = document.createElement('p')
const userLinkPara = document. createElement('p')
const userAvatar = document.createElement('img')
const userLink = document.createElement('a')
userLink.href = `${user.html_url}`
userLink.textContent = `${user.html_url}`
userLinkPara.appendChild(userLink)
userPicPara.appendChild(userAvatar)
userAvatar.src = `${user.avatar_url}`
userAvatar.alt = "mob at a hundred percent"
userAvatar.style.cssText = "height: 25%; display: block; margin-left: auto; margin-right: auto"
userLogin.innerText = `${user.login}`
userLogin.style.textAlign = "center"
userLinkPara.style.textAlign = "center"
userList.append(userListItem)
userListItem.previousElementSibling.remove()
userListItem.append(userLogin, userPicPara, userLinkPara)
console.log(userList)
}







