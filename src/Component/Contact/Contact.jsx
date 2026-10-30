import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Contact = () => {
  return (
    <Box
      component="section"
      id="contact"
      aria-labelledby="contact-title"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, sm: 3 },
        backgroundColor: '#f8faf7',
      }}
    >
      <Container maxWidth="sm" disableGutters>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            component="p"
            sx={{
              mb: 1.5,
              color: '#34745a',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Contact us
          </Typography>
          <Typography
            id="contact-title"
            component="h2"
            sx={{
              m: 0,
              color: '#1c322b',
              fontSize: { xs: '2.25rem', sm: '3rem' },
              fontWeight: 750,
              lineHeight: 1.1,
              letterSpacing: '-0.05em',
            }}
          >
            How can we help?
          </Typography>
          <Typography sx={{ mt: 2, color: '#60736b', lineHeight: 1.8 }}>
            Send us a message and our team will get back to you.
          </Typography>
        </Box>

        <Paper
          component="form"
          elevation={0}
          onSubmit={(event) => event.preventDefault()}
          sx={{
            display: 'grid',
            gap: 2,
            p: { xs: 2.5, sm: 4 },
            border: '1px solid #e6ece7',
            borderRadius: 3,
            backgroundColor: '#fff',
          }}
        >
          <TextField
            label="Name"
            name="name"
            autoComplete="name"
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            required
            fullWidth
            multiline
            minRows={4}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              justifySelf: 'start',
              px: 3,
              py: 1.1,
              backgroundColor: '#34745a',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#285a45' },
            }}
          >
            Send message
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
