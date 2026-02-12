import React, { useState, useEffect } from 'react';

function ExercisePage() {
  const [exercise, setExercise] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [sets, setSets] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => { const existingEntries = JSON.parse(localStorage.getItem('exerciseEntries')) || [];
    setEntries(existingEntries);}, []);

    const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { exercise, repetitions, sets };

    let updatedEntries = [...entries];

    if (editIndex !== null) 
    {
      updatedEntries[editIndex] = newEntry;
      setEditIndex(null);
    } 
    else 
    {
      updatedEntries.push(newEntry);
    }
    localStorage.setItem('exerciseEntries', JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
    
    setExercise('');
    setRepetitions('');
    setSets('');
    setSubmitted(true);
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setExercise(entry.exercise);
    setRepetitions(entry.repetitions);
    setSets(entry.sets);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    localStorage.setItem('exerciseEntries', JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
  };

  return (
    <section className="hero-left">
      <h1>Exercise Details</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h4><label>Exercise:</label></h4>
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
        </div>
        <div>
          <h4><label>Repetitions:</label></h4>
          <input
            type="number"
            value={repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
          />
        </div>
        <div>
          <h4><label>Sets:</label></h4>
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
        </div>
        <button className="change" type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
        {editIndex !== null && (<button className="change" type="button" onClick={() => setEditIndex(null)}>Cancel</button> )}
      </form>

      <div>
        <h2 className="update">All Submitted Entries:</h2>
        <ul  className="update">
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>Exercise:</strong> {entry.exercise}, <strong>Repetitions:</strong> {entry.repetitions}, <strong>Sets:</strong> {entry.sets}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button  onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ExercisePage;
