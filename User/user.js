import {users } from '../data.js';
import './user_style.css';
import {Form} from './form';
import {FormEdit} from './form-edit';

let _users = users;

/*

let title = 'Add New User';


let data = {
    name: 'Test',
    lastname: '',
    email: '',
    image: ''
};


*/

export const Users = `

${Form()}

<ul id="users"></ul>

`

export const showUsers = ()=>{

  const listUser = document.querySelector("#users");

  let lstuser = '';
  _users.map(user => {
      lstuser += `<li> 
      <a href="#!" onclick="showDetail(${user.id})"> 
      <img src="${user.image}" alt="" height="50"> 
    
      ${user.name}
     
      
      </a>

      <button
      
      onclick = "onEdit(${user.id})"

      >
      
      <i class="fa fa-pencil" aria-hidden="true" style="color:green"></i>

      </button>
      

      <button
      
      onclick = "onDelete(${user.id})"

      >
      
      <i class="fa fa-trash" aria-hidden="true"></i>

      </button>
      
      
      </li>`
  });

  listUser.innerHTML = lstuser;
  document.getElementById("addUser").style.display = "none";
}

export const onDelete = (uId)=>{
  _users = _users.filter(f => f.id!==uId);
  showUsers();

}



export const onAddUser = ()=>{
 
  document.getElementById("addUser").style.display = "block";
  document.getElementById("users").style.display = "none";

  Form();
  
}

export const onEdit = (i)=>{

   const userEdit = users.filter(f => f.id===i);

   const {id,name,lastname,email,image} = userEdit[0]


   let data = {
     name,
     lastname,
     email,
     image
   };

   //title = 'Edit User';

   FormEdit(i,data);

   document.getElementById("addUser").style.display = "block";
   document.getElementById("users").style.display = "none";
 

  // onAddUser();




}


  