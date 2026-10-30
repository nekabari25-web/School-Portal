import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../assets/school-logo.png';
import classroomImage from '../../assets/courtTeacher.jpg';

const AuthLayout = ({ children, footer, subtitle, title }) => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.05fr) minmax(440px, 0.95fr)' },
      backgroundColor: '#fff',
    }}
  >
    <Box
      sx={{
        position: 'relative',
        display: { xs: 'none', md: 'flex' },
        minHeight: '100vh',
        alignItems: 'flex-end',
        overflow: 'hidden',
        p: { md: 6, lg: 9 },
        color: '#fff',
        backgroundImage: `linear-gradient(180deg, rgba(17, 53, 39, 0.15) 0%, rgba(17, 53, 39, 0.88) 100%), url(${classroomImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 38,
          left: { md: 48, lg: 72 },
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          borderRadius: 3,
          px: 1.5,
          py: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="School Portal"
          sx={{ width: 124, height: 48, objectFit: 'contain' }}
        />
      </Box>

      <Box sx={{ position: 'relative', maxWidth: 590 }}>
        <Typography
          component="p"
          sx={{
            mb: 2,
            color: '#d4eddd',
            fontSize: '0.76rem',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          A better-connected school day
        </Typography>
        <Typography
          component="h2"
          sx={{
            m: 0,
            fontSize: { md: '3rem', lg: '3.7rem' },
            fontWeight: 750,
            lineHeight: 1.06,
            letterSpacing: '-0.05em',
          }}
        >
          One portal. Your whole school community.
        </Typography>
        <Typography
          component="p"
          sx={{ maxWidth: 500, mt: 2.5, mb: 0, color: 'rgba(255,255,255,0.86)', lineHeight: 1.8 }}
        >
          Keep the people, information, and everyday work of your school connected.
        </Typography>
      </Box>
    </Box>

    <Box
      component="main"
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 2.5, sm: 4, lg: 7 },
        py: { xs: 3, md: 5 },
      }}
    >
      <Container maxWidth="sm" disableGutters>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 5, md: 7 } }}>
          <Button
            component={RouterLink}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{
              px: 0,
              color: '#60736b',
              fontWeight: 700,
              textTransform: 'none',
              '&:hover': { backgroundColor: 'transparent', color: '#34745a' },
            }}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to={footer.to}
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 0,
              color: '#34745a',
              fontWeight: 750,
              textTransform: 'none',
              '&:hover': { backgroundColor: 'transparent', color: '#285a45' },
            }}
          >
            {footer.prompt}
          </Button>
        </Box>

        <Box sx={{ maxWidth: 470, mx: 'auto' }}>
          <Box
            component="img"
            src={Logo}
            alt="School Portal"
            sx={{ display: { xs: 'block', md: 'none' }, width: 140, height: 55, mb: 4, objectFit: 'contain' }}
          />
          <Typography
            component="p"
            sx={{
              mb: 1.4,
              color: '#34745a',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Welcome to School Portal
          </Typography>
          <Typography
            component="h1"
            sx={{
              m: 0,
              color: '#1c322b',
              fontSize: { xs: '2.25rem', sm: '2.8rem' },
              fontWeight: 750,
              lineHeight: 1.08,
              letterSpacing: '-0.05em',
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{ mt: 1.5, mb: 0, color: '#60736b', fontSize: '0.98rem', lineHeight: 1.75 }}
          >
            {subtitle}
          </Typography>
          <Box sx={{ mt: 3.5 }}>{children}</Box>
        </Box>
      </Container>
    </Box>
  </Box>
);

export default AuthLayout;
