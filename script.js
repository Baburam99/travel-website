let hiddenNav = document.getElementById("hidden-navbar");
let toggleOpen = document.getElementById("open");
let toggleClose = document.getElementById("close");
let navElements = hiddenNav.getElementsByTagName("a"); // Assuming the navigation contains anchor tags

// Function to close the navigation menu
function closeNav() {
    hiddenNav.style.display = "none";
    toggleOpen.style.display = "block";
    toggleClose.style.display = "none";
}

// Event listener for the open button
toggleOpen.addEventListener("click", function(){
    hiddenNav.style.display = "flex";
    toggleOpen.style.display = "none";
    toggleClose.style.display = "block";
});

// Event listener for the close button
toggleClose.addEventListener("click", closeNav);

// Event listeners for navigation elements
for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener("click", closeNav);
}

//navbar
//plans
const imghoverContainers = document.querySelectorAll('#imghover');

imghoverContainers.forEach(function(container) {
  const image = container.querySelector('img'); // Assuming the image is a direct child
  const textOverlay = container.querySelector('#overlayText');

  container.addEventListener('mouseover', function() {
    textOverlay.style.opacity = '1';
  });

  container.addEventListener('mouseleave', function() {
    textOverlay.style.opacity = '0';
  });
});
