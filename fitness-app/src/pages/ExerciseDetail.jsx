import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercise from "../components/SimilarExercise";
import { useStateContext } from "../Contexts/ContextProvider";

import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData';



const ExerciseDetail = () => {

  const { exerciseDetail, setExerciseDetail, exerciseVideos, setExerciseVideos,
    targetExercises, setTargetExercises, equipmentExercises, 
    setEquipmentExercises } = useStateContext();

  const { id } = useParams();

  useEffect(() => {

    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);

      setExerciseVideos(exerciseVideosData.contents);

      const targetExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetExercises(targetExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equiment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    }

    fetchExerciseData();

  }, [id])

  return (
    
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercise targetExercises={targetExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail;