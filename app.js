/* For reference from another project
function scrollToTarget(offset) {
    var targetElement = document.getElementById("myIntroduction");

    window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth"
    });
}

document.getElementById("scrollButton").addEventListener("click", function(event) 
{
    event.preventDefault(); 

    var offset = window.innerWidth < 768 ? 50 : 50; 
    scrollToTarget(offset);
});

const text = document.querySelector(".sec-text")

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Student";
    }, 0);

    setTimeout(() => {
        text.textContent = "Designer";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Developer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

var typed = new Typed(".auto-type", {
    strings: ["Curious", "Passionate", "Artistic"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
*/
