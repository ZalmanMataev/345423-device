var feedback = document.querySelector('.popup'),
  modalMap = document.querySelector('.popup-map'),
  overlay = document.querySelector('.modal-overlay');

/* modal-feedbeck. Start. */
if (feedback) {
  var feedbackLink = document.querySelector('.contacts-btn'),
    feedbackClose = feedback.querySelector('.popup-close'),
    feedbackForm = feedback.querySelector('.popup-form'),
    username = feedbackForm.querySelector('.popup-input[name="username"]'),
    email = feedbackForm.querySelector('.popup-input[name="email"]'),
    text = feedbackForm.querySelector('.popup-textarea');

  if (localStorage) {
    var storageUsername = localStorage.getItem('username');
    var storageEmail = localStorage.getItem('email');
  }

  feedbackLink.addEventListener('click', function(event) {
    event.preventDefault();
    feedback.classList.add('modal-feedback-show');
    overlay.classList.add('modal-overlay-show');

    if (storageUsername && storageEmail) {
      username.value = storageUsername;
      email.value = storageEmail;
      text.focus();
    } else {
      username.focus();
    }
  });

  feedbackClose.addEventListener('click', function(event) {
    event.preventDefault();
    feedback.classList.remove('modal-feedback-show');
    overlay.classList.remove('modal-overlay-show');
  });

  feedbackForm.addEventListener('submit', function (event) {
    if (!username.value || !email.value || !text.value) {
      event.preventDefault();
      username.required = email.required = text.required = 1;
    } else if (localStorage) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('email', email.value);
    }
  });
}
/* modal-feedbeck. End. */

/* Map. Start. */
if (modalMap) {
  var mapLink = document.querySelector('.contacts-map'),
    mapClose = modalMap.querySelector('.popup-close');

  mapLink.addEventListener('click', function(event) {
    event.preventDefault();
    modalMap.classList.add('modal-map-show');
    overlay.classList.add('modal-overlay-show');
  });

  mapClose.addEventListener('click', function(event) {
    event.preventDefault();
    modalMap.classList.remove('modal-map-show');
    overlay.classList.remove('modal-overlay-show');
  });
}
/* Map. End. */

/* ESC. Closure key. Start. */
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (feedback) {
      if (feedback.classList.contains('modal-feedback-show')) {
        feedback.classList.remove('modal-feedback-show');
        overlay.classList.remove('modal-overlay-show');
      }
    }

    if (modalMap) {
      if(modalMap.classList.contains('modal-map-show')) {
        modalMap.classList.remove('modal-map-show');
        overlay.classList.remove('modal-overlay-show');
      }
    }
  }
});
/* ESC. Closure key. End. */
