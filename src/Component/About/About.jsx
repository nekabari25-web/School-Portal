import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import emptyClassImage from '../../assets/EmptyClass.jpg';

const capabilities = [
  {
    number: '01',
    title: 'Attendance',
    description: 'Keep daily attendance organized across classes.',
  },
  {
    number: '02',
    title: 'Assessments & results',
    description: 'Support assessment tracking and result workflows.',
  },
  {
    number: '03',
    title: 'Timetables',
    description: 'Make schedules easier for the school community to follow.',
  },
  {
    number: '04',
    title: 'Class communication',
    description: 'Keep classroom updates connected to the right people.',
  },
  {
    number: '05',
    title: 'School fee payments',
    description: 'Offer families card and bank transfer payment options.',
  },
];

const About = () => (
  <Box
    component="section"
    id="about"
    aria-labelledby="about-title"
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 2.5, sm: 3 },
      color: '#256b22',
      scrollMarginTop: '88px',
      background:
        'radial-gradient(ellipse at 95% 5%, rgba(220, 237, 224, 0.72), transparent 36%), #f8faf7',
    }}
  >
    <Container maxWidth="lg" disableGutters>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.1fr) minmax(300px, 0.75fr)' },
          alignItems: 'center',
          gap: { xs: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            p: { xs: 2.5, sm: 4 },
            borderRadius: 4,
            backgroundImage: `linear-gradient(90deg, rgba(109, 117, 105, 0.16), rgba(199, 212, 192, 0.23)), url(${emptyClassImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <Typography
            component="p"
            sx={{
              mb: 1.9,
              color: '#fcfffe',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            About the portal
          </Typography>
          <Typography
            id="about-title"
            component="h2"
            sx={{
              maxWidth: 650,
              m: 0,
              fontSize: { xs: '2.5rem', sm: '3.25rem', md: '4.25rem' },
              fontWeight: 750,
              lineHeight: 1.04,
              letterSpacing: '-0.055em',
            }}
          >
            School operations,{' '}
            <Box component="span" sx={{ color: '#0f442f' }}>
              working together.
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{
              maxWidth: 650,
              mt: 3,
              mb: 0,
              color: '#fffffe',
              fontSize: '1.05rem',
              lineHeight: 1.85,
            }}
          >
            This school management portal is built to simplify daily school
            operations by connecting administration, teachers, students, and
            families in one environment. It supports attendance, assessments,
            timetables, class communication, result workflows, and school fee
            payments through card and transfer options.
          </Typography>
          <Button
            component="a"
            href="#about-capabilities"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 2.5,
              px: 0,
              color: '#ff0800',
              fontWeight: 750,
              textTransform: 'none',
              '&:hover': { backgroundColor: 'transparent', color: '#285a45' },
              '& .MuiButton-endIcon': { transition: 'transform 160ms ease' },
              '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' },
            }}
          >
            Explore what it supports
          </Button>
        </Box>

        <Paper
          component="aside"
          aria-label="Portal overview"
          elevation={0}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            p: { xs: 3, sm: 3.75 },
            border: '1px solid rgba(52, 116, 90, 0.12)',
            borderRadius: 4,
            backgroundColor: '#fff',
            boxShadow: '0 22px 65px rgba(37, 72, 53, 0.09)',
            '&::after': {
              position: 'absolute',
              right: -60,
              bottom: -95,
              width: 210,
              height: 210,
              border: '1px solid rgba(52, 116, 90, 0.1)',
              borderRadius: '50%',
              content: '""',
              pointerEvents: 'none',
            },
          }}
        >
          <Stack direction="row" spacing={1.6} alignItems="center">
            <Box
              sx={{
                display: 'grid',
                width: 46,
                height: 46,
                placeItems: 'center',
                borderRadius: 3,
                backgroundColor: '#e8f1eb',
                color: '#34745a',
              }}
            >
              <MenuBookOutlinedIcon />
            </Box>
            <Typography sx={{ color: '#60736b', fontSize: '0.84rem', fontWeight: 650 }}>
              One school community
            </Typography>
          </Stack>
          <Typography
            component="h3"
            sx={{
              maxWidth: 290,
              mt: 3.4,
              mb: 2.6,
              fontSize: '1.55rem',
              fontWeight: 750,
              lineHeight: 1.3,
              letterSpacing: '-0.025em',
            }}
          >
            One place for the everyday work of school.
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 1.25,
            }}
          >
            {['Administration', 'Teachers', 'Students', 'Families'].map((person) => (
              <Box
                key={person}
                sx={{
                  p: 1.5,
                  border: '1px solid #e9eeea',
                  borderRadius: 2,
                  backgroundColor: '#fbfcfa',
                  color: '#42584e',
                  fontSize: '0.86rem',
                  fontWeight: 650,
                }}
              >
                {person}
              </Box>
            ))}
          </Box>
          <Stack
            direction="row"
            spacing={1.3}
            alignItems="center"
            sx={{ mt: 2.8, color: '#60736b', fontSize: '0.79rem' }}
          >
            <Box
              component="span"
              aria-hidden="true"
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#5aab7d',
                boxShadow: '0 0 0 4px #e8f5ec',
              }}
            />
            Connected around the school day
          </Stack>
        </Paper>
      </Box>

      <Box
        id="about-capabilities"
        sx={{
          mt: { xs: 8, md: 12 },
          pt: 4,
          borderTop: '1px solid #e1e9e2',
          scrollMarginTop: '100px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'baseline' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1.5,
            mb: 3,
          }}
        >
          <Typography
            component="p"
            sx={{
              m: 0,
              color: '#34745a',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            What it supports
          </Typography>
          <Typography
            component="h3"
            sx={{
              m: 0,
              fontSize: { xs: '1.3rem', sm: '1.75rem' },
              fontWeight: 700,
              letterSpacing: '-0.035em',
            }}
          >
            Everyday essentials, brought together.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(3, minmax(0, 1fr))',
              lg: 'repeat(5, minmax(0, 1fr))',
            },
            gap: 1.6,
            '@media (max-width:380px)': { gridTemplateColumns: '1fr' },
          }}
        >
          {capabilities.map((capability) => (
            <Paper
              component="article"
              key={capability.number}
              elevation={0}
              sx={{
                minHeight: 174,
                p: 2.25,
                border: '1px solid #e5ebe5',
                borderRadius: 2.75,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                transition: 'transform 160ms ease, box-shadow 160ms ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 26px rgba(37, 72, 53, 0.07)',
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: '#6f9c83',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                }}
              >
                {capability.number}
              </Typography>
              <Typography
                component="h4"
                sx={{ mt: 2.6, mb: 1, fontSize: '0.97rem', fontWeight: 700, lineHeight: 1.35 }}
              >
                {capability.title}
              </Typography>
              <Typography sx={{ color: '#60736b', fontSize: '0.82rem', lineHeight: 1.6 }}>
                {capability.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default About;
