import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Import Link component for routing
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Logo from '../../assets/school-logo.png';

// Fixed the syntax error by turning it into a proper array of objects
const pages = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/Aboutus' },
  { name: 'School', path: '/School' },
  { name: 'Features', path: '/FeaturesPage' },
  { name: 'FAQs', path: '/FAQs' },
  { name: 'Contact us', path: '/ContactUs' },
];

const accountLinks = [
  { name: 'Login', path: '/Login' },
  { name: 'Sign up', path: '/Registration' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        maxHeight: '12vh',
        backgroundColor: '#34745a',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.path} 
                  onClick={handleCloseNavMenu}
                  component={RouterLink} // Links mobile menu to React Router
                  to={page.path}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
              <Divider />
              {accountLinks.map((link) => (
                <MenuItem
                  key={link.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={link.path}
                >
                  <Typography sx={{ textAlign: 'center' }}>{link.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component={RouterLink}
            to="/"
            aria-label="Home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 1,
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="School Portal"
              sx={{ display: 'block', width: 120, height: 56, objectFit: 'contain' }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, ml: { md: 10 }, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={handleCloseNavMenu}
                component={RouterLink} // Links desktop buttons to React Router
                to={page.path}
                sx={{ my: 2, ml: 2, color: '#fff', display: 'block', fontSize: '18px', ":hover": { backgroundColor: '#cfcccc', color: '#064e04' } }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {accountLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                color="inherit"
                variant={link.name === 'Sign up' ? 'contained' : 'text'}
                sx={{
                  whiteSpace: 'nowrap',
                  ...(link.name === 'Sign up' && {
                    backgroundColor: '#256b22',
                    '&:hover': { backgroundColor: '#1d561a' },
                  }),
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar