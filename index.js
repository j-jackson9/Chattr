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
    localStorage.setItem('selectedConversation', name);

    const messageContent = document.querySelector('.message-content');

  if (name === 'Tony Soprano') {
    messages = `
      <h1>Tony Soprano</h1>
      <div class="chat-history">
          <p class="message-in">Hey, how's it going?</p>
          <p class="message-out">Not bad, just working on some stuff. You?</p>
      </div>
    `;
  } else if (name === 'Ricky Montana') {
    messages = `
      <h1>Ricky Montana</h1>
      <div class="chat-history">
          <p class="message-in">Yo, you coming to the game?</p>
          <p class="message-out">Yeah, I’ll be there in 10.</p>
      </div>
    `;
  }
    else if (name === 'Nick Johnson') {
        messages = `
        <h1>Nick Johnson</h1>
        <div class="chat-history">
            <p class="message-in">Hey, did you finish the report?</p>
            <p class="message-out">I am NOT bailing you out.</p>
        </div>
    `;
  } else if (name === 'Jazz James') {
    messages = `
      <h1>Jazz James</h1>
      <div class="chat-history">
          <p class="message-in">Hey, are we still on for tomorrow?</p>
          <p class="message-out">Nah I am hanging with Ricky, sorry.</p>
      </div>
    `;
  }

  // Replace message content
  messageContent.innerHTML = `
    ${messages}
    <form class="message-input">
        <input type="text" placeholder="Type a message...">
        <button type="submit"><i class="fa-solid fa-arrow-up"></i></button>
    </form>
  `;
} 

window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('selectedConversation');
    if (savedName) {
      selectConversation(savedName);
    }
  });