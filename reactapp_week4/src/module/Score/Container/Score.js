import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onDelete } from '../../../action';

const Score = () => {

  const scorecardData = useSelector(state => state.scorecard)

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(onDelete(id));
  }
  return (
    <div>
      <Box display='flex' flexWrap='wrap' sx={{ gap: 5, m: 4 }}>
        {scorecardData.length ? scorecardData.map(info => {
          return (
            <React.Fragment key={info.id}>
              <Card sx={{ width: 300 }}>
                <CardContent>
                  <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                    Name: {info.name}
                  </Typography>
                  <Typography textAlign={'center'} variant="h6" color="text.secondary">
                    Your score is: {info.score}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box>
                    <Button
                      size="small" onClick={() => handleDelete(info.id)}>Delete</Button>
                  </Box>
                </CardActions>
              </Card>
            </React.Fragment>
          )
        })
          : (
            <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{m: '150px auto 0 auto',}}
            >
              <Typography
                variant='h4'
                fontWeight='600'
                sx={{ textAlign: 'center' }}
              >
                No score records
              </Typography>
            </Box>
          )}
      </Box>
    </div>
  )
}

export default Score;