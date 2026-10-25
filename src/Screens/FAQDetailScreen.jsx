import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import questions from '../Component/FAQs/faqData';

const FAQDetailScreen = () => {
  const { slug } = useParams();
  const question = questions.find((item) => item.slug === slug);

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          minHeight: '65vh',
          pt: { xs: 14, md: 16 },
          pb: { xs: 8, md: 12 },
          px: { xs: 2.5, sm: 3 },
          background:
            'radial-gradient(ellipse at 5% 0%, rgba(220, 237, 224, 0.6), transparent 34%), #f8faf7',
        }}
      >
        <Container maxWidth="md" disableGutters>
          <Button
            component={RouterLink}
            to="/#faqs"
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: 3,
              px: 0,
              color: '#34745a',
              fontWeight: 700,
              textTransform: 'none',
              '&:hover': { backgroundColor: 'transparent', color: '#285a45' },
            }}
          >
            Back to FAQs
          </Button>

          {question ? (
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                border: '1px solid #e6ece7',
                borderRadius: 4,
                backgroundColor: '#fff',
              }}
            >
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
                component="h1"
                sx={{
                  m: 0,
                  color: '#1c322b',
                  fontSize: { xs: '2rem', sm: '2.8rem' },
                  fontWeight: 750,
                  lineHeight: 1.12,
                  letterSpacing: '-0.045em',
                }}
              >
                {question.question}
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: 3,
                  mb: 0,
                  color: '#40574e',
                  fontSize: '1.05rem',
                  lineHeight: 1.85,
                }}
              >
                {question.answer}
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: 2,
                  mb: 0,
                  color: '#60736b',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                }}
              >
                {question.details}
              </Typography>
            </Paper>
          ) : (
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                border: '1px solid #e6ece7',
                borderRadius: 4,
                backgroundColor: '#fff',
              }}
            >
              <Typography
                component="h1"
                sx={{
                  m: 0,
                  color: '#1c322b',
                  fontSize: { xs: '2rem', sm: '2.8rem' },
                  fontWeight: 750,
                  letterSpacing: '-0.045em',
                }}
              >
                FAQ not found
              </Typography>
              <Typography
                component="p"
                sx={{ mt: 2, mb: 0, color: '#60736b', lineHeight: 1.8 }}
              >
                This question may have moved or the link may be incorrect.
              </Typography>
            </Paper>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default FAQDetailScreen;
