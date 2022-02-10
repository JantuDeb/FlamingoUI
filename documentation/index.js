var list = document.querySelectorAll(".snippet");
var outputEl = document.querySelectorAll(".html-code");

document.addEventListener("DOMContentLoaded", ()=> {
  for (let index = 0; index < list.length; index++) {
    let element = list[index];
    let snippet = element.innerHTML.replace(/</g, "&lt;");
    let pre = document.createElement("pre");
    pre.innerHTML = `<button class="btn-copy">Copy to clipboard</button> <code class="language-html">${snippet}</code>` //<button class="btn-copy">Copy</button>
    outputEl[index].appendChild(pre)
  }
  
  
  // //CLICK TO COPY
  var btnCopy = document.querySelectorAll(".btn-copy");

  btnCopy.forEach(btn=>{
    btn.addEventListener("click", (e) => {
      let textContent =e.target.nextElementSibling.innerText
      console.log(textContent);
      try {
        navigator.clipboard.writeText(textContent).then(()=>{
          console.log("copied")
        })
      } catch (error) {
        console.log(error)
      }
      e.target.innerHTML = "Copied"
      setTimeout(()=>{
        e.target.innerHTML = "Copy to clipboard"
      },3000)
    })
  });
});
