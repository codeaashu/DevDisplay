let opportunities = []; // To store fetched opportunities
// Fetch opportunities from the JSON file and render them dynamically
fetch('opportunities.json')
    .then(response => response.json())
    .then(data => {
        opportunities = data; // Save data for filtering
        const container = document.getElementById('opportunity-container');
        
        data.forEach(opportunity => {
            const card = document.createElement('div');
            card.classList.add('opportunity-card');
            
            card.innerHTML = `
                <h4>${opportunity.title}</h4>
                <p>Company: ${opportunity.company}</p>
                <p>Tags: ${opportunity.tags.join(', ')}</p>
                <button onclick="window.location.href='${opportunity.applyLink}'">Apply Now</button>
            `;
            
            container.appendChild(card);
        });
        renderOpportunities(opportunities);
    })
    .catch(error => console.error('Error loading opportunities:', error));
function renderOpportunities(data) {
    const container = document.getElementById('opportunity-container');
    container.innerHTML = ''; // Clear previous content

    data.forEach(opportunity => {
        const card = document.createElement('div');
        card.classList.add('opportunity-card');
        
        card.innerHTML = `
            <h4>${opportunity.title}</h4>
            <p>Company: ${opportunity.company}</p>
            <p>Tags: ${opportunity.tags.join(', ')}</p>
            <button onclick="window.location.href='${opportunity.applyLink}'">Apply Now</button>
        `;
        
        container.appendChild(card);
    });
}
document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = opportunities.filter(opportunity => 
        opportunity.title.toLowerCase().includes(query) ||
        opportunity.company.toLowerCase().includes(query) ||
        opportunity.tags.some(tag => tag.toLowerCase().includes(query))
    );

    renderOpportunities(filtered);
});