// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('whyModal');
    const openButtons = [document.getElementById('whyModalBtn'), document.getElementById('whyModalBtnMobile')];
    const closeButton = document.getElementById('closeModal');

    // Function to open modal
    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    // Function to close modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Open modal when clicking the buttons
    openButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        }
    });

    // Close modal when clicking the close button
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal when pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}); 