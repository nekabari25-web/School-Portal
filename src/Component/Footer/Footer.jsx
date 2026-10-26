import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../assets/school-logo.png';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/FeaturesPage' },
  { name: 'FAQs', path: '/FAQs' },
  { name: 'Contact us', path: '/ContactUs' },
  { name: 'Login', path: '/Login' },
  { name: 'Sign up', path: '/Registration' },
];

const emailAddresses = [
  'danielgeteera1@gmail.com',
  'ukapeace84@gmail.com',
  'emmanuelchibunna1234@gmail.com',
  'michaelelder911@gmail.com',
  'akpalokejahswill@gmail.com',
  'ozzygert@gmail.com',
];

const phoneNumbers = [
  '+234 906 522 8801',
  '+234 803 365 6963',
  '+234 816 507 8533',
  '+234 703 236 3108',
  '+234 816 326 0726',
  '+234 803 930 5996',
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        px: { xs: 2.5, sm: 3 },
        color: '#fff',
        backgroundColor: '#1c322b',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.7fr 0.7fr' },
            gap: { xs: 4, md: 6 },
            py: { xs: 4, sm: 5 },
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                component="img"
                src={Logo}
                alt=""
                sx={{ width: 90, height: 48, objectFit: 'contain' }}
              />
              <Typography sx={{ color: '#fff', fontWeight: 700 }}>
                School Portal
              </Typography>
            </Box>
            <Typography
              component="p"
              sx={{
                maxWidth: 360,
                mt: 2,
                mb: 0,
                color: '#d5e2da',
                fontSize: '0.9rem',
                lineHeight: 1.8,
              }}
            >
              A convenient place for school communities to manage learning,
              information, and communication.
            </Typography>
          </Box>

          <Box>
            <Typography
              component="h2"
              sx={{ mb: 2, color: '#fff', fontSize: '1rem', fontWeight: 700 }}
            >
              Get in touch
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: { xs: 2.5, sm: 2 },
              }}
            >
              <Box>
                <Typography
                  component="h3"
                  sx={{ mb: 1.5, color: '#b9c9c0', fontSize: '0.82rem', fontWeight: 700 }}
                >
                  Email
                </Typography>
                <Box sx={{ display: 'grid', gap: 1.25 }}>
                  {emailAddresses.map((email) => (
                    <Link
                      key={email}
                      href={`mailto:${email}`}
                      underline="hover"
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1,
                        color: '#d5e2da',
                        fontSize: '0.85rem',
                        overflowWrap: 'anywhere',
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      <EmailOutlinedIcon
                        fontSize="small"
                        aria-hidden="true"
                        sx={{ flexShrink: 0 }}
                      />
                      <span>{email}</span>
                    </Link>
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography
                  component="h3"
                  sx={{ mb: 1.5, color: '#b9c9c0', fontSize: '0.82rem', fontWeight: 700 }}
                >
                  Phone
                </Typography>
                <Box sx={{ display: 'grid', gap: 1.25 }}>
                  {phoneNumbers.map((phone) => (
                    <Link
                      key={phone}
                      href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                      underline="hover"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: '#d5e2da',
                        fontSize: '0.85rem',
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      <PhoneOutlinedIcon fontSize="small" aria-hidden="true" />
                      <span>{phone}</span>
                    </Link>
                  ))}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#d5e2da',
                      fontSize: '0.85rem',
                    }}
                  >
                    <AlternateEmailIcon fontSize="small" aria-hidden="true" />
                    <span>Geteera Daniel</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography
              component="h2"
              sx={{ mb: 2, color: '#fff', fontSize: '1rem', fontWeight: 700 }}
            >
              Quick links
            </Typography>
            <Box
              component="nav"
              aria-label="Footer navigation"
              sx={{ display: 'block', gap: 1.5 }}
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  underline="hover"
                  sx={{
                    display: 'block',
                    mb: 1.5,
                    color: '#d5e2da',
                    fontSize: '0.9rem',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.16)' }} />

        <Typography
          component="p"
          sx={{
            m: 0,
            py: 2.5,
            color: '#b9c9c0',
            fontSize: '0.85rem',
            textAlign: { xs: 'left', sm: 'center' },
          }}
        >
          © {new Date().getFullYear()} School Portal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
