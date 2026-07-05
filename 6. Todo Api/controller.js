let todo = new Array();

export const showTasks = (req, res) => {
  let task = new Array();
  if (todo.length > 0) {
    for (let i = 0; i < todo.length; i++) {
      task.push(`${i + 1}. ${todo[i]}`);
    }
    res.json(task);
  } else {
    res.send("You Have No Task");
  }
};

export const addTask = (req, res) => {
  const task = req.body.task;
  todo.push(task);
  res.send("Task Added Successfully");
};

export const updateTask = (req, res) => {
  const { index, task } = req.body;
  todo[index - 1] = task;
  res.send("Task Updated Successfully");
};

export const deleteTask = (req, res) => {
  const index = req.body.index;
  todo.splice(index - 1, 1);
  res.send("Task Deleted Successfully");
};
