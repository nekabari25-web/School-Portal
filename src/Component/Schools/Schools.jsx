import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import libraryImage from '../../assets/Library.jpg';
import classroomImage from '../../assets/courtTeacher.jpg';
import studentsImage from '../../assets/groupBookshiefs.jpg';

const schoolTypes = [
  {
    label: 'For growing learners',
    title: 'Primary schools',
    description:
      'Keep attendance, student information, and family communication organized throughout the school day.',
    image: libraryImage,
    imageAlt: 'Shelves of books in a school library',
    icon: <SchoolOutlinedIcon />,
    accent: '#e9f2e9',
  },
  {
    label: 'For busy school days',
    title: 'Secondary schools',
    description:
      'Bring schedules, assessments, and result workflows together for staff, students, and families.',
    image: classroomImage,
    imageAlt: 'Teacher speaking with students in a classroom',
    icon: <AccountBalanceOutlinedIcon />,
    accent: '#edf0fa',
  },
  {
    label: 'For connected communities',
    title: 'School groups',
    description:
      'Give your school community one environment for everyday administration and communication.',
    image: studentsImage,
    imageAlt: 'Students working together in a library',
    icon: <GroupsOutlinedIcon />,
    accent: '#f8eee4',
  },
];

const Schools = () => (
  <Box
    component="section"
    id="schools"
    aria-labelledby="schools-title"
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 2.5, sm: 3 },
      color: '#1c322b',
      scrollMarginTop: '88px',
      backgroundColor: '#fff',
    }}
  >
    <Container maxWidth="lg" disableGutters>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'flex-end' }}
        spacing={{ xs: 2, md: 5 }}
        sx={{ mb: { xs: 4, md: 5 } }}
      >
        <Box sx={{ maxWidth: 650 }}>
          <Typography
            component="p"
            sx={{
              mb: 1.8,
              color: '#34745a',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Schools we support
          </Typography>
          <Typography
            id="schools-title"
            component="h2"
            sx={{
              m: 0,
              fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 750,
              lineHeight: 1.08,
              letterSpacing: '-0.05em',
            }}
          >
            Made for the people who make a school.
          </Typography>
        </Box>
        <Typography
          component="p"
          sx={{
            maxWidth: 390,
            m: 0,
            color: '#60736b',
            fontSize: '1rem',
            lineHeight: 1.8,
          }}
        >
          Every school is different. School Portal brings the essential daily
          workflows into one place for your community.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' },
          gap: 2.5,
        }}
      >
        {schoolTypes.map((school) => (
          <Card
            component="article"
            key={school.title}
            elevation={0}
            sx={{
              overflow: 'hidden',
              border: '1px solid #e6ece7',
              borderRadius: 3.5,
              backgroundColor: '#fff',
              transition: 'transform 180ms ease, box-shadow 180ms ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 18px 40px rgba(29, 61, 49, 0.11)',
              },
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                image={school.image}
                alt={school.imageAlt}
                sx={{ height: { xs: 210, md: 220 }, objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  right: 16,
                  bottom: -22,
                  display: 'grid',
                  width: 46,
                  height: 46,
                  placeItems: 'center',
                  border: '3px solid #fff',
                  borderRadius: 2.5,
                  backgroundColor: school.accent,
                  color: '#34745a',
                  boxSizing: 'content-box',
                }}
              >
                {school.icon}
              </Box>
            </Box>
            <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
              <Typography
                component="p"
                sx={{
                  mb: 1.2,
                  color: '#668474',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.11em',
                  textTransform: 'uppercase',
                }}
              >
                {school.label}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  mb: 1.1,
                  color: '#1c322b',
                  fontSize: '1.35rem',
                  fontWeight: 750,
                  letterSpacing: '-0.025em',
                }}
              >
                {school.title}
              </Typography>
              <Typography
                component="p"
                sx={{
                  minHeight: { sm: 78 },
                  m: 0,
                  color: '#60736b',
                  fontSize: '0.92rem',
                  lineHeight: 1.75,
                }}
              >
                {school.description}
              </Typography>
              <Stack
                direction="row"
                spacing={0.8}
                alignItems="center"
                sx={{ mt: 2.2, color: '#34745a', fontSize: '0.84rem', fontWeight: 750 }}
              >
                <span>One connected portal</span>
                <ArrowOutwardIcon sx={{ fontSize: '1rem' }} />
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Schools;
