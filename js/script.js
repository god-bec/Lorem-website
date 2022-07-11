const dropdown = document.getElementById('burger');
const ul = document.querySelector('.ul')
dropdown.addEventListener('click',function(){
ul.classList.toggle('show');
})
//preloading js code
const preloading = document.querySelector('.preloader')
window.addEventListener('load',function(){
setTimeout(() => {
    preloading.style.zIndex = '-100';
}, 2000);
});
//display js code
const bg_img = document.querySelector('.bg-images')
const img_arr = [
{   id:1,
    image: './images/sea.jpg',
},
{
    id:2,
    image:'./images/nature.jpg',

},
{
    id:3,
    image:'./images/sky.jpg',
},
{
    id:4,
    image:'./images/nature1.jpg',
},
{
    id:5,
    image:'./images/nature3.jpg',
},
{
    id:6,
    image:'./images/nature2.jpg',
},
{
    id:7,
    image:'./images/nature4.jpg',
}
]
const map_arr = img_arr.map(function(el){
return `<img src="${el.image}"/>`;
});
window.addEventListener('DOMContentLoaded',function(){
    let count = 0;
    bg_img.innerHTML = map_arr[count];
setInterval(function () {
    count++;
    if(count >= img_arr.length ){
        count=0;
    }
    bg_img.innerHTML = map_arr[count];
 },7500);
});
//JS STYLE making header fixed when scrolled but it dint work
// const header = document.querySelector('.header')
// window.addEventListener('scroll',function(){
// const scrollHeight = window.pageYOffset;
// const headerHeigth = header.offsetHeight;
// console.log(headerHeigth);


// if(scrollHeight >= headerHeigth){
//     header.classList.add('fixed');
//     console.log(headerHeigth, scrollHeight)
// }else{
//     header.classList.remove('fixed');
// }

// });
// display image for about div
const image_arr = [
    {
        id:1,
        image: "./images/img5.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
    {
        id:2,
        image: "./images/img4.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
    {
        id:3,
        image: "./images/img3.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
]
const aboutimg = document.querySelector('.about_img')
window.addEventListener('DOMContentLoaded', function(){
  let display_img  = image_arr.map(function(el){
       return `<div class="display_images">
        <img src="${el.image}"/>
        <h5>${el.heading}</h5>
        <p>${el.para}</p>
    </div>`
    });
    aboutimg.innerHTML = display_img.join("");
})



// display image for features
const features_arr = [
    {
        id:1,
        image: "./images/img5.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
    {
        id:2,
        image: "./images/img4.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
    {
        id:3,
        image: "./images/img3.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
    {
        id:4,
        image: "./images/img2.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
    {
        id:5,
        image: "./images/img3.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
    {
        id:6,
        image: "./images/img1.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
    {
        id:7,
        image: "./images/img3.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
    {
        id:8,
        image: "./images/img1.svg",
        heading: 'Lorem ipsum dolor sit amet',
        para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, non.'
    },
]
const featuresimg = document.querySelector('.features_img')
window.addEventListener('DOMContentLoaded', function(){
  let feature_img  = features_arr.map(function(el){
       return `<div class="show_images">
       <img src="${el.image}" />
       <h5>${el.heading}</h5>
       <p>${el.para}</p>
   </div>`
    });
    featuresimg.innerHTML = feature_img.join("");
})



