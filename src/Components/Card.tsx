import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { AccessTime } from '@mui/icons-material'
import { Rating } from '@mui/material'

export default function Card() {
  return (
    <Paper elevation={3}>
      <img
        src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
        alt="some view from the internet"
        className="img"
      />
      <Box paddingX={1}>
        <Typography component="h2" variant="subtitle1">
          Immerse into the Falls
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessTime sx={{ width: 16 }} />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            5 hours
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
          <Rating size="small" name="read-only" value={4.5} readOnly precision={0.5}></Rating>
          <Typography variant="body2" component="p" marginLeft={0.5}>
            4.5
          </Typography>
          <Typography variant="body2" component="p" marginLeft={1.5}>
            (655 reviews)
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3">
            From C $147
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}
