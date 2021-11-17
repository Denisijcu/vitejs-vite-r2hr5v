import {users} from '../data';
import {showUsers} from './user';

let _users = users;

export const FormEdit = (i,data)=>{

const { name, lastname, email, image} = data;
  let formedit = `
     ${i}
    ${name}
  <button class="add" onclick="addUser()" id="btn-add"> 
  <i class="fa fa-plus" aria-hidden="true"></i>
  </button>
  
  <div id="addUser" class="onAddUser">
      <h3 id="title">Edit User</h3>

     

      <form name="addNewUser" action="javascript:void(0);">

        
          <p> Name:  <input type="text" name="fname" value = ${name}> </p>
     
          <p> Last Name: <input type="text" name="lname" value = ${lastname}> </p>
          <p> Email: <input type="email" name="email" value= ${email}> </p>
          <p> Image Url: <input type="text" name="image" value=${image}> </p>
        
          <button class="btn-save" onclick="onSave()"> Save </button>
          <button class="btn-cancel" onclick="onCancel()"> Cancel</button>
  
    </form>
  
  </div>
  
  `;



 
  return formedit;
} 


export const onCancel = ()=>{
  document.getElementById("addUser").style.display = "none";
  document.getElementById("users").style.display = "block";
}

export const onSave = (i)=>{

  console.log(i);

  let fname = document.forms["addNewUser"]["fname"].value;
  let lname = document.forms["addNewUser"]["lname"].value;
  let email = document.forms["addNewUser"]["email"].value;
  let image = document.forms["addNewUser"]["image"].value;

  let newU = {
    id: _users.length+1,
    name: fname,
    lastname: lname,
    email: email,
    image: image    
  }

  _users.push(newU);
  
  showUsers();
  
  document.getElementById("addUser").style.display = "none";
  document.getElementById("users").style.display = "block";
  //console.log(fname)

  //clean form
  document.forms["addNewUser"]["fname"].value ='';
  document.forms["addNewUser"]["lname"].value ='';
  document.forms["addNewUser"]["email"].value ='';
  document.forms["addNewUser"]["image"].value ='';
}
