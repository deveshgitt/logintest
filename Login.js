function LoginEvent(event) {

    event.preventDefault();
        
      let email = document.getElementById("Email").value;
      console.log(email);
      let passWord = document.getElementById("Password").value;
      console.log(passWord);
    
      if (!email || !passWord) {
        return alert("Please fill inputs");
      }
    
        let users = JSON.parse(localStorage.getItem('Users'))

        for(let i = 0; i<users.length; i++){
            if(users[i].email == email && users[i].passWord == passWord){

                document.getElementById("Email").value = '';
                document.getElementById("Password").value = '';

                window.location.href = './main.html'

                return alert ('login sucessfull')
                
                
               

            }
        }
    }
    