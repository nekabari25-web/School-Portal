import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';

const features = [
  {
    title: 'Multi-Portal Access',
    description:
      'Give administrators, teachers, students, and families a space tailored to their role.',
    icon: <LayersOutlinedIcon />,
    accent: '#34745a',
    background: '#e8f2ec',
  },
  {
    title: 'Assessment Tools',
    description:
      'Create assessments, track progress, and keep classroom performance organized.',
    icon: <QuizOutlinedIcon />,
    accent: '#5968a8',
    background: '#edf0fa',
  },
  {
    title: 'Attendance & Check-ins',
    description:
      'Record daily attendance and make it easier to keep track of who is in class.',
    icon: <HowToRegOutlinedIcon />,
    accent: '#b26d35',
    background: '#f8eee4',
  },
  {
    title: 'School Fee Payments',
    description:
      'Make fee payments easier for families with clear, convenient payment options.',
    icon: <PaymentsOutlinedIcon />,
    accent: '#43816d',
    background: '#e9f3f0',
  },
  {
    title: 'Timetable Management',
    description:
      'Keep class schedules in one place so everyone knows what comes next.',
    icon: <CalendarMonthOutlinedIcon />,
    accent: '#9a638d',
    background: '#f5edf4',
  },
  {
    title: 'Results & Reporting',
    description:
      'Bring student results and progress reporting together for a clearer picture.',
    icon: <BarChartOutlinedIcon />,
    accent: '#477798',
    background: '#eaf2f7',
  },
  {
    title: 'Communication Hub',
    description:
      'Share school updates and keep conversations connected to your community.',
    icon: <ForumOutlinedIcon />,
    accent: '#a87332',
    background: '#f7f0e5',
  },
  {
    title: 'School-Level Control',
    description:
      'Manage school settings and everyday operations from a central workspace.',
    icon: <AdminPanelSettingsOutlinedIcon />,
    accent: '#64785b',
    background: '#eff2e9',
  },
];

const Features = () => (
  <Box
    component="section"
    id="features"
    aria-labelledby="features-title"
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 2.5, sm: 3 },
      color: '#1c322b',
      scrollMarginTop: '88px',
      background:
        'radial-gradient(ellipse at 5% 0%, rgba(220, 237, 224, 0.6), transparent 34%), #f8faf7',
    }}
  >
    <Container maxWidth="lg" disableGutters>
      <Box sx={{ maxWidth: 700, mb: { xs: 4, md: 5 } }}>
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
          One connected school
        </Typography>
        <Typography
          id="features-title"
          component="h2"
          sx={{
            m: 0,
            fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
            fontWeight: 750,
            lineHeight: 1.08,
            letterSpacing: '-0.05em',
          }}
        >
          Everything your school needs, in one place.
        </Typography>
        <Typography
          component="p"
          sx={{
            maxWidth: 590,
            mt: 2,
            mb: 0,
            color: '#60736b',
            fontSize: '1rem',
            lineHeight: 1.8,
          }}
        >
          From the first check-in to end-of-term reports, bring the essential
          school workflows together in one simple portal.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(4, minmax(0, 1fr))',
          },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {features.map((feature) => (
          <Card
            component="article"
            key={feature.title}
            elevation={0}
            sx={{
              minHeight: 220,
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
            <CardContent
              sx={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                p: 2.5,
                '&:last-child': { pb: 2.5 },
              }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  display: 'grid',
                  width: 48,
                  height: 48,
                  mb: 2.5,
                  placeItems: 'center',
                  borderRadius: 2.5,
                  backgroundColor: feature.background,
                  color: feature.accent,
                  '& .MuiSvgIcon-root': { fontSize: 26 },
                }}
              >
                {feature.icon}
              </Box>
              <Typography
                component="h3"
                sx={{
                  mb: 1,
                  color: '#1c322b',
                  fontSize: '1.08rem',
                  fontWeight: 750,
                  letterSpacing: '-0.025em',
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                component="p"
                sx={{
                  m: 0,
                  color: '#60736b',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Features;
