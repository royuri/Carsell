let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menubtn.onclick = () => {
    menubtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}


window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }

    menubtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
}


document.querySelector('.home').onmousemove = (e) => {

    document.querySelectorAll('.home-parallax').forEach(element => {
        let speed = element.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        element.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });
};

document.querySelector('.home').onmouseleave = () => {

    document.querySelectorAll('.home-parallax').forEach(element => {

        element.style.transform = `translateX(0px) translateY(0px)`;

    });
};




let wrapper = document.querySelector('.wraper-box');
let activeBox = wrapper.querySelectorAll('.box');
let activeLable = document.querySelector('.activeCircle').querySelectorAll('.fa-circle')
let nextBtn = document.querySelector('#nextBtn');
let preBtn = document.querySelector('#preBtn');
let imgInd = 0;

nextBtn.onclick = ()=>{
    imgInd++;
    changeBox();
}

preBtn.onclick = ()=>{
    imgInd--;
    changeBox();
}

let changeBox = () =>{
    
    if(imgInd > activeBox.length - 1){
        imgInd = 0;
    } else if(imgInd < 0){
        imgInd = activeBox.length - 1;
    }

    for(let i = 0; i < activeBox.length; i++){
        if(i === imgInd){
            activeBox[i].classList.add('active');
            activeLable[i].classList.add('fa-solid');
            if(window.screen.width > 450){
                wrapper.style.transform = `translateX(${imgInd * -250}px)`;
            }
            
        } else{            
            activeBox[i].classList.remove('active');
            activeLable[i].classList.remove('fa-solid');
        }
    }
}





let fwrapper = document.querySelector('.featured-wrapper-box');
let fActBox = fwrapper.querySelectorAll('.box');
let FActLable = document.querySelector('.fActCircle').querySelectorAll('.fa-circle')
let fNextBtn = document.querySelector('#fNextBtn');
let fPreBtn = document.querySelector('#fPreBtn');

let fImgInd = 0;

fNextBtn.onclick = ()=>{
    fImgInd++;
    fChangeBox();
}

fPreBtn.onclick = ()=>{
    fImgInd--;
    fChangeBox();
}

let fChangeBox = () =>{
    
    if(fImgInd > fActBox.length - 1){
        fImgInd = 0;
    } else if(fImgInd < 0){
        fImgInd = fActBox.length - 1;
    }

    for(let i = 0; i < fActBox.length; i++){
        if(i === fImgInd){
            fActBox[i].classList.add('active');
            FActLable[i].classList.add('fa-solid');
            if(window.screen.width > 768){
                fwrapper.style.transform = `translateX(${fImgInd * -21}vw)`;
            }
            
        } else{            
            fActBox[i].classList.remove('active');
            FActLable[i].classList.remove('fa-solid');
        }
    }
}



let rWrapper = document.querySelector('.review-wrapper-box');
let rActBox = rWrapper.querySelectorAll('.box');
let rActLable = document.querySelector('.rActCircle').querySelectorAll('.fa-circle')
let rNextBtn = document.querySelector('#rNextBtn');
let rPreBtn = document.querySelector('#rPreBtn');

let rImgInd = 0;

rNextBtn.onclick = ()=>{
    rImgInd++;
    rChangeBox();
}

rPreBtn.onclick = ()=>{
    rImgInd--;
    rChangeBox();
}

let rChangeBox = () =>{
    
    if(rImgInd > rActBox.length - 1){
        rImgInd = 0;
    } else if(rImgInd < 0){
        rImgInd = rActBox.length - 1;
    }
    for(let i = 0; i < rActBox.length; i++){
        if(i === rImgInd){
            rActBox[i].classList.add('active');
            rActLable[i].classList.add('fa-solid');
            if(window.screen.width > 768){
                rWrapper.style.transform = `translateX(${rImgInd * -20}vw)`;
            }  
        } else{            
            rActBox[i].classList.remove('active');
            rActLable[i].classList.remove('fa-solid');
        }
    }
}

