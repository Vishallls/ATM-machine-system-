const heading=document.querySelector("#heading");
window.addEventListener("keydown",(e)=>{
    heading.innerHTML=`
    <table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
   
`
})