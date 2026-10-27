let balance=0
let totalExpense=0

function addincome(){
const income=document.getElementById("inc").value
const incamount=document.getElementById("amn").value

console.log(income);
console.log(incamount);
balance=balance + Number(incamount)
document.getElementById("incomedisplay").innerHTML="Rs " + balance + "/-"
  const date = new Date()
  document.getElementById("incomeTable").innerHTML+=
  `
  <tr>
  <td>${income}</td>
    <td>${incamount}</td>
      <td>${balance}</td>
        <td>${date.toLocaleString()}</td>
  `

}
function addexpense(){

const expense=document.getElementById("exp").value
const expincome=document.getElementById("expamn").value
console.log(expense);
console.log(expincome);
balance=balance-Number(expincome)
totalExpense=totalExpense+Number(expincome)
document.getElementById("displayexpense").innerHTML="RS " + totalExpense + "/-"
document.getElementById("incomedisplay").innerHTML="RS " + balance + "/-"
const date = new Date()
  document.getElementById("expenseTable").innerHTML+=
  `
  <tr>
  <td>${expense}</td>
    <td>${expincome}</td>
      <td>${balance}</td>
        <td>${date.toLocaleString()}</td>
  `
}
function clearAll(){
  document.getElementById("inc").value=""
  document.getElementById("amn").value=""
    document.getElementById("exp").value=""
  document.getElementById("expamn").value=""

  balance=0
  totalExpense=0
  document.getElementById("displayexpense").innerHTML="Rs 0/-"
  document.getElementById("incomedisplay").innerHTML="Rs 0/-"

}
const username=localStorage.getItem("uname")

document.getElementById("head1").innerHTML=`Welcome ${username}`

function logout(){
    window.location.href="index.html"
}
