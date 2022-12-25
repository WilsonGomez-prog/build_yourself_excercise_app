import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import HorizontalScrollbar from '././HorizontalScrollbar'
import Loader from '././Loader'

const SimilarExercises = ({equipmentExercises, targetMuscleExercises}) => {
  return (
    <Box sx={{ mt:{ lg: '100px', xs: '0'}}}>
    <Typography variant="h3" mb={5} mt={10} sx={{ ml: {lg:"1rem", sm:"1rem"}}}>Excercises that target the same muscle group</Typography>
    <Stack 
      direction="row"
      sx={{ p:'2', position:'relative' }}
    >
      { targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}  isBodyPart={false}/> : <Loader /> }
    </Stack>

    
    <Typography variant="h3" mb={5} mt={10} sx={{ ml: {lg:"1rem", sm:"1rem"}}}>Excercises that use the same equipment</Typography>
      <Stack 
        direction="row"
        sx={{ p:'2', position:'relative' }}
      >
        { equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}  isBodyPart={false}/> : <Loader /> }
      </Stack>

    </Box>
  )
}

export default SimilarExercises