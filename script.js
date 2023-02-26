let nm = document.getElementsByClassName("nme")[0];
// nm.addEventListener('mousemove',function(event) {nm.textContent='Shiva'});
nm.addEventListener('mouseout',function(event) {nm.textContent='Shiva'});
nm.onmouseover = e => {
  let iterations = 0;
  const interval = setInterval(()=>{e.target.innerText = e.target.innerText.split("").map(letter =>  String.fromCharCode(Math.floor(Math.random()*26)+65)).join("");
  if(iterations>=100){
    clearInterval(interval);
    nm.textContent = "Shiva"
  }
  iterations+=1;},5);
}



var opacity = 0;
function MyFadeFunction() {
   if (opacity<1) {
      opacity += .01;
      setTimeout(function(){MyFadeFunction()},11);
   }
   nm.style.opacity = opacity;
}
document.body.addEventListener('mousemove',MyFadeFunction())

var k = 0;
var txt = "I'm currently learning web development and diving into the world of dev and open source.";
var speed = 50;
function typeWriter(){
  if (k < txt.length) {
    document.getElementsByClassName("typing-text")[0].innerHTML += txt.charAt(k);
    k++;
    setTimeout(typeWriter, speed);
  }
setTimeout(typeWriter,25000)
}
document.body.addEventListener('mousemove',typeWriter())

const titles = Array.from(document.getElementsByClassName('proj_title')[0].childNodes).filter(node => node.nodeType!== Node.TEXT_NODE)
const gthb = Array.from(document.getElementsByClassName('prj_gtb')[0].childNodes).filter(node => node.nodeType!== Node.TEXT_NODE)
let arr = [document.getElementById('meme'),document.getElementById('hangman'),document.getElementById('snake')]
const link_projs = ['https://github.com/Shiva953/Meme_Generator','https://github.com/Shiva953/Terminal_Hangman_Game','https://github.com/Shiva953/Snake-Game']
for(let i=0;i<3;i+=1){
    arr[i].addEventListener('mousemove',function(){arr[i].style.opacity = 0.5; gthb[i].style.opacity = 1})
    titles[i].addEventListener('mousemove',function(){arr[i].style.opacity = 0.5;gthb[i].style.opacity = 1})
    arr[i].addEventListener('mouseout',function(){arr[i].style.opacity = 0.9; gthb[i].style.opacity = 0})
    titles[i].addEventListener('mouseout',function(){arr[i].style.opacity = 0.9;gthb[i].style.opacity = 0})
    gthb[i].addEventListener('mousemove', () => {gthb[i].style.opacity = 1;arr[i].style.opacity = 0.5})
    gthb[i].addEventListener('mouseout', () => {gthb[i].style.opacity = 0;arr[i].style.opacity = 0.9})
    arr[i].addEventListener('click',function(){window.open(link_projs[i],'_blank')})
    gthb[i].addEventListener('click',function(){window.open(link_projs[i],'_blank')})
    titles[i].addEventListener('click',function(){window.open(link_projs[i],'_blank')})
}

const bt = document.getElementsByClassName('contact_button')[0]
const socials = document.getElementById('socials')
bt.addEventListener('click',()=>{
  socials.scrollIntoView({behavior: 'smooth'});
})

const tps = Array.from(document.getElementsByClassName('flex_container')[0].childNodes).filter(node => node.nodeType!== Node.TEXT_NODE)
const about = document.getElementsByClassName("main_about")[0]
const skills = document.getElementsByClassName("skills")[0]
const projects = document.getElementsByClassName("projects")[0]
tps[0].addEventListener('click',function(){window.open('https://neutronsblog.hashnode.dev/','_blank')})
tps[1].addEventListener('click',function(){about.scrollIntoView({behavior: 'smooth'});});
tps[2].addEventListener('click',function(){projects.scrollIntoView({behavior: 'smooth'});});
tps[3].addEventListener('click',function(){skills.scrollIntoView({behavior: 'smooth'});});
const fav = Array.from(document.getElementsByClassName('favourites')[0].childNodes).filter(node => node.nodeType!== Node.TEXT_NODE)
    fav[0].addEventListener('click',()=>{window.open('https://open.spotify.com/playlist/3vvXnLFktxlSLSHW0rSUog?si=7a64ff4e21674866&pt=c61a81d73c2c55592801c7eaa5645876','_blank')})
    fav[1].addEventListener('click',()=>{window.open('https://www.notion.so/All-Time-Favourite-Books-e82eef3e3058438190bbf1f3567b19a1','_blank')})
    fav[2].addEventListener('click',()=>{window.open('','_blank')})
const btn = Array.from(document.getElementsByClassName('flex_icons')[0].childNodes).filter(node => node.nodeType!== Node.TEXT_NODE)
const btn2 = Array.from(document.getElementsByClassName('flex_icons')[1].childNodes).filter(node => node.nodeType!== Node.TEXT_NODE)
const lnks = ["https://github.com/Shiva953","https://www.linkedin.com/in/shiva-seth-958114233/","mailto:shivaset2@gmail.com","https://discord.com/users/791137267535970324","https://twitter.com/Neutron975","https://www.reddit.com/user/Xiotus"]
btn2[2].addEventListener('click',()=>{window.open(lnks[5],'_blank')})
document.getElementById((`ic5`)).addEventListener("mousemove", function(event) {
  const g = document.getElementById((`ic5`)).getElementsByTagName("g")[0];
  g.setAttribute("fill", "#bdc4ff");
});
document.getElementById((`ic5`)).addEventListener("mouseout", function(event) {
  const g = document.getElementById((`ic5`)).getElementsByTagName("g")[0];
  g.setAttribute("fill", "#ffffff");
});
const hello = document.getElementsByClassName('x2')[0]
hello.addEventListener('click',function(){window.open('mailto:shivaset2@gmail.com','_blank')})

for (let i=0;i<=5;i+=1){
  if(i<3){
    btn[i].addEventListener('click',()=>{window.open(lnks[i],'_blank')})
  }
  else{
    btn2[i-3].addEventListener('click',()=>{window.open(lnks[i],'_blank')})
  }
  document.getElementById((`ic${i}`)).addEventListener("mousemove", function(event) {
      const g = document.getElementById((`ic${i}`)).getElementsByTagName("g")[0];
      g.setAttribute("fill", "#bdc4ff");
    });
    document.getElementById((`ic${i}`)).addEventListener("mouseout", function(event) {
      const g = document.getElementById((`ic${i}`)).getElementsByTagName("g")[0];
      g.setAttribute("fill", "#ffffff");
    });
    tps[i].addEventListener('mousemove',()=>{tps[i].style.color='#97e5fc';})
    tps[i].addEventListener('mouseout',()=>{tps[i].style.color='#ffffff';})
    }





