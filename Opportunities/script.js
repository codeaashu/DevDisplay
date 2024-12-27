fetch('http://https://opportunities-features.onrender.com/api/opportunities')
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
        populateCategoryDropdown(); // Populate categories dynamically
        renderOpportunities(opportunities);
    })
    .catch(error => {
        console.error('Error loading opportunities:', error);
        alert('Something went wrong. Please try again later.');
    });
function renderOpportunities(data) {
    const container = document.getElementById('opportunity-container');
    container.innerHTML = ''; // Clear previous content
    const approvedOpportunities = data.filter(opportunity => opportunity.status === 'approved');
    approvedOpportunities.forEach(opportunity => {
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
function filterByCategory(category) {
    let filteredOpportunities;
    if (category === 'All') {
        filteredOpportunities = opportunities; // Show all opportunities
    } else {
        filteredOpportunities = opportunities.filter(opportunity => opportunity.category === category);
    }
    renderOpportunities(filteredOpportunities);
}
function filterByCategoryDropdown() {
    const category = document.getElementById('category-select').value;
    filterByCategory(category);
}
function populateCategoryDropdown() {
    const categorySelect = document.getElementById('category-select');
    const categoryCounts = {};

    // Count occurrences of each category
    opportunities.forEach(opportunity => {
        categoryCounts[opportunity.category] = (categoryCounts[opportunity.category] || 0) + 1;
    });

    // Create options for categories
    const categories = ['All', ...Object.keys(categoryCounts)];
    categorySelect.innerHTML = ''; // Clear existing options

    categories.forEach(category => {
        const count = category === 'All' ? opportunities.length : categoryCounts[category];
        const option = document.createElement('option');
        option.value = category;
        option.textContent = `${category} (${count})`;
        categorySelect.appendChild(option);
    });
}
document.getElementById('opportunity-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const category = document.getElementById('category').value;
    const tags = document.getElementById('tags').value.split(',').map(tag => tag.trim());
    const applyLink = document.getElementById('applyLink').value;
    

    // Create a new opportunity object
    const newOpportunity = {
        id:Date.now(),
        title,
        company,
        category,
        tags,
        applyLink,
        status:'pending'
    };

    // Sending it to the backend server
    fetch('http://https://opportunities-features.onrender.com/api/opportunities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOpportunity)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to submit opportunity');
            }
        })
        .then(data => {
            console.log(data.message);
            document.getElementById('submission-success').style.display = 'block';
            document.getElementById('opportunity-form').reset();

            // Hide success message after 3 seconds
            setTimeout(() => {
                document.getElementById('submission-success').style.display = 'none';
            }, 3000);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Something went wrong. Please try again later.');
    });
    renderOpportunities(opportunities); // Re-render opportunities
});
fetch('http://https://opportunities-features.onrender.com/api/opportunities/pending')
    .then(response => response.json())
    .then(data => {
        const adminContainer = document.getElementById('pending-opportunities');
        adminContainer.innerHTML = '';

        data.forEach(opportunity => {
            const card = document.createElement('div');
            card.classList.add('admin-card');
            card.innerHTML = `
                <h4>${opportunity.title}</h4>
                <p>Company: ${opportunity.company}</p>
                <p>Tags: ${opportunity.tags.join(', ')}</p>
                <div class="admin-buttons">
                    <button class="approve" onclick="moderateOpportunity(${opportunity.id}, 'approved')">Approve</button>
                    <button class="reject" onclick="moderateOpportunity(${opportunity.id}, 'rejected')">Reject</button>
                </div>
            `;

            adminContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching pending opportunities:', error);
        alert('Something went wrong. Please try again later.');
    });

// Moderate an opportunity
function moderateOpportunity(id, status) {
    fetch(`http://https://opportunities-features.onrender.com/api/opportunities/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to update opportunity.');
            }
        })
        .then(data => {
            console.log(data.message);
            alert(`Opportunity ${status} successfully!`);
            renderOpportunities(opportunities);
            // Refresh pending opportunities
            location.reload();
        })
        .catch(error => {
            console.error('Error moderating opportunity:', error)
            alert('Something went wrong. Please try again later.');
    });
}