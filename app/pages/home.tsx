import { useState } from 'react'
import { Button, Container, Grid, Paper, Typography, Card, CardMedia, CardContent, Box } from '@mui/material'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroll-component'
import { StatisticsEntryForm } from '../components/statisticsEntryForm'
import { StatisticsList } from '../components/statisticsList'

export default function HomePage() {
  const [statsList, setStatsList] = useState([])
  const [hasMore, setHasMore] = useState(true)

  const fetchMoreData = () => {
    // Fetch more data logic here
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, py: 8 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card className="mb-4 shadow-lg">
              <CardContent>
                <Typography variant="h2" component="h1" gutterBottom color="primary">
                  Wolves Futsal Club
                </Typography>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                  Uniting Passion and Excellence
                </Typography>
                <Typography paragraph>
                  Join the Wolves in our quest for futsal glory...
                </Typography>
                <Button variant="contained" color="primary" size="large">
                  View Season Stats
                </Button>
              </CardContent>
            </Card>
            <Card elevation={6} className="shadow-lg">
              <CardMedia>
                <Image
                  src="/images/wolves.jpg"
                  alt="Wolves Futsal Team"
                  layout="responsive"
                  width={500}
                  height={300}
                  objectFit="cover"
                />
              </CardMedia>
            </Card>
          </Grid>
          {/* Additional content for news and matches */}
        </Grid>
      </Box>
      <StatisticsEntryForm onAddStats={(newStats) => setStatsList([...statsList, newStats])} />
      <InfiniteScroll
        dataLength={statsList.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <StatisticsList statsList={statsList} />
      </InfiniteScroll>
    </Container>
  )
}
