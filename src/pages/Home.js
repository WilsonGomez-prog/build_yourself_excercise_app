import React, { useState } from 'react';
import { Box } from '@mui/material';

import Excercises from '../components/Exercises';
import SearchExcercises from '../components/SearchExercises';  
import HeroBanner from '../components/HeroBanner';

const Home = () => {  
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);


  return (
    <Box>
      <HeroBanner />
      <SearchExcercises 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
        setExercises={setExercises}/>
      <Excercises  
        bodyPart={bodyPart} 
        exercises={exercises} 
        setExercises={setExercises}/>
    </Box>
  )
}

export default Home