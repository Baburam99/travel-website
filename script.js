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
//booking status
let book = document.getElementById("Schedule");


book.addEventListener("click", function() {
    let location = document.getElementById("locations").value;
    let date = document.getElementById("date").value;
    event.preventDefault();
    

    if (location && date) {
      
        let bookingContainer = document.getElementById("homeBooking")

        let paragraph = document.createElement("p");

        paragraph.textContent = "Destination: " + location + ", Date: " + date;
       
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute('class','redbutton')
        deleteButton.onclick = function() {
            paragraph.remove();
        };

        let checkoutButton = document.createElement("button");
        checkoutButton.textContent = "Checkout";
        checkoutButton.setAttribute('class','greenbutton')

        checkoutButton.onclick = function() {
            window.location.href = "booking.html"; 
        };

        paragraph.appendChild(deleteButton);
        paragraph.appendChild(checkoutButton); 
        bookingContainer.appendChild(paragraph);
         

        document.getElementById("locations").value = "";
        document.getElementById("date").value = "";

    } else {
       alert("please select location and date!")
    } 
   
})

//booking done