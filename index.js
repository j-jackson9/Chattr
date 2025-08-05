/*heart function*/

function toggleHeart(heart) {
    if (heart.classList.contains('fa-regular')) {
        heart.classList.remove('fa-regular');
        heart.classList.add('fa-solid');
        heart.style.color = 'red';
    } else {
        heart.classList.remove('fa-solid');
        heart.classList.add('fa-regular');
        heart.style.color = 'black';
    }

    let likeText = heart.parentElement.querySelector('.like-text');

    if (heart.classList.contains('fa-solid')) {
        likeText.textContent = 'Unlike';
    } else {
        likeText.textContent = 'Like';
    }
  }

/*sidebar function*/

let sideBarButton = document.querySelector('.fa-bars');
let sideBar = document.querySelector('.sidebar');
let overLay = document.querySelector('.overlay');

  function openSideBar() {
    if(window.innerWidth <= 768) {
     if (sideBar.style.display === 'block') {
        sideBar.style.display = 'none';
      
    } else {
        sideBar.style.display = 'block';
       
    }
  }
}

/*conversation function*/

function selectConversation(name) {
   let convoList = document.querySelector('.convo');
   let message = document.querySelector('.message-content');
   if(convoList.textContent.name === name) {
       message.innerHTML
    }
      
   }


