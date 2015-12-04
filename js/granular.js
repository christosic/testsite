//Aim: to smooth scroll our page to the correct section when a button is clicked
// $("element").action("what we want to change", "how we want to change it");

// Step 1: Attach a click event listner to the arrow buttons
$(".scroll-to").on("click", function(){


// Step 2: Find the id of the section that we want to scroll to &store it

// var sectionName = "#first-section"

// To make our code dynamic and portable we need to change the value of our variable sectionName. Ideally we want to grab the href attribute of whichever anchor tag has been clicked on. The href stores the section that we need to scroll to.

// We use jquery's keyword 'this' in order to access the element that has been clicked on.
// To access the elements attributes, we use the .attraction. This takes one value - the name of the attibute we want to access. We're looking for the href, so
var sectionName = $(this).attr("href");
console.log(sectionName);


// Step 3: Using the id, store how many pixels from the top this is.

var sectionPlacement = $(sectionName).offset().top; console.log(sectionPlacement);

// Step 4: Animate or smoothly scroll our page to the section.
// First we select our entire page, as we want everything to move downwards to where the section is placed. To do this we add "html", "body"
// .animate allows us to animate different properties .It takes the following values, property, to animate, duration, easing & completion. We only need to use the first two.
// We need to move the vertical scroll barto the positionof our section. ScollTop allows us to do this. We add this
// We use 1000 as the duration for the animation, measured in milliseconds.
$("html, body").animate({scrollTop: sectionPlacement}, 1000);

// Step 5: Stop the section from flashing before our animationtakes place.
// To stop our link from jumping to the section, we use return false.
// This stops the I'm done
return false;


});
