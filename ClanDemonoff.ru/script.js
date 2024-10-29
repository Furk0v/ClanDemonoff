const po = document.querySelector('.expandable-block');
const extra = document.querySelector('.dlyanumbers')
po.addEventListener('mouseenter', ()=>{
    extra.style.maxHeight = '100px';
})
po.addEventListener('mouseleave', ()=>{
    extra.style.maxHeight = '0px';
})
const mini = document.querySelector('.miniprofile')
const avatar = document.querySelector('avatar')
avatar.addEventListener('mouseenter', ()=>{
    mini.style.maxHeight = '400px';
    mini.style.maxWidth = '280px';
})
avatar.addEventListener('mouseleave', ()=>{
    mini.style.maxHeight = '0';
    mini.style.maxWidth = '0';
})

// const blocks = document.querySelectorAll('.myreview');

// blocks.forEach(block => {
//   block.addEventListener('mouseover', () => {
//     block.style.zIndex = 10;
//   });

//   block.addEventListener('mouseout', () => {
//     block.style.zIndex = 0;
//   });
// });
