import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to the Wolves Futsal Club
          </Typography>
          <Typography variant="h5" gutterBottom>
            Uniting Passion and Excellence on the Field
          </Typography>
          <Typography paragraph>
            Dive into the thrilling world of futsal with the Wolves. Our team embodies the spirit of the game, combining skill, teamwork, and a relentless pursuit of victory. Join us as we embark on an exciting season, showcasing top-tier talent and heart-pounding matches.
          </Typography>
          <Link href="/stats" passHref>
            <Button variant="contained" color="primary" size="large">
              View Season Stats
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={5} style={{ padding: '2rem' }}>
            <Image
              src="/images/wolves.jpg" // Replace with your image path
              alt="Wolves Futsal Team"
              layout="responsive"
              width={500}
              height={300}
              objectFit="cover"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
