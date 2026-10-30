import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = [
  {
    question: 'Who can use the School Portal?',
    answer:
      'The portal is designed for school administrators, teachers, students, and parents or guardians. The pages and information available to each person depend on the role assigned by the school.',
  },
  {
    question: 'How do I sign in to my account?',
    answer:
      'Use the login page and enter the account details provided by your school. If you have not received login details or cannot access your account, contact your school administrator.',
  },
  {
    question: 'What should I do if I forget my password?',
    answer:
      'Contact your school administrator to get help resetting your password and confirming the correct sign-in details.',
  },
  {
    question: 'Can parents and guardians check attendance?',
    answer:
      'The portal supports attendance and check-in information. Ask your school which attendance details are available to parents and guardians.',
  },
  {
    question: 'Where can I see assessments and student results?',
    answer:
      'Assessment and results information can be made available through the portal. What you can view depends on your account role and the information your school has published.',
  },
  {
    question: 'Can I view class timetables in the portal?',
    answer:
      'Timetable management is one of the portal features. Check with your school to find out when schedules are published and where they appear for your account.',
  },
  {
    question: 'How do school fee payments work?',
    answer:
      'The portal supports school fee payment workflows. Payment methods and instructions are set by each school, so please follow the details provided by your school before making a payment.',
  },
  {
    question: 'Will I receive school announcements and messages?',
    answer:
      'The communication hub helps schools share updates with their community. Ask your school which announcements and communication features are currently enabled.',
  },
  {
    question: 'Is my information visible to everyone?',
    answer:
      'Portal access is organized by user role so people can access the information relevant to them. For details about your school’s account access and data practices, contact the school directly.',
  },
  {
    question: 'Who should I contact if I need help?',
    answer:
      'Your school administrator or office is the best first point of contact for login issues, account access, payments, or questions about information shown in the portal.',
  },
];

const FAQs = () => (
  <Box
    component="section"
    id="faqs"
    aria-labelledby="faqs-title"
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 2.5, sm: 3 },
      color: '#1c322b',
      scrollMarginTop: '88px',
      backgroundColor: '#fff',
    }}
  >
    <Container maxWidth="md" disableGutters>
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
          Frequently asked questions
        </Typography>
        <Typography
          id="faqs-title"
          component="h2"
          sx={{
            m: 0,
            fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
            fontWeight: 750,
            lineHeight: 1.08,
            letterSpacing: '-0.05em',
          }}
        >
          Got questions? We can help.
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
          Find answers to common questions about accounts, school information,
          and using the portal.
        </Typography>
      </Box>

      <Box>
        {questions.map((item, index) => (
          <Accordion
            key={item.question}
            elevation={0}
            disableGutters
            sx={{
              border: '1px solid #e6ece7',
              borderRadius: '14px !important',
              mb: 1.5,
              overflow: 'hidden',
              '&::before': { display: 'none' },
              '&.Mui-expanded': { my: 1.5 },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#34745a' }} />}
              id={`faq-header-${index}`}
              aria-controls={`faq-content-${index}`}
              sx={{
                px: { xs: 2, sm: 2.5 },
                py: 0.6,
                '& .MuiAccordionSummary-content': { my: 1.6 },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  color: '#1c322b',
                  fontSize: { xs: '0.98rem', sm: '1.05rem' },
                  fontWeight: 700,
                  lineHeight: 1.5,
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              id={`faq-content-${index}`}
              sx={{ px: { xs: 2, sm: 2.5 }, pt: 0, pb: 2.5 }}
            >
              <Typography
                component="p"
                sx={{ m: 0, color: '#60736b', fontSize: '0.95rem', lineHeight: 1.8 }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  </Box>
);

export default FAQs;
