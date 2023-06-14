// Dark/Light mode


// Mode

// *Default
var lightMode;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  lightMode = false;
} else {
  lightMode = true;
}
if (lightMode == true){

    document.documentElement.style.setProperty('--primary-black', '#E0E1E2');
    document.documentElement.style.setProperty('--primary-white', '#292935');
    document.documentElement.style.setProperty('--primary-black', '#E0E1E2');
    document.documentElement.style.setProperty('--primary-white', '#292935');
    document.getElementById("nav").style.backgroundColor = "#e9e9e9ba";
    document.getElementById("nav").style.borderBottom = "1px solid rgb(0 0 0 / 30%)";
    document.getElementById("CTA").style.backgroundColor = "#292935 !important";
    document.getElementById("CTA").style.color = "#EOE1E2 !important";
    document.getElementById("search").style.border = "1px solid #313144";
    document.getElementById('hamber').style.color = "black";
    document.getElementById("search").style.borderLeft = "none";
    document.getElementById("searchBtn").style.border = "1px solid #313144";
    document.getElementById("searchBtn").style.borderRight = "none";
    document.getElementById("search").style.backgroundColor = "none";
    document.getElementById("searchBtn").style.backgroundColor = "none";
    document.getElementById("nav_logo").src = "media/Pictures/logo_title_dark.png";
    document.getElementById("specialTitle").style.color = "var(--primary-white)";
    document.getElementById("specialTitle").style.textShadow = "none";
    document.getElementById("inproduction").style.color = "rgb(225 135 0)";
    document.getElementById("gear").style.color = "rgb(225 135 0)";
    for (const s of  document.querySelectorAll("#category")) {
        s.style.backgroundColor = "rgb(0 136 255 / 22%)";
      }
    document.getElementById("categoryText1").style.color = "#30a5ff";
    document.getElementById("categoryIcon1").style.color = "#30a5ff";
    document.getElementById("categoryText2").style.color = "#30a5ff";
    document.getElementById("categoryIcon2").style.color = "#30a5ff";
    for (const s of document.querySelectorAll("#arrow")) {
        s.style.filter = "invert(82%)";
      }

}
else{
  document.documentElement.style.setProperty('--primary-black', '#292935');
    document.documentElement.style.setProperty('--primary-white', '#E0E1E2');
    document.getElementById("nav").style.backgroundColor = "rgba(49, 49, 62, 0.65)";
    document.getElementById("nav").style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
    document.getElementById("CTA").style.backgroundColor = "#292935 !important";
    document.getElementById("CTA").style.color = "#EOE1E2 !important";
    document.getElementById("search").style.border = "1px solid #e0e1e2";
    document.getElementById("search").style.borderLeft = "none";
    document.getElementById("searchBtn").style.border = "1px solid #e0e1e2";
    document.getElementById("searchBtn").style.borderRight = "none";
    document.getElementById('hamber').style.color = "white";
    document.getElementById("search").style.backgroundColor = "none";
    document.getElementById("searchBtn").style.backgroundColor = "none";
    document.getElementById("mode").style.color = "white";

    document.getElementById("nav_logo").src = "media/Pictures/logo_title.png";
    document.getElementById("specialTitle").style.color = "var(--primary-white)";
    document.getElementById("specialTitle").style.textShadow = "none";
    document.getElementById("inproduction").style.color = "rgb(225 135 0)";
    document.getElementById("gear").style.color = "rgb(225 135 0)";
    for (const s of  document.querySelectorAll("#category")) {
        s.style.backgroundColor = "rgb(0 136 255 / 22%)";
      }
    document.getElementById("categoryText1").style.color = "#30a5ff";
    document.getElementById("categoryIcon1").style.color = "#30a5ff";
    document.getElementById("categoryText2").style.color = "#30a5ff";
    document.getElementById("categoryIcon2").style.color = "#30a5ff";
    document.getElementById("invertArrow").style.filter = "invert(100%)"
    for (const s of document.querySelectorAll("#arrow")) {
        s.style.filter = "invert(0%)";
      }
    }



