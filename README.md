# 📘 Material UI (MUI)

## 🌟 What is Material UI (MUI)?

**Material UI (MUI)** is a popular **React component library** that implements **Google's Material Design**.  
It provides **pre-built, customizable, and responsive components** to build modern web interfaces quickly.

---

## 💡 Why Use Material UI?

✅ **Ready-to-use components** – Buttons, Cards, AppBars, Modals, etc.  
✅ **Fast development** – Reduces UI building time drastically.  
✅ **Beautiful design** – Follows Google's Material Design system.  
✅ **Customizable themes** – Easily switch colors, typography, and styles.  
✅ **Responsive layout** – Works seamlessly on mobile, tablet, and desktop.  
✅ **Dark/Light mode support** built-in.  
✅ **Accessibility** – Components follow WCAG guidelines.  
✅ **Great documentation** – Comprehensive guides and examples.

---

## ⚙️ Installation & Setup

### Basic Installation
```bash
# Install core MUI packages
npm install @mui/material @emotion/react @emotion/styled

# Install MUI icons (optional but recommended)
npm install @mui/icons-material

# For projects without React 18+ (if needed)
npm install @mui/system
```

### Alternative Installation (Styled Components)
```bash
# If you prefer styled-components over Emotion
npm install @mui/material @mui/styled-engine-sc styled-components
```

### CDN Installation (Quick Start)
```html
<!-- Add in HTML head -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

---

## 🚀 Quick Start Guide

### 1. Basic App Setup
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### 2. Basic Component Example
```jsx
import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Material UI
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Box>
    </Container>
  );
}

export default App;
```

---

## 🧩 Core Components

### 1. Typography
```jsx
import { Typography } from '@mui/material';

<Typography variant="h1" gutterBottom>
  h1. Heading
</Typography>
<Typography variant="h2" gutterBottom>
  h2. Heading
</Typography>
<Typography variant="body1" gutterBottom>
  body1. Lorem ipsum dolor sit amet.
</Typography>
<Typography variant="body2" gutterBottom>
  body2. Lorem ipsum dolor sit amet.
</Typography>
```

### 2. Buttons
```jsx
import { Button, ButtonGroup, Stack } from '@mui/material';

<Stack direction="row" spacing={2}>
  <Button variant="text">Text</Button>
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
</Stack>

<ButtonGroup variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

### 3. TextField & Forms
```jsx
import { TextField, Box, Stack } from '@mui/material';

<Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
  <TextField label="Outlined" variant="outlined" />
  <TextField label="Filled" variant="filled" />
  <TextField label="Standard" variant="standard" />
</Box>

{/* Form with validation */}
<Stack spacing={2}>
  <TextField
    required
    id="email"
    label="Email"
    type="email"
    helperText="Enter your email"
  />
  <TextField
    required
    id="password"
    label="Password"
    type="password"
    error
    helperText="Incorrect entry"
  />
</Stack>
```

### 4. Layout Components
```jsx
import { Box, Container, Grid, Paper, Stack } from '@mui/material';

{/* Box - The ultimate layout component */}
<Box 
  sx={{ 
    p: 2, 
    border: '1px solid grey',
    backgroundColor: 'primary.main',
    color: 'white'
  }}
>
  Content
</Box>

{/* Grid System */}
<Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={4}>
    <Paper sx={{ p: 2 }}>Item 1</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Paper sx={{ p: 2 }}>Item 2</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Paper sx={{ p: 2 }}>Item 3</Paper>
  </Grid>
</Grid>

{/* Stack for quick layouts */}
<Stack direction="row" spacing={2}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Stack>
```

### 5. Navigation Components
```jsx
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

{/* App Bar */}
<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
```

### 6. Feedback Components
```jsx
import { Alert, Snackbar, CircularProgress, LinearProgress } from '@mui/material';

{/* Alert */}
<Alert severity="error">This is an error alert!</Alert>
<Alert severity="warning">This is a warning alert!</Alert>
<Alert severity="info">This is an info alert!</Alert>
<Alert severity="success">This is a success alert!</Alert>

{/* Progress Indicators */}
<CircularProgress />
<LinearProgress />

{/* Snackbar */}
<Snackbar open={true} autoHideDuration={6000} message="Note archived" />
```

---

## 🎨 Styling & Theming

### 1. Using sx Prop (Recommended)
```jsx
import { Box, Button } from '@mui/material';

<Box
  sx={{
    p: 2,
    border: '1px solid grey',
    borderRadius: 2,
    backgroundColor: 'background.paper',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'white',
    },
  }}
>
  Hover over me
</Box>

<Button
  sx={{
    margin: 2,
    padding: 1,
    backgroundColor: 'secondary.main',
    '&:hover': {
      backgroundColor: 'secondary.dark',
    },
  }}
>
  Custom Button
</Button>
```

### 2. Using styled() API
```jsx
import { styled } from '@mui/material/styles';
import { Button, Paper } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
```

