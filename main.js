// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeGlyph = document.querySelectorAll('.like-glyph')

for (const heart of likeGlyph) {
  heart.addEventListener('click', (event) => {
    console.log(event.target)
    const heartImage = event.target
    // invoke mimicServerCall to simulate making a server request
    mimicServerCall()
    // success status -> full heart
    // add activated-heart to make the heart appear red
    .then(() => {
      if (heartImage.textContent !== FULL_HEART) {
        heartImage.textContent = FULL_HEART;
      } else {
        heartImage.textContent = EMPTY_HEART;
      }
      heartImage.classList.toggle("activated-heart");
    })
    // randomly fails to simulate faulty network conditions
    .catch((error) => {
      document.getElementById('modal-message').textContent = error;
      // display the error modal by removing the .hidden class
      function displayError() {
        document.getElementById('modal').classList.toggle('hidden');
      }
      displayError();
      // use setTimeout to hide the modal after 5 seconds
      const temporaryDisply = setTimeout(() => {
        displayError();
      }, 5000)
    });
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
