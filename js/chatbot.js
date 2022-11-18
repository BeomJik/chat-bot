let send = document.querySelector('#send');

let chatContent = document.querySelector('.chat-content');

let chatBox = document.querySelector('#input');

console.log(chatBox.value);

send.addEventListener('click',function () {
  let template = `
  <div class="line">
    <span class="chat-box mine">${chatBox.value}</span>
  </div>
`;
chatContent.insertAdjacentHTML('beforeend',template);
});

function mine(content) {
  let template = `
    <div class="line">
      <span class="chat-box mine">${content}</span>
    </div>
  `;
  chatContent.insertAdjacentHTML('beforeend',template);
}