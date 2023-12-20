import React, { useState } from 'react';

function Task({ id, taskProps, onDelete, onEdit, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(taskProps.nomtache);

  const handleDelete = () => {  //fonction bouton supprimer
    onDelete(id);
  };

  const handleEdit = () => {  ////fonction bouton enregistrer après modification
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <>
      <tr className="text-center">
        <td style={{ textAlign: 'center' }}>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={taskProps.completed}
              onChange={onToggleComplete}
              style={{ backgroundColor: 'green', borderColor: 'green' }}
            />
            <div>
              {taskProps.completed}
            </div>
          </div>
        </td>
        <td>
          {taskProps.completed ? (
            <span style={{ color: 'green', fontWeight: 'bold' }}>
              {taskProps.nomtache} - Validée
            </span>
          ) : (
            taskProps.nomtache
          )}
        </td>
        <td>{taskProps.category}</td>
        {isEditing ? (
          <>
            <td>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            </td>
            <td>
              <button type="button" onClick={handleEdit} className="btn btn-success btn-sm">Enregistrer</button>
            </td>
          </>
        ) : (
          <>
            <td>
              <button type="button" onClick={() => setIsEditing(true)} className="btn btn-warning btn-sm">Modifier</button>
            </td>
            <td>
              <button type="button" onClick={handleDelete} className="btn btn-outline-danger btn-sm">Supprimer</button>
            </td>
          </>
        )}
      </tr>
    </>
  );
}

export default Task;