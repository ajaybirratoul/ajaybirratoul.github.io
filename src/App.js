import './App.css';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
  Grid,
  Container,
  Link,
} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Carlito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  const email = 'mailto:ajaysratoul@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/aratoul';
  const github = 'https://github.com/ajaybirratoul';

  const uwaterloo = 'https://cs.uwaterloo.ca/';

  const faire = 'https://www.faire.com/en-ca/';
  const spotwork = 'https://spotwork.co/';
  const uptake = 'https://www.uptake.com/';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="md"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Grid display="flex" flexDirection="column" gap="1rem">
          <Typography variant="h2" fontWeight="bold">
            Ajaybir Ratoul
          </Typography>
          <Typography variant="h4">
            Software Engineer Intern @ <Link href={faire}>Faire</Link>
          </Typography>
          <Typography variant="h5">
            Computer Science @ <Link href={uwaterloo}>UWaterloo</Link>, | Prev @{' '}
            <Link href={uptake}>Uptake</Link>,{' '}
            <Link href={spotwork}>Spotwork</Link>
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Link href={email}>Email me</Link>
            </Grid>
            <Grid item>
              <Link href={linkedin}>LinkedIn</Link>
            </Grid>
            <Grid item>
              <Link href={github}>GitHub</Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
