let nm = document.getElementsByClassName("nme")[0];
nm.addEventListener('mousemove',function(event) {nm.textContent='</Shiva>'});
nm.addEventListener('mouseout',function(event) {nm.textContent='Shiva'});
nm.textContent = 'Shiva';

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
var speed = 100;
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

const tps = Array.from(document.getElementsByClassName('flex_container')[0].childNodes).filter(node => node.nodeType!== Node.TEXT_NODE)
const about = document.getElementsByClassName("main_about")[0]
const skills = document.getElementsByClassName("skills")[0]
const projects = document.getElementsByClassName("projects")[0]
tps[1].addEventListener('click',function(){about.scrollIntoView({behavior: 'smooth'});});
tps[2].addEventListener('click',function(){projects.scrollIntoView({behavior: 'smooth'});});
tps[3].addEventListener('click',function(){skills.scrollIntoView({behavior: 'smooth'});});
const btn = Array.from(document.getElementsByClassName('flex_icons')[0].childNodes).filter(node => node.nodeType!== Node.TEXT_NODE)
const lnks = ["https://github.com/Shiva953","https://www.linkedin.com/in/shiva-seth-958114233/","https://www.reddit.com/user/Xiotus","https://discord.com/users/791137267535970324","https://twitter.com/Galactron71"]


for (let i=0;i<=4;i+=1){
    tps[i].addEventListener('mousemove',()=>{tps[i].style.color='#73deff'})
    tps[i].addEventListener('mouseout',()=>{tps[i].style.color='#ffffff'})
    btn[i].addEventListener('click',()=>{window.open(lnks[i],'_blank')})
    }
var opac = 0;
function FadeFunction() {
    if (opac<1) {
      opac+= .01;
      setTimeout(function(){FadeFunction()},37);
    }
    btn[0].childNodes[0].style.opacity = opac;
}
document.body.addEventListener('mousemove',FadeFunction())
