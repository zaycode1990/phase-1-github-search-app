document.addEventListener("DOMContentLoaded", () => {
    const gitForm = document.querySelector('#github-form')
    gitForm.addEventListener('submit', (e) =>{
       
        e.preventDefault()
        e.stopPropagation()
       gitUserSelect(e.target.querySelector('#search').value)
       
    }, )

    
},)

 async function gitUserSelect(userName) {
 try {const response = await fetch(`https://api.github.com/search/users?q=${userName}`)
 const data = await response.json();
 
 
 data.items.forEach(renderData)
  console.log(data.items)  
 }

catch(error){ console.error(error) }

}
    



function renderData(user){
	
const userList = document.getElementById('user-list')
// const reposList = document.getElementById('repos-list')
// const repoListItem = document.createElement("li")
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
    // reposList.append(repoListItem)
    userListItem.previousElementSibling.remove()
    userListItem.append(userLogin, userPicPara, userLinkPara)
        const btn = document.createElement('button')
        btn.innerText = "Get Repositories"
        btn.type = "button"
        btn.addEventListener('click', () =>
            handleRepo(user.login)
        )
        userLogin.append(btn)
        console.log(userList)
}


function handleRepo(userName) {
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then((repoData) => { 
        for(i = 0; i < repoData.length; i++) {
            renderRepo(repoData[i].html_url)
        }
    })
    .catch(err => console.log(err))

}




 function renderRepo(item) {
    const userReposList = document.querySelector("#repos-list")
    const repoListItem = document.createElement("li")
    const repoDataAnchor = document.createElement('a')
    repoDataAnchor.href = item
    repoListItem.appendChild(repoDataAnchor)
    userReposList.append(repoListItem)
    repoDataAnchor.innerText = `${item}`
 }