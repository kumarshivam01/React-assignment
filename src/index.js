
import "./index.css"
import "./webpack.png"
import logo from './webpack.png'
console.log(logo)

const root = document.getElementById("root");
const image = document.createElement("img")
image.src=logo
image.setAttribute("class","logo")
// const h1 = document.createElement("h1")
// h1.innerText="Hello World !"
root.append(image)