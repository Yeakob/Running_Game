var character = document.getElementById('ch');
var enemi = document.getElementById('en');
function jump(){
    character.classList.add("animatec");
    setTimeout(function()
    {
        character.classList.remove("animatec")

    },1000);
};
var checkdead = setInterval(() => {
    var characterTop =parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var enienleft =parseInt(window.getComputedStyle(enemi).getPropertyValue("left"));
    if(enienleft<60 && enienleft>-40 && characterTop>=450)
        {
            enemi.style.animation="none";
           enemi.style.display="none";
            alert("Try Again");
            console.log()
        }
}, 10);