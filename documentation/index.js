var list = document.querySelectorAll(".snippet");
var outputEl = document.querySelectorAll(".html-code");

document.addEventListener("DOMContentLoaded", ()=> {
  for (let index = 0; index < list.length; index++) {
    let element = list[index];
    let snippet = element.innerHTML.replace(/</g, "&lt;");
    snippet = snippet.replace(/           /g, "");
    let pre = document.createElement("pre");
    // pre.style = "padding:0.5rem ; margin:0.5rem;";
   
    pre.innerHTML = `<button class="btn-copy">Copy to clipboard</button> <code class="language-html">${snippet}</code>` //<button class="btn-copy">Copy</button>
    // let code =
    //   `<pre style="padding:0.5rem ; margin:0.5rem;"><code class="htmlCode">${snippet}</code></pre>`;
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
