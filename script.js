const sidebar = document.querySelector(".sidebar");

const closemanu = document.querySelector(".fa-xmark");
const openmanu = document.querySelector(".fa-bars");


openmanu.addEventListener("click" , () =>{
    sidebar.style.right = "0"
    console.log("open main manu")
});


closemanu.addEventListener("click" , () =>{
    sidebar.style.right = "-200px"

});
function handleToggle() {
    const extraText = document.getElementById('extra-text');
    const showMoreText = document.getElementById('show-more-text');
    if (extraText.style.display === 'none') {
        extraText.style.display = 'inline';
        showMoreText.style.display = 'none';
    } else {
        extraText.style.display = 'none';
        showMoreText.style.display = 'inline';
    }
};