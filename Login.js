function LoginEvent(event) {

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
    
        let users = JSON.parse(localStorage.getItem('Users'))

        for(let i = 0; i<users.length; i++){
            if(users[i].email == email && users[i].passWord == passWord){

                document.getElementById("Email").value = '';
                document.getElementById("Email").value = '';

                return alert ('login sucessfull')

            }
        }
    }