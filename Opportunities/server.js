const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load opportunities from a JSON file
const DATA_FILE = './opportunities.json';

// Endpoint to fetch opportunities
app.get('/api/opportunities', (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to load opportunities.' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});
app.get('/api/opportunities/pending', (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to load opportunities.' });
        } else {
            const opportunities = JSON.parse(data);
            const pending = opportunities.filter(opportunity => opportunity.status === 'pending');
            res.json(pending);
        }
    });
});

// Endpoint to submit a new opportunity
app.post('/api/opportunities', (req, res) => {
    const newOpportunity = req.body;

    // Validate the submission
    if (!newOpportunity.title || !newOpportunity.company || !newOpportunity.applyLink) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to save opportunity.' });
        } else {
            const opportunities = JSON.parse(data);
            opportunities.push(newOpportunity);

            fs.writeFile(DATA_FILE, JSON.stringify(opportunities, null, 2), (err) => {
                if (err) {
                    res.status(500).json({ error: 'Failed to save opportunity.' });
                } else {
                    res.status(201).json({ message: 'Opportunity added successfully.' });
                }
            });
        }
    });
});
app.patch('/api/opportunities/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to update opportunity.' });
        } else {
            let opportunities = JSON.parse(data);
            const index = opportunities.findIndex(opportunity => opportunity.id === parseInt(id, 10));

            if (index === -1) {
                return res.status(404).json({ error: 'Opportunity not found.' });
            }

            if (status === 'approved') {
                opportunities[index].status = 'approved';
            } else if (status === 'rejected') {
                opportunities.splice(index, 1); // Remove the rejected opportunity
            }

            fs.writeFile(DATA_FILE, JSON.stringify(opportunities, null, 2), (err) => {
                if (err) {
                    res.status(500).json({ error: 'Failed to update opportunity.' });
                } else {
                    res.json({ message: 'Opportunity updated successfully.' });
                }
            });
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
