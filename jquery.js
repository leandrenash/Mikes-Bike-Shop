function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length <= 10){
    text = "Your name must consit of first and last";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 6){
    text = "Subject must consit of ten characters";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length <= 6){
    text = "Phone number should be seven digits";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Email must have @ symbol";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 24){
    text = "Please Enter More Than 25 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Successfully Submitted.");
  return true;
}