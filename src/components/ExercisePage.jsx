import React, { useState, useEffect } from 'react';
import { getExercises, createExercise, updateExercise, deleteExercise }from "../services/exerciseService";


function ExercisePage() {
  const [exercise, setExercise] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [sets, setSets] = useState('');
  const [entries, setEntries] = useState([]);
  const [submitted,setSubmitted] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
  loadExercises();
}, []);

const loadExercises = async () => {
  try {
    const response = await getExercises();
    setEntries(response.data);
  } catch (error) {
    console.error("Error fetching exercises:", error);
  }
};

    const handleSubmit = async (e) => {
  e.preventDefault();

  const newEntry = {
    exercise,
    repetitions: Number(repetitions),
    sets: Number(sets)
  };

  try {
   if (editIndex !== null) {
  await updateExercise(editIndex, newEntry);
  setEditIndex(null);
} else {
  await createExercise(newEntry);
}

await loadExercises();



    const response = await getExercises();
    setEntries(response.data);

    setExercise('');
    setRepetitions('');
    setSets('');
  } catch (error) {
    console.error("Error saving exercise:", error);
  }
};
const handleEdit = (entry) => {
  setExercise(entry.exercise);
  setRepetitions(entry.repetitions);
  setSets(entry.sets);
  setEditIndex(entry.id); // store ID instead of index
};
const handleDelete = async (id) => {
  try {
    await deleteExercise(id);
    await loadExercises(); // wait properly
  } catch (error) {
    console.error("Error deleting exercise:", error);
  }
};

const handleCancel = () => {
  setExercise('');
  setRepetitions('');
  setSets('');
  setEditIndex(null);
};




  return (
    <section className="hero-left">
      <h1>Exercise Details</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h4><label>Exercise:</label></h4>
          <input
            type="text"
            placeholder="Enter the name of the Exercise"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
        </div>
        <div>
          <h4><label>Repetitions:</label></h4>
          <input
            type="number"
            placeholder="Enter the number of Repetitions"
            value={repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
          />
        </div>
        <div>
          <h4><label>Sets:</label></h4>
          <input
            type="number"
            placeholder="Enter the number of stes"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
        </div>
        <button className="change" type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
        {editIndex !== null && (<button className="change" type="button" onClick={() => handleCancel()}>Cancel</button> )}
      </form>

      <div>
        <h2 className="update">All Submitted Entries:</h2>
        <ul className="update">
              {entries.map((entry) => (
                <li key={entry.id}>
                   <strong>Exercise:</strong> {entry.exercise},
                   <strong> Repetitions:</strong> {entry.repetitions},
                   <strong> Sets:</strong> {entry.sets}
                   <button onClick={() => handleEdit(entry)}>Edit</button>
                  <button onClick={() => handleDelete(entry.id)}>Delete</button>
                </li>
               ))}
       </ul>
      </div>
    </section>
  );
}

export default ExercisePage;
