import './style.css';
import {Users, showUsers, onDelete, onAddUser, onEdit} from './User/user';
import {onSave, onCancel} from './User/form';
import {Detail,showDetail, onBack} from './Detail/detail';

let title = 'Users List';

document.querySelector('#app').innerHTML = `
 
 <h1>
 ${title}
 </h1>

${Detail}

${Users}

`;

showUsers();



window.showDetail = showDetail;
window.onDelete = onDelete;
window.addUser = onAddUser;
window.onEdit = onEdit;
window.onSave = onSave;
window.onCancel = onCancel;
window.onBack = onBack;
