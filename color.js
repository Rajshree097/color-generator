const getColor=()=>{                   //colors are called hex code
  const randomNum=Math.floor(Math.random()*16777215);  
  const randomCode="#"+ randomNum.toString(16);//16 stands for hexadecimal
  document.body.style.backgroundColor=randomCode;
  document.getElementById("color-code").innerText=randomCode;
  navigator.clipboard.writeText(randomCode); //as we click on click me the code is copied and we can directly paste it to our clipboard.
}
//event call comes on clicking
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
//initial call comes on page refreshing
getColor()