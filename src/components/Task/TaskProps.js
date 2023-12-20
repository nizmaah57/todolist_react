class TaskProps {
    constructor(nomtache, completed = false, category) {
      this.nomtache = nomtache;
      this.completed = completed;
      this.category = category;
    }
  }
  
  export default TaskProps;