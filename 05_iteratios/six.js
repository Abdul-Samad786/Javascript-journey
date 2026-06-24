const users = [
 {
  name:"Ali",
  active:true
 },
 {
  name:"Ahmed",
  active:false
 },
 {
  name:"Samad",
  active:true
 }
];


new_users=users.filter((item)=> item.active==true)
console.log(new_users)