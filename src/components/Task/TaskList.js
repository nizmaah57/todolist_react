import React, { useEffect, useState } from "react";
import Task from './Task';
import TaskProps from './TaskProps';
import NewTaskForm from "./NewTaskForm";

let tasksList = [       //liste initialisée
  new TaskProps("Faire le TP React"),
  new TaskProps("Emballer les cadeaux de Noël"),
  new TaskProps("Regarder le FC Metz perdre"),
];

function TaskList() {       //affichage de la liste
  const [tasks, setTasks] = useState(tasksList);
  const [filteredTasks, setFilteredTasks] = useState(tasksList);

  useEffect(() => {
    setTasks(tasksList)
    setFilteredTasks(tasksList)
  }, [])

  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])

  const handleTaskDelete = (index) => {   //suppression de la tâche
    let newTasksList = [...tasks];
    newTasksList.splice(index, 1);
    setTasks(newTasksList);
  }

  const handleNewTaskFormSubmit = (data) => {   //nouvelle tâche
    let newTasksList = [...tasks];
    newTasksList.push(data);
    setTasks(newTasksList);
  };

  const handleTaskEdit = (index, editedText) => {   //modification de la tâche
    let newTasksList = [...tasks];
    newTasksList[index] = { ...newTasksList[index], nomtache: editedText };
    setTasks(newTasksList);
  };

  const handleToggleComplete = (index) => {   //validation de la tâche
    setTasks((tasksList) =>
      tasksList.map((tasks, i) =>
        i === index ? { ...tasks, completed: !tasks.completed } : tasks
      )
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="col-md-4">
            <NewTaskForm
              onSubmit={(data) => handleNewTaskFormSubmit(data)}
            />
          </div>
          <br/>
          <table className="table table-bordered">
            <tbody>
              <tr>
                  <td>
                      <b>Validation de la tâche</b>
                  </td>
                  <td>
                      <b>Libellé de la tâche</b>
                  </td>
                  <td>
                      <b>Catégorie de la tâche</b>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
              </tr>
                {filteredTasks.map((task, index) => (
                  <Task
                    key={index}
                    id={index}
                    taskProps={task}
                    onDelete={() => handleTaskDelete(index)}
                    onEdit={(editedText) => handleTaskEdit(index, editedText)}
                    onToggleComplete={() => handleToggleComplete(index)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
}

export default TaskList;