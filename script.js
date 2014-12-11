$(document).ready(function(){
  $("#about").on("click", showAbout);
  $(".me").on("click", showHome);
  $("#projects").on("click", showProjects);
  $("#experience").on("click", showExperience);
  $("#blog").on("click", showBlog);

})

function showAbout() {
  $(".bg").addClass("opaque");
  $(".greetings").addClass("invisible");
  $(".projects").addClass("invisible");
  $(".experience").addClass("invisible");
  $(".blog").addClass("invisible");
  $(".about").removeClass("invisible");
};

function showHome() {
  $(".bg").removeClass("opaque");
  $(".about").addClass("invisible");
  $(".projects").addClass("invisible");
  $(".experience").addClass("invisible");
  $(".blog").addClass("invisible");
  $(".greetings").removeClass("invisible");
};

// function showMenu() {
//   $(".dropdown-menu").removeClass("invisible")
// }

function showProjects() {
  $(".bg").addClass("opaque");
  $(".greetings").addClass("invisible");
  $(".about").addClass("invisible");
  $(".experience").addClass("invisible");
  $(".blog").addClass("invisible");
  $(".projects").removeClass("invisible");

};

function showExperience() {
  $(".bg").addClass("opaque");
  $(".greetings").addClass("invisible");
  $(".projects").addClass("invisible");
  $(".about").addClass("invisible");
  $(".blog").addClass("invisible");
  $(".experience").removeClass("invisible");
};

function showBlog(){
  $(".bg").addClass("opaque");
  $(".greetings").addClass("invisible");
  $(".projects").addClass("invisible");
  $(".about").addClass("invisible");
  $(".experience").addClass("invisible");
  $(".blog").removeClass("invisible");
};