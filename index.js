let btn = document.getElementsByTagName("button")[0];
let so = document.getElementById("card");

const v = document.getElementById("a").innerText;
const w = document.getElementById("b").innerText;
const f = document.getElementById("c").innerText;
const g = document.getElementById("d").innerText;
const h = document.getElementById("e").innerText;
var fz = 0;

a.addEventListener("click", (e) => {
  document.getElementById("a").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("a").style.color = "white";
  fz = v;
});

b.addEventListener("click", (e) => {
  document.getElementById("b").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("b").style.color = "white";
  fz = w;
});

c.addEventListener("click", (e) => {
  document.getElementById("c").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("c").style.color = "white";
  fz = f;
});

d.addEventListener("click", (e) => {
  document.getElementById("d").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("d").style.color = "white";
  fz = g;
});

e.addEventListener("click", (e) => {
  document.getElementById("e").style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById("e").style.color = "white";
  fz = h;
});

btn.addEventListener("click", (e) => {
  if (fz == 0) {
    alert(" Choose The Rating.... ");
  } else {
    btn.style.backgroundColor = "hsl(0, 0%, 100%)";
    btn.style.color = "hsl(25, 97%, 53%)";

    setTimeout(() => {
      so.innerHTML = `        <div class="one">
    
        <img src="/images/illustration-thank-you.svg" alt="illustration - logo">
    
    </div>
    
    <div class="two">
    
        <h4 id="dhamal">  You selected <span>&nbsp;${fz}&nbsp;</span> out of 5 </h4>
    
    </div>
    
    <div class="three">
    
        <h1>Thank You! </h1>
    
    </div>
    
    <div class="four">
        <p>
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!
        </p>
    </div>`;
    }, 200);
  }
});