### 3. Creating Custom Theme
```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
  spacing: 8, // 8px base unit
  shape: {
    borderRadius: 8,
  },
});

// Apply theme
<ThemeProvider theme={theme}>
  <YourApp />
</ThemeProvider>
```

### 4. Dark Mode Theme
```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <YourContent />
    </ThemeProvider>
  );
}
```

---

## 🧭 Advanced Components

### 1. Data Display
```jsx
import { Card, CardContent, CardActions, Avatar, Chip } from '@mui/material';

{/* Card Component */}
<Card sx={{ maxWidth: 345 }}>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>

{/* Avatar */}
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

{/* Chips */}
<Chip label="Clickable" onClick={() => {}} />
<Chip label="Deletable" onDelete={() => {}} />
```

### 2. Navigation Components
```jsx
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

{/* Drawer */}
<Drawer variant="permanent" anchor="left">
  <List>
    <ListItem button>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="About" />
    </ListItem>
  </List>
</Drawer>
```

### 3. Feedback Components
```jsx
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

{/* Dialog */}
<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>
    <Typography>Dialog content here...</Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleClose}>Save</Button>
  </DialogActions>
</Dialog>
```

---

## 🔧 Utility Components & Hooks

### 1. useTheme Hook
```jsx
import { useTheme } from '@mui/material/styles';

function ThemedComponent() {
  const theme = useTheme();
  
  return (
    <div style={{ color: theme.palette.primary.main }}>
      This text uses the theme's primary color
    </div>
  );
}
```

### 2. useMediaQuery Hook
```jsx
import { useMediaQuery } from '@mui/material';

function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <div>
      {isMobile ? 'Mobile View' : 'Desktop View'}
    </div>
  );
}
```

### 3. Breakpoints
```jsx
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function BreakpointComponent() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  
  return (
    <div>
      Current breakpoint: {isMd ? 'md+' : isSm ? 'sm' : 'xs'}
    </div>
  );
}
```

---

## 📱 Responsive Design

### 1. Responsive Grid
```jsx
import { Grid, Paper } from '@mui/material';

<Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper sx={{ p: 2 }}>Responsive Item</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper sx={{ p: 2 }}>Responsive Item</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper sx={{ p: 2 }}>Responsive Item</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper sx={{ p: 2 }}>Responsive Item</Paper>
  </Grid>
</Grid>
```

### 2. Responsive Typography
```jsx
<Typography 
  variant="h3"
  sx={{
    fontSize: {
      xs: '1.5rem',  // mobile
      sm: '2rem',    // tablet
      md: '2.5rem',  // desktop
      lg: '3rem',    // large desktop
    }
  }}
>
  Responsive Heading
</Typography>
```

### 3. Hidden Component (Legacy - Use sx instead)
```jsx
<Box
  sx={{
    display: { xs: 'none', sm: 'block' } // Hidden on mobile, visible on sm+
  }}
>
  This content is hidden on mobile
</Box>
```

---

## 🎯 Best Practices

### 1. Component Organization
```jsx
// Good: Organized imports
import React from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Good: Use theme for consistent spacing
<Box sx={{ p: theme => theme.spacing(2) }}>
  Content
</Box>

// Good: Responsive design with breakpoints
<Box sx={{ 
  padding: { xs: 1, sm: 2, md: 3 },
  margin: { xs: 1, sm: 2 }
}}>
  Content
</Box>
```

### 2. Performance Tips
```jsx
// Bad: Inline objects in sx prop (creates new object every render)
<Box sx={{ color: 'red', padding: 2 }}>

// Good: Use useMemo for complex styles or define outside component
const styles = {
  box: {
    color: 'red',
    padding: 2,
  },
};

<Box sx={styles.box}>
```

### 3. Accessibility
```jsx
// Always provide labels and alt text
<Button aria-label="Add to cart">
  <AddShoppingCartIcon />
</Button>

<Avatar alt="User profile picture" src="/path/to/image.jpg" />

// Use proper semantic elements
<Typography variant="h1" component="h1">
  Page Title
</Typography>
```

---

## 🐛 Common Issues & Solutions

### 1. Styling Conflicts
```jsx
// Issue: Custom styles not applying
// Solution: Use !important or increase specificity
const StyledComponent = styled(Button)({
  '&&': { // Double ampersand increases specificity
    backgroundColor: 'red',
  }
});
```

### 2. Theme Not Applying
```jsx
// Make sure ThemeProvider wraps your app
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset CSS and apply theme */}
      <YourComponents />
    </ThemeProvider>
  );
}
```

### 3. TypeScript Issues
```typescript
// For TypeScript projects, extend theme
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
```

---

## 📚 Additional Resources

- 📖 [Official MUI Documentation](https://mui.com/)
- 🎨 [MUI Theme Builder](https://mui.com/material-ui/customization/default-theme/)
- 🚀 [MUI Templates](https://mui.com/material-ui/getting-started/templates/)
- ⚡ [MUI GitHub](https://github.com/mui/material-ui)
- 💬 [MUI Community](https://mui.com/material-ui/getting-started/community/)

---


**Happy Coding!** 🎉
