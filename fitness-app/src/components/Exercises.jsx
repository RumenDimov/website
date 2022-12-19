import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import { useStateContext } from '../Contexts/ContextProvider';


const Exercises = () => {

  const { exercise, setExercise, bodyPart, currentPage, setCurrentPage } = useStateContext();

 
  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  const currentExercises = exercise.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {

    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {

      const fetchExercisesData = async () => {

        let exercisesData = [];

        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        }
        else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }

        setExercise(exercisesData);
      }

      fetchExercisesData();

  }, [bodyPart]);
  
  return (
    
    <Box id='exercises' sx={{ mt: { lg: '110px' }}}
    mt='500px'
    p='20px'>

      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>

      <Stack direction='row' sx={{ 
        gap: { lg: '110px', xs: '50px' }}}
        flexWrap='wrap' justifyContent='center'>

          {currentExercises.map((e, index) => (

            <ExerciseCard key={index} exercise={e}/>
          )) }
        </Stack>
        
        <Stack mt="100px" alignItems='center'>

          {exercise.length > 9 && (
            <Pagination color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'/>
          )}
        </Stack>
    </Box>
  )
}

export default Exercises;