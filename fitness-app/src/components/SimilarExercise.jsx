import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScroller from './HorizontalScroller';
import Loader from './Loader';



const SimilarExercise = ({ targetExercises, equipmentExercises, isBodyParts }) => {

  
  return (
    
    <Box sx={{
        mt: { lg: '100px', xs: '0' }
    }}>

        <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>

        <Stack direction='row' sx={{
            p: '2',
            position: 'relative'
        }}>
                {targetExercises.length ? <HorizontalScroller  data={targetExercises}/> : <Loader />}

        </Stack>


        <Typography variant='h3' mb={5}>Exercises that target the same equipment</Typography>

        <Stack direction='row' sx={{
            p: '2',
            position: 'relative'
        }}>
                {equipmentExercises.length ? <HorizontalScroller  data={equipmentExercises}/> : <Loader />}

        </Stack>
    </Box>
  )
}

export default SimilarExercise;