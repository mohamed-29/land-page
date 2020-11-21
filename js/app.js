

//in this method we will add the sections yto the top bar and make them on clicks scroll to viwe sections
//the list were we will add the sections list
const navbar__list = document.getElementById('navbar__list')
//the section in the project
const sec = document.querySelectorAll('[data-nav]');
//the fragment were we will add the section list first
const fragment = document.createDocumentFragment();
//for each section in the project we will creat a li. element and add a text of the name of the section in it 
sec.forEach(element => {
    const newElement = document.createElement('li');
    //the name of each section
    newElement.innerText = element.getElementsByTagName('h2')[0].innerText;
    //add a event when we click on the li. element of each section it will scroll to view the section
    newElement.addEventListener('click',function(){

        element.scrollIntoView({behavior: "smooth"});

    })
    //add the element to the fragment
    fragment.appendChild(newElement);
});
//add the fragment to the topbar list
navbar__list.appendChild(fragment);



//this method to make the navbar disapper 'Shrink at the top of the page'

window.onscroll = function() {scrollFunction()};
//we get the topbar body
const navbar_body = document.getElementById("top_bar")
function scrollFunction() {
  //when we scroll more than 20px the topbar will shrink at the top of the page 
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar_body.style.top = "-100px";
  } else {
    navbar_body.style.top = "0px";
  }
}




//in these method we will make the section on the view part of the page be the active section
//we select all sections 
const sec1 = document.querySelectorAll('section');
//on scroll these method will paly
window.addEventListener('scroll',function(){

sec1.forEach(element => {
  //the top of the section
  const elemTop = element.getBoundingClientRect().top
  //make sure that is the section on the view by its top
  if(elemTop > 0 && elemTop < 100){
    //make sure that all section are not active
    sec1.forEach( (sec) => { 
      sec.classList.remove("your-active-class");
     });
     //then add the active class to the viewed section
    element.classList.add("your-active-class");
  }

});
})



