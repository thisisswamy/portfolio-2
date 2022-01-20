// navigation bar effects on scroll 

window.addEventListener('scroll', ()=>{
    const header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});

// services pop up

const serviceModals=document.querySelectorAll(".service-modal");
const learnmoreBtns=document.querySelectorAll(".learn-more-btn");
const modalCloseBtns=document.querySelectorAll(".modal-close-btn");

var modal =(modalClick)=>{
    serviceModals[modalClick].classList.add('active');
}

learnmoreBtns.forEach((learnMoreBtn,i)=>{
    learnMoreBtn.addEventListener('click', ()=>{
        modal(i)
    });
});

modalCloseBtns.forEach((modalCloseBtn)=>{
    modalCloseBtn.addEventListener('click',()=>{
        serviceModals.forEach((modalView)=>{
            modalView.classList.remove('active');
        })
    })
})


// portfolio pop up

const portfolioModals=document.querySelectorAll(".portfolio-model");
const imgCards=document.querySelectorAll(".img-card");
const portfolioCloseBtns=document.querySelectorAll(".portfolio-close-btn");

var portfolioModal =(modalClick)=>{
    portfolioModals[modalClick].classList.add('active');
}

imgCards.forEach((imgCard,i)=>{
    imgCard.addEventListener('click', ()=>{
        portfolioModal(i)
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn)=>{
    portfolioCloseBtn.addEventListener('click',()=>{
        portfolioModals.forEach((portfolioModalView)=>{
            portfolioModalView.classList.remove('active');
        })
    })
})


// scroll  to top button 
const scrollTopBtn=document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll",()=>{
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})

// Navigation menu items active on scroll

window.addEventListener('scroll',()=>{
    const sections=document.querySelectorAll('section');
    const scrollY=window.pageYOffset;

    sections.forEach(current=>{
        let sectionHeight=current.offsetHeight;
        let sectionTop=current.offsetTop-50;
        let id=current.getAttribute("id");

        if(scrollY >sectionTop && scrollY <=sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" +id+"]").classList.add('active');
        }
        else{
            document.querySelector(".nav-items a[href*=" +id+"]").classList.remove('active');
        }
    })
})

// dark theme 
const themeBtn=document.querySelector(".theme-btn");
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme')
    themeBtn.classList.toggle("sun");

    localStorage.setItem('saved-theme', getCurrenetTheme())
    localStorage.setItem('saved-icon', getCurrenetIcon())
})

const getCurrenetTheme= ()=>{
    document.body.classList.contains('dark-theme') ? 'dark':'light';

}
const getCurrenetIcon= ()=>{
    document.body.classList.contains('sun') ? 'sun':'moon';

}

const savedTheme=localStorage.getItem('saved-theme');
const savedIcon=localStorage.getItem("saved-icon");

// if(savedTheme){
//     document.classList[savedTheme === 'dark' ? 'add' :"remove"]("dark-theme");
//     themeBtn.classList[savedIcon=== 'sun' ? 'add':'remove']('sun');
// }

// Responsive navigation menu

const menuBtn=document.querySelector(".nav-menu-btn");
const menuCloseBtn=document.querySelector(".nav-close-btn");
const navMenu =document.querySelector(".navigation");
const navItems=document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click",()=>{
    console.log("menu");
    navMenu.classList.add("active");
})

menuCloseBtn.addEventListener("click",()=>{
    navMenu.classList.remove("active")
})

navItems.forEach(navItem=>{
    navItem.addEventListener('click',()=>{
        navMenu.classList.remove("active")
    })
})