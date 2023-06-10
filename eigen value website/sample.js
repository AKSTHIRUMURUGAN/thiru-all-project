
function calculation(){
let a11=Number(document.getElementById("v1").value)
let a12=Number(document.getElementById("v2").value)
let a13=Number(document.getElementById("v3").value)
let a21=Number(document.getElementById("v4").value)
let a22=Number(document.getElementById("v5").value)
let a23=Number(document.getElementById("v6").value)
let a31=Number(document.getElementById("v7").value)
let a32=Number(document.getElementById("v8").value)
let a33=Number(document.getElementById("v9").value)
let s1 = a11 + a22 + a33
let s2 = a22 * a33 - a32 * a23 + a11 * a33 - a31 * a13 + a11 * a22 - a21 * a12
let s3 = a11 * (a22 * a33 - a32 * a23) - a12 * (a21 * a33 - a31 * a23) + a13 * (a21 * a32 - a31 * a22)
s1 = -1 * s1
s3 = -1 * s3
if(s1>=0){
  ss1="+"
}
else{
  ss1="&nbsp"
}
if(s2>=0){
  ss2="+"
}
else{
  ss2="&nbsp"
}
if(s3>=0){
  ss3="+"
}
else{
  ss3="&nbsp"
}
let n1 = 1
let n2 = s1
let n3 = s2
let n4 = s3
for (let i=-1;i<10;i++){
let r3=i+1
let a=n1+0
let b=a*r3
b=n2+b
let c=b*r3
c=n3+c
let d=c*r3
d=n4+d
if (d == 0){
let r1=(b**2-4*a*c)
r1=-b+r1**0.5
r1=r1/2*a
r1=Math.round(r1)
let r2=(b**2-4*a*c)
r2=-b-r2**0.5
r2=r2/2*a
r2=Math.round(r2)
let p=document.getElementById("p")
p.innerHTML=`&lambda;1:${r1} <br>
&lambda;2:${r2} <br>
&lambda;3:${r3}`
}
}
let np=document.getElementById("np")
np.innerHTML=`<b>&lambda;</b> <sup>3 </sup>${ss1}${s1}<b> &lambda;</b><sup>2</sup>${ss2}${s2}<b>&lambda;</b> ${ss3}${s3}=0
`
}

function t2(){
  let btnc=document.getElementById("nbc")
  btnc.innerHTML=`<button id="button2" onclick=tm()>CALCULATE</button>`

  let table=document.getElementById("table1")
  table.innerHTML=` <tr>
  <td><input type="text" name="a11" id="v1" placeholder="a11" class="matrix"></td>
  <td><input type="text" name="a12" id="v2" placeholder="a12" class="matrix"></td>
  
</tr>
<tr>
  <td><input type="text" name="a21" id="v4" placeholder="a21" class="matrix"></td>
  <td><input type="text" name="a22" id="v5" placeholder="a22" class="matrix"></td>
  <tr>`

}
function tm(){

  let a11=Number(document.getElementById("v1").value)
  let a12=Number(document.getElementById("v2").value)
  let a21=Number(document.getElementById("v4").value)
  let a22=Number(document.getElementById("v5").value)
 

let s1 = a11 + a22
let s2 = a11 * a22 - a21 * a12
 s1 = -1 * s1
let a = 1
let b = s1
let c = s2
let r1 = (b ** 2 - 4 * a * c)
 r1 = -b + r1 ** 0.5
 r1 = r1 / 2 * a
let r2 = (b ** 2 - 4 * a * c)
 r2 = -b - r2 ** 0.5
 r2 = r2 / 2 * a
 if(s1>=0){
  ss1="+"
}
else{
  ss1="&nbsp"
}
if(s2>=0){
  ss2="+"
}
else{
  ss2="&nbsp"
 
}
let np=document.getElementById("np")
 np.innerHTML=`<b>&lambda;</b> <sup>2 </sup>${ss1}${s1}<b> &lambda;</b>${ss2}${s2}=0`
let p=document.getElementById("p")
p.innerHTML=`&lambda;1:${r1} <br>
&lambda;2:${r2}`
}
