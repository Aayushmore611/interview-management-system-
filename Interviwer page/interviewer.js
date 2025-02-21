document.addEventListener("DOMContentLoaded", () => {
    // Get modal elements
    const modal = document.getElementById("bookingModal");
    const closeModalBtn = document.querySelector(".close");
    const bookingForm = document.getElementById("bookingForm");

    // Open modal function
    window.openModal = function () {
        modal.style.display = "flex";
    };

    // Close modal function
    window.closeModal = function () {
        modal.style.display = "none";
    };

    // Close modal when clicking outside the content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Handle form submission
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        
        // Close the modal
        closeModal();

        // Show notification
        showNotification("Your interview application has been submitted successfully!");
        
        // Reset form fields
        bookingForm.reset();
    });
});

// Function to show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;

    // Append notification to body
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
