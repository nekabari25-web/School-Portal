import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PaymentIcon from '@mui/icons-material/Payment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';

const featuresPairs = [
  [
    {
      title: 'Multi-Portal Access',
      description: 'Dedicated dashboards for schools, teachers, students, and parents — each with role-based controls and permissions.',
      icon: <SchoolIcon sx={{ fontSize: 32, color: '#059669' }} />,
      bgColor: '#ffffff',
    },
    {
      title: 'Assessment Tools',
      description: 'Create and manage assignments, quizzes, projects, and exams with structured class-based submission workflows.',
      icon: <AssignmentIcon sx={{ fontSize: 32, color: '#059669' }} />,
      bgColor: '#ffffff',
    }
  ],
  [
    {
      title: 'Attendance & Check-Ins',
      description: 'Track daily student presence, class check-ins and check-outs, and maintain accurate attendance records over time.',
      icon: <EventAvailableIcon sx={{ fontSize: 32, color: '#059669' }} />,
      bgColor: '#ffffff',
    },
    {
      title: 'School Fee Payments',
      description: 'Card checkout and virtual account transfer, with payment history, verification states, and receipt generation.',
      icon: <PaymentIcon sx={{ fontSize: 32, color: '#059669' }} />,
      bgColor: '#ffffff',
    }
  ],
  [
    {
      title: 'Timetable Management',
      description: 'Plan and publish class and exam timetables with structured schedule visibility for each user role.',
      icon: <ScheduleIcon sx={{ fontSize: 32, color: '#059669' }} />,
      bgColor: '#ffffff',
    },
    {
      title: 'Results & Reporting',
      description: 'Control result visibility, generate student report cards, and streamline academic reporting operations by term.',
      icon: <TrendingUpIcon sx={{ fontSize: 32, color: '#059669' }} />,
      bgColor: '#ffffff',
    }
  ],
  [
    {
      title: 'Communication Hub',
      description: 'Notifications, class board posts, and messaging tools keep staff, students, and parents aligned in real time.',
      icon: <PeopleIcon sx={{ fontSize: 32, color: '#059669' }} />,
      bgColor: '#ffffff',
    },
    {
      title: 'School-Level Control',
      description: 'Enable or disable portal features, manage key settings, and enforce consistent governance across schools on the platform.',
      icon: <SecurityIcon sx={{ fontSize: 32, color: '#059669' }} />,
      bgColor: '#ffffff',
    }
  ]
];

const partnerSchools = [
  { name: "Anglican Girls' Secondary School, Nnewi", icon: <SchoolIcon sx={{ color: '#0f5132' }} /> },
  { name: "Archdeacon Nwosu Memorial Secondary School Ozubulu", icon: <SchoolIcon sx={{ color: '#0f5132' }} /> },
  { name: "Benneth Offor Memorial Comprehensive Secondary School", icon: <SchoolIcon sx={{ color: '#0f5132' }} /> },
  { name: "Bethel Standard Secondary School", icon: <SchoolIcon sx={{ color: '#0f5132' }} /> }
];

export default function FeaturesPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', py: 6, px: 2, overflowX: 'hidden' }}>
      
      {/* Injecting CSS Keyframes for the Rolling Marquee Animation */}
      <style>
        {`
          @keyframes scrollLoop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: scrollLoop 25s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Top Header Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="subtitle2" 
          color="primary" 
          fontWeight="bold" 
          sx={{ textTransform: 'uppercase', letterSpacing: 1.2, mb: 1 }}
        >
          Platform Features
        </Typography>
        <Typography variant="h4" fontWeight="800" sx={{ color: '#0f172a', mb: 2 }}>
          Everything in one place
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
          All the tools schools, teachers, and students need — no switching between disconnected systems.
        </Typography>
      </Container>

      {/* Cards Container */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        
        {/* Loop through rows of 2 cards side-by-side */}
        {featuresPairs.map((pair, rowIndex) => (
          <Box 
            key={rowIndex} 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' }, 
              gap: 3, 
              mb: 3 
            }}
          >
            {pair.map((item, cardIndex) => (
              <Card 
                key={cardIndex}
                elevation={0}
                sx={{ 
                  flex: 1,
                  p: 2.5, 
                  borderRadius: 3, 
                  bgcolor: item.bgColor,
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: '#059669',
                    boxShadow: '0 12px 24px rgba(5,150,105,0.12)',
                  }
                }}
              >
                <CardContent sx={{ p: '0 !important' }}>
                  <Box sx={{ mb: 2, p: 1, display: 'inline-block', bgcolor: '#f1f5f9', borderRadius: 2 }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="700" sx={{ mb: 1, color: '#1e293b', fontSize: '1.05rem' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ))}

        {/* Modernisation Banner Section */}
        <Box 
          sx={{ 
            mt: 8, 
            p: 4, 
            borderRadius: 3, 
            bgcolor: '#064e3b',
            color: 'white',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight="700" sx={{ mb: 1 }}>
              Ready to modernise your school operations?
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Get in touch and our team will walk you through the onboarding process.
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            onClick={() => navigate('/contact')}
            sx={{ 
              bgcolor: '#fbbf24', 
              color: '#000', 
              fontWeight: 'bold',
              px: 3,
              py: 1.2,
              '&:hover': { bgcolor: '#f59e0b' }
            }}
          >
            <Link to="/contact" className="talk-to-us-btn">
             Talk to Us &rarr;
              </Link>
          </Button>
        </Box>

      </Container>

      {/* Partner Schools Rolling Marquee Section */}
      <Box sx={{ mt: 10, py: 6, textAlign: 'center', overflow: 'hidden', width: '100%' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="subtitle2" 
            color="primary" 
            fontWeight="bold" 
            sx={{ textTransform: 'uppercase', letterSpacing: 1.2, mb: 1 }}
          >
            Partner Schools
          </Typography>
          <Typography variant="h5" fontWeight="800" sx={{ color: '#0f172a', mb: 4 }}>
            Our Partner Schools
          </Typography>
          
          {/* Scrolling Train Track Container */}
          <Box sx={{ overflow: 'hidden', width: '100%', py: 2, position: 'relative' }}>
            <div className="marquee-track">
              {[...partnerSchools, ...partnerSchools].map((school, idx) => (
                <Card 
                  key={idx}
                  elevation={0} 
                  sx={{ 
                    minWidth: '280px',
                    maxWidth: '300px',
                    mx: 1.5,
                    p: 3, 
                    border: '1px solid #b7dfc7', 
                    bgcolor: '#e6f4ea', // Light green background touch inside each school card
                    borderRadius: 3, 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: 1.5,
                    boxShadow: '0 4px 12px rgba(15,81,50,0.06)',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      borderColor: '#0f5132',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 20px rgba(15,81,50,0.12)'
                    }
                  }}
                >
                  <Box sx={{ p: 1.5, bgcolor: '#ffffff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    {school.icon}
                  </Box>
                  <Typography variant="body2" fontWeight="600" sx={{ color: '#0f5132', height: '40px', display: 'flex', alignItems: 'center' }} align="center">
                    {school.name}
                  </Typography>
                </Card>
              ))}
            </div>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}