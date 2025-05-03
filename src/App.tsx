import { useState } from 'react';
import { Container, Typography, Box, Button, TextField, Select, MenuItem, FormControl, InputLabel, Paper } from '@mui/material';
import { format } from 'date-fns';
import { Incident, Severity, mockIncidents } from './types/incident';

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filter, setFilter] = useState<Severity | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [expandedIncident, setExpandedIncident] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newIncident, setNewIncident] = useState({
    title: '',
    description: '',
    severity: 'Medium' as Severity,
  });

  const filteredIncidents = incidents
    .filter(incident => filter === 'All' || incident.severity === filter)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIncident.title || !newIncident.description) return;

    const incident: Incident = {
      id: String(incidents.length + 1),
      ...newIncident,
      date: new Date().toISOString(),
      status: 'Open',
      impact: '',
      mitigation: '',
      tags: [],
    };

    setIncidents([...incidents, incident]);
    setNewIncident({ title: '', description: '', severity: 'Medium' });
    setShowForm(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, gap: 2 }}>
          <Box
            component="div"
            sx={{
              width: 50,
              height: 50,
              borderRadius: '12px',
              bgcolor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(74, 237, 136, 0.2)',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'background.default',
                fontWeight: 'bold',
                lineHeight: 1,
              }}
            >
              AI
            </Typography>
          </Box>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 600,
              background: 'linear-gradient(45deg, #4aed88 30%, #007BFF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AI Safety Monitor
          </Typography>
        </Box>

        <Paper sx={{ p: 3, mb: 4, bgcolor: 'background.paper' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Filter by Severity</InputLabel>
                <Select
                  value={filter}
                  label="Filter by Severity"
                  onChange={(e) => setFilter(e.target.value as Severity | 'All')}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Sort by Date</InputLabel>
                <Select
                  value={sortOrder}
                  label="Sort by Date"
                  onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
                >
                  <MenuItem value="newest">Newest First</MenuItem>
                  <MenuItem value="oldest">Oldest First</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Button
              variant="contained"
              onClick={() => setShowForm(!showForm)}
              sx={{ 
                minWidth: 200,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              {showForm ? 'Cancel' : 'Report New Incident'}
            </Button>
          </Box>

          {showForm && (
            <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>Report New Incident</Typography>
              <TextField
                fullWidth
                label="Title"
                value={newIncident.title}
                onChange={(e) => setNewIncident({ ...newIncident, title: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Description"
                value={newIncident.description}
                onChange={(e) => setNewIncident({ ...newIncident, description: e.target.value })}
                margin="normal"
                multiline
                rows={4}
                required
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Severity</InputLabel>
                <Select
                  value={newIncident.severity}
                  label="Severity"
                  onChange={(e) => setNewIncident({ ...newIncident, severity: e.target.value as Severity })}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
              <Button 
                type="submit" 
                variant="contained" 
                sx={{ 
                  mt: 2,
                  width: '100%',
                  bgcolor: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Submit Incident
              </Button>
            </Box>
          )}
        </Paper>

        {filteredIncidents.map((incident) => (
          <Paper
            key={incident.id}
            sx={{
              mb: 2,
              p: 3,
              bgcolor: 'background.paper',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="h6" sx={{ color: 'text.primary' }}>{incident.title}</Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Typography
                  sx={{
                    color: incident.severity === 'High' ? 'error.main' :
                          incident.severity === 'Medium' ? 'warning.main' : 'success.main',
                    fontWeight: 'bold',
                  }}
                >
                  {incident.severity}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {format(new Date(incident.date), 'MMM d, yyyy')}
                </Typography>
                <Button
                  size="small"
                  onClick={() => setExpandedIncident(expandedIncident === incident.id ? null : incident.id)}
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'secondary.dark',
                    },
                  }}
                >
                  {expandedIncident === incident.id ? 'Hide Details' : 'View Details'}
                </Button>
              </Box>
            </Box>
            {expandedIncident === incident.id && (
              <Typography sx={{ mt: 2, color: 'text.secondary' }}>{incident.description}</Typography>
            )}
          </Paper>
        ))}
      </Container>
    </Box>
  );
}

export default App;
