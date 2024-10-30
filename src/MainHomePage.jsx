import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  ThemeProvider,
  CssBaseline,
  createTheme,
  IconButton,
} from '@mui/material';
import {
  AddRoad as WorkIcon,
  Code as LibraryBooksIcon,
  Public as BuildIcon,
  Laptop as ForumIcon,
  Group as LightbulbIcon,
  CollectionsBookmark as CollectionsIcon,
  Description as DescriptionIcon,
  ThumbUp as ThumbUpIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const features = [
  { title: 'Opportunities', description: 'Discover career-enhancing opportunities in tech', icon: <WorkIcon /> },
  { title: 'Tech Resources', description: 'Access curated learning tools and guides', icon: <LibraryBooksIcon /> },
  { title: 'Projects', description: 'Work on real-world projects and build your skills', icon: <BuildIcon /> },
  { title: 'Idea Submission', description: 'Share innovative ideas and receive feedback', icon: <LightbulbIcon /> },
  { title: 'Discussions', description: 'Join vibrant discussions on tech trends', icon: <ForumIcon /> },
  { title: 'Portfolio Builder', description: 'Create a professional portfolio with ease', icon: <CollectionsIcon /> },
  { title: 'Resume Builder', description: 'Craft a standout resume to impress recruiters', icon: <DescriptionIcon /> },
];

const trendingProjects = [
  {
    title: 'AI-Powered Chat Bot',
    summary: 'An intelligent chatbot using the latest NLP techniques',
    upvotes: 1234,
    image: require('./images/AI-Powered.jpeg'),
  },
  {
    title: 'Blockchain Voting System',
    summary: 'Secure and transparent voting using blockchain technology',
    upvotes: 987,
    image: require('./images/Blockchain_voting.jpg'),
  },
  {
    title: 'AR Navigation App',
    summary: 'Augmented reality app for intuitive city navigation',
    upvotes: 756,
    image: require('./images/AR_Navigation.jpg'),
  },
];

const MainHomePage = () => {
  const navigate = useNavigate();

  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeMode));
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: { main: themeMode === 'dark' ? '#4A90E2' : '#2979ff' },
      secondary: { main: '#d500f9' },
      background: {
        default: themeMode === 'dark' ? '#1c1c1c' : '#f4f6f9',
      },
      text: {
        primary: themeMode === 'dark' ? '#FFFFFF' : '#333333',
      },
    },
    typography: {
      fontFamily: 'Montserrat, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ py: 1, boxShadow: 4 }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FontAwesomeIcon icon={faCode} size="2x" color={themeMode === 'light' ? '#000000' : '#FFFFFF'} />
            </motion.div>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: 'bold', color: themeMode === 'light' ? '#000000' : '#FFFFFF' }}
            >
              DevDisplay
            </Typography>
          </Box>
          <IconButton color="inherit" onClick={toggleTheme}>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: themeMode === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {themeMode === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </motion.div>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          background:
            themeMode === 'dark'
              ? 'radial-gradient(circle, #243b55, #141e30)'
              : 'radial-gradient(circle, #c9d6ff, #e2e2e2)',
          py: 10,
          textAlign: 'center',
          color: themeMode === 'dark' ? '#FFFFFF' : '#000000',
        }}
      >
        <Container maxWidth="sm">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to DevDisplay
            </Typography>
            <Typography variant="h5" component="p" paragraph>
              Empowering innovators to showcase, collaborate, and push the boundaries of technology
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ borderRadius: 4, mt: 4, px: 5 }}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
            >
              Get Started
            </Button>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 150 }}>
                <Card
                  sx={{
                    boxShadow: 5,
                    p: 3,
                    borderRadius: 3,
                    transition: 'transform 0.3s ease',
                    bgcolor: themeMode === 'dark' ? '#243b55' : '#fff',
                    color: themeMode === 'dark' ? '#cfd8dc' : '#333',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2, fontSize: 40 }}>{feature.icon}</Box>
                    <Typography variant="h5" component="div" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Trending Projects
        </Typography>
        <Grid container spacing={4}>
          {trendingProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 150 }}>
                <Card
                  sx={{
                    boxShadow: 5,
                    borderRadius: 3,
                    bgcolor: themeMode === 'dark' ? '#1e293b' : '#ffffff',
                    color: themeMode === 'dark' ? '#ffffff' : '#333',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.summary}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <ThumbUpIcon color="primary" />
                      <Typography variant="body2">{project.upvotes}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default MainHomePage;
