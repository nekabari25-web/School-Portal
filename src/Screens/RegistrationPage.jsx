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

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [status, setStatus] = useState('');
  const passwordsMatch = !confirmation || password === confirmation;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmation) {
      setStatus('Please make sure both passwords match.');
      return;
    }
    setStatus('Account registration is not connected yet. Please contact your school to set up access.');
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Enter your details to get started with your school community."
      footer={{ prompt: 'Sign in', to: '/Login' }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          autoComplete="name"
          label="Full name"
          name="name"
          placeholder="Your full name"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          required
          autoComplete="organization"
          label="School name"
          name="school"
          placeholder="Enter your school"
          sx={{ mb: 2 }}
        />
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
          autoComplete="new-password"
          label="Password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setStatus('');
          }}
          inputProps={{ minLength: 8 }}
          helperText="Use at least 8 characters."
          sx={{ mb: 2 }}
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
        <TextField
          fullWidth
          required
          type={showConfirmation ? 'text' : 'password'}
          autoComplete="new-password"
          label="Confirm password"
          name="confirmPassword"
          value={confirmation}
          onChange={(event) => {
            setConfirmation(event.target.value);
            setStatus('');
          }}
          error={!passwordsMatch}
          helperText={!passwordsMatch ? 'Passwords do not match.' : undefined}
          sx={{ mb: 2.5 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showConfirmation ? 'Hide confirmation password' : 'Show confirmation password'}
                  onClick={() => setShowConfirmation((visible) => !visible)}
                  edge="end"
                >
                  {showConfirmation ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {status && (
          <Alert severity={status.startsWith('Please') ? 'error' : 'info'} sx={{ mb: 2 }}>
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
          Create account
        </Button>
        <Box
          component="p"
          sx={{ mt: 2.5, mb: 0, color: '#89968f', fontSize: '0.8rem', lineHeight: 1.6, textAlign: 'center' }}
        >
          Your school manages account access. Contact your school administrator if you need help.
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default RegistrationPage;
