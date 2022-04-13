import { CssBaseline } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '../Components/Card'

export default function Tours() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Card></Card>
          </Grid>
          <Grid item xs={3}>
            <Card></Card>
          </Grid>
          <Grid item xs={3}>
            <Card></Card>
          </Grid>
          <Grid item xs={3}>
            <Card></Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
