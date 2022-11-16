const getAllTasks = (req, res) => {
  res.send("All tasks from the file");
};

const createTask = (req, res) => {
  res.send("Create new taks");
};

const getTask = (req, res) => {
  res.send("Get specific task");
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