// Changing Mode
document.getElementById("mode").addEventListener('click' , function() {

if(lightMode == true){

    lightMode = false;
    document.documentElement.style.setProperty('--primary-black', '#292935');
    document.documentElement.style.setProperty('--primary-white', '#E0E1E2');
    document.getElementById("nav").style.backgroundColor = "rgba(49, 49, 62, 0.65)";
    document.getElementById("nav").style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
    document.getElementById("CTA").style.backgroundColor = "#292935 !important";
    document.getElementById("CTA").style.color = "#EOE1E2 !important";
    document.getElementById("search").style.border = "1px solid #e0e1e2";
    document.getElementById("search").style.borderLeft = "none";
    document.getElementById("searchBtn").style.border = "1px solid #e0e1e2";
    document.getElementById("searchBtn").style.borderRight = "none";
    document.getElementById('hamber').style.color = "white";
    document.getElementById("search").style.backgroundColor = "none";
    document.getElementById("searchBtn").style.backgroundColor = "none";
    document.getElementById("mode").style.color = "white";

    document.getElementById("nav_logo").src = "media/Pictures/logo_title.png";
    document.getElementById("specialTitle").style.color = "var(--primary-white)";
    document.getElementById("specialTitle").style.textShadow = "none";
    document.getElementById("inproduction").style.color = "rgb(225 135 0)";
    document.getElementById("gear").style.color = "rgb(225 135 0)";
    for (const s of  document.querySelectorAll("#category")) {
        s.style.backgroundColor = "rgb(0 136 255 / 22%)";
      }
    document.getElementById("categoryText1").style.color = "#30a5ff";
    document.getElementById("categoryIcon1").style.color = "#30a5ff";
    document.getElementById("categoryText2").style.color = "#30a5ff";
    document.getElementById("categoryIcon2").style.color = "#30a5ff";
    document.getElementById("invertArrow").style.filter = "invert(100%)"
    for (const s of document.querySelectorAll("#arrow")) {
        s.style.filter = "invert(0%)";
      }
    }


else{
    lightMode = true;
    document.documentElement.style.setProperty('--primary-black', '#E0E1E2');
    document.documentElement.style.setProperty('--primary-white', '#292935');
    document.documentElement.style.setProperty('--primary-black-shadow', '#e0e1e221');
    document.documentElement.style.setProperty('--primary-white-shadow', '#29293527');
    document.getElementById("nav").style.backgroundColor = "#e9e9e9ba";
    document.getElementById("nav").style.borderBottom = "1px solid rgb(0 0 0 / 30%)";
    document.getElementById("CTA").style.backgroundColor = "#292935 !important";
    document.getElementById("CTA").style.color = "#EOE1E2 !important";
    document.getElementById("search").style.border = "1px solid #313144";
    document.getElementById("search").style.borderLeft = "none";
    document.getElementById('hamber').style.color = "black";
    document.getElementById("search").style.backgroundColor = "#292935";
    document.getElementById("mode").style.color = "rgb(29, 27, 33)";
    document.getElementById("searchBtn").style.border = "1px solid #313144";
    document.getElementById("searchBtn").style.borderRight = "none";
    document.getElementById("searchBtn").style.backgroundColor = "#292935";
    document.getElementById("nav_logo").src = "media/Pictures/logo_title_dark.png";
    document.getElementById("specialTitle").style.color = "#292935";
    document.getElementById("specialTitle").style.textShadow = "none";
    document.getElementById("inproduction").style.color = "rgb(225 135 0)";
    document.getElementById("gear").style.color = "rgb(225 135 0)";
    for (const s of  document.querySelectorAll("#category")) {
        s.style.backgroundColor = "rgb(0 136 255 / 22%)";
      }
    document.getElementById("categoryText1").style.color = "#30a5ff";
    document.getElementById("categoryIcon1").style.color = "#30a5ff";
    document.getElementById("categoryText2").style.color = "#30a5ff";
    document.getElementById("categoryIcon2").style.color = "#30a5ff";
    document.getElementById("invertArrow").style.filter = "invert(0%)"
    for (const s of document.querySelectorAll("#arrow")) {
        s.style.filter = "invert(82%)";
      }
    }
    console.log(lightMode);
});