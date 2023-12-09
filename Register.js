function registerEvent(event) {

event.preventDefault();
    
  let name = document.getElementById("Name").value;
  console.log(name , 'name');
  let email = document.getElementById("Email").value;
  console.log(email);
  let passWord = document.getElementById("Password").value;
  console.log(passWord);

  if (!name || !email || !passWord) {
    return alert("Please fill inputs");
  }

    let userData = {name , email , passWord}

    console.log(userData)




    let user = JSON.parse(localStorage.getItem('Users')) || [];

    user.push(userData)

    localStorage.setItem('Users' ,JSON.stringify(user))


    document.getElementById("Name").value = ''
    document.getElementById("Email").value = ''
    document.getElementById("Password").value = ''

   alert("Registration successFull")


    window.location.href = "./Login.html"
}
