import React, { Children, createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [exercise, setExercise] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetExercises, setTargetExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    return (

        <StateContext.Provider value = {
            {

                exercise,
                setExercise,
                bodyPart,
                setBodyPart,
                currentPage,
                setCurrentPage,
                search,
                setSearch,
                bodyParts,
                setBodyParts,
                exerciseDetail, 
                setExerciseDetail,
                exerciseVideos, 
                setExerciseVideos,
                targetExercises, 
                setTargetExercises,
                equipmentExercises, 
                setEquipmentExercises
            }
        }> { children } 
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);