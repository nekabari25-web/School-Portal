import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AuthLayout from '../Component/Auth/AuthLayout';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Sign-in is not connected yet. Please contact your school administrator for account access.');
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your school portal."
      footer={{ prompt: 'Create an account', to: '/Registration' }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          type="email"
          autoComplete="email"
          label="Email address"
          name="email"
          placeholder="you@school.com"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          required
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          label="Password"
          name="password"
          sx={{ mb: 1.5 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((visible) => !visible)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2.5 }}>
          <Button
            component="a"
            href="/#contact"
            sx={{
              p: 0,
              color: '#34745a',
              fontSize: '0.88rem',
              fontWeight: 700,
              textTransform: 'none',
              '&:hover': { backgroundColor: 'transparent', color: '#285a45' },
            }}
          >
            Need help signing in?
          </Button>
        </Box>
        {status && (
          <Alert severity="info" sx={{ mb: 2 }}>
            {status}
          </Alert>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            py: 1.45,
            borderRadius: 2,
            backgroundColor: '#34745a',
            fontWeight: 750,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#285a45' },
          }}
        >
          Sign in
        </Button>
        <Box
          component="p"
          sx={{ mt: 2.5, mb: 0, color: '#89968f', fontSize: '0.8rem', lineHeight: 1.6, textAlign: 'center' }}
        >
          Your school provides and manages portal accounts.
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
