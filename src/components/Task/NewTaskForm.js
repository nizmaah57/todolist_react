import React, { useState } from 'react';
import TaskProps from "./TaskProps";

function NewTaskForm({ onSubmit }) {
  const [category, setCategory] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { nomtache } = form;

    // Vérification champ vide
    if (!nomtache.value.trim()) {
      // Si vide, message d'erreur
      setErrorMessage("Veuillez entrer un nom de tâche : il est impossible de créer une tâche vide.");
      return;
    }

    // Si non vide, enlève le message d'erreur
    setErrorMessage("");

    let task = new TaskProps(nomtache.value, category);
    onSubmit(task);
    form.reset();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>  
      <div className="form-group mb-3"> 
        <label className="text-white">Nouvelle tâche</label>
        <input type="text" name="nomtache" className="form-control" placeholder="Entrez votre nouvelle tâche ici" />
      </div>

      <div className="form-group mb-3">
        <label className="text-white">Catégorie</label>
        <div>
          <input
            type="radio"
            id="categorie1"
            name="categorie"
            value="categorie1"
            checked={category === "categorie1"}
            onChange={() => setCategory("categorie1")}
          />
          <label htmlFor="categorie1" className="ml-2 text-white">
            Tâche lointaine
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="categorie2"
            name="categorie"
            value="categorie2"
            checked={category === "categorie2"}
            onChange={() => setCategory("categorie2")}
          />
          <label htmlFor="categorie2" className="ml-2 text-white">
            Tâche urgente
          </label>
        </div>
      </div>

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <button className="btn btn-primary">Ajouter à la liste</button> 
    </form>
  );
}

export default NewTaskForm;