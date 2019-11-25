const alertDiv = document.getElementById('alert');
const inputForm = document.getElementById('form-input');
const searchUser = document.getElementById('search-user');
const messageArea = document.getElementById('form-message');

//Since the X-icon is a background, I had to solve this by being able to click the entire div
alertDiv.addEventListener('click', function(){
  this.style.display = "none";
});

//Let's check some form inputs
inputForm.addEventListener('submit', function(event){
  event.preventDefault();
  if(searchUser.value == ""){
    alert('Please provide a user to send the message to');
  }else if(messageArea.value == ""){
    alert('Message field cannot be empty');
  }else {
    alert('Message sent!');
    window.location.reload();
  }
}); 

