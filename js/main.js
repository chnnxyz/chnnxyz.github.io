let bg=document.getElementById("container");

let count=20;
for (let i=0; i<count; i++){
    let glitchbox=document.createElement('div');
        glitchbox.className='box';
        glitchbox.id="glitch"+i;
        bg.appendChild(glitchbox);
}

setInterval(function(){
        let glitch=document.getElementsByClassName('box');
        for(let j=0;j<glitch.length;j++){
            glitch[j].style.left=Math.floor(Math.random()*100)+'vw';
            glitch[j].style.top=Math.floor(Math.random()*100)+'vh';
            glitch[j].style.width=Math.floor(Math.random()*400)+'px';
            glitch[j].style.height=Math.floor(Math.random()*100)+'px';
}
},100)


function rmel(){
    for (let k=0;k<20;k++){
        $('glitch'+k).remove();
    }
}
setTimeout(function(){
    for (let k=0;k<20;k++){
        $('#glitch'+k).remove();
    }
},5000)

setTimeout(function(){
    for (let i=0; i<4; i++){
        let glitchbox=document.createElement('div');
            glitchbox.className='secbox';
            glitchbox.id="glitch"+i;
            glitchbox.innerHTML="No gods or kings, only man."
            bg.appendChild(glitchbox);
    }
    let glitch=document.getElementsByClassName('secbox');
    for(let j=0;j<glitch.length;j++){
        glitch[j].style.left=Math.floor(Math.random()*100)+'vw';
        glitch[j].style.top=Math.floor(Math.random()*100)+'vh';
        glitch[j].style.width=Math.floor(Math.random()*400)+'px';
        glitch[j].style.height=Math.floor(Math.random()*100)+'px';
    }    
},5000)

setTimeout(function(){
    for (let k=0;k<4;k++){
        $('#glitch'+k).remove();
    }   
},5300)

setTimeout(function(){
    let glitchbox=document.createElement('div');
    glitchbox.className='fbox1';
    glitchbox.innerHTML="No gods or kings, only man."
    bg.appendChild(glitchbox);
},5500)
setTimeout(function(){
    let glitchbox=document.createElement('div');
    glitchbox.className='fbox2';
    glitchbox.innerHTML='<a href="https://www.github.com/chnnxyz">Github</a>'
    bg.appendChild(glitchbox);
},5700)

