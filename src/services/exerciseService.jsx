import axios from "axios";

const API_URL = "http://localhost:8080/api/exercises";

export const getExercises = () => axios.get(API_URL);

export const createExercise = (exercise) =>
  axios.post(API_URL, exercise);

export const updateExercise = (id, exercise) =>
  axios.put(`${API_URL}/${id}`, exercise);   // ⚠ MUST include /${id}

export const deleteExercise = (id) =>
  axios.delete(`${API_URL}/${id}`);
