// Mobile Menu Toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get the container for tools
    const toolsContainer = document.getElementById('tools');
    
    // Clear existing content
    toolsContainer.querySelector('.grid').innerHTML = '';
    
    // Render each etiquette tip
    chatEtiquetteTips.forEach((tip, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded-lg shadow my-4';
        
        const title = document.createElement('h3');
        title.className = 'text-lg font-bold text-gray-800';
        title.textContent = `${index + 1}. ${tip.title}`;
        
        const example = document.createElement('blockquote');
        example.className = 'text-sm bg-gray-100 p-2 my-2 border-r-4 border-blue-400';
        example.textContent = tip.example;
        
        const explanation = document.createElement('p');
        explanation.className = 'text-sm text-gray-700';
        explanation.textContent = tip.explanation;
        
        card.appendChild(title);
        card.appendChild(example);
        card.appendChild(explanation);
        
        toolsContainer.querySelector('.grid').appendChild(card);
    });
}); 