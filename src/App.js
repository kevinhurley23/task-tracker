import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const existingTasks = localStorage.getItem("tasks");
    setTasks(existingTasks ? JSON.parse(existingTasks) : []);
  }, []);

  const showForm = () => {
    setShowAddTask(!showAddTask);
  };

  const createTask = (task) => {
    const updatedTaskList = [...tasks, task];
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
    setTasks(updatedTaskList);
  };

  const deleteTask = (id) => {
    const newTaskList = tasks.filter((task, index) => index !== id);
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
    setTasks(newTaskList);
  };

  const toggleReminder = async (id) => {
    const newTaskList = [...tasks];
    const newTask = { ...newTaskList[id] };
    newTask.reminder = !newTask.reminder;
    newTaskList[id] = newTask;

    localStorage.setItem("tasks", JSON.stringify(newTaskList));
    setTasks(newTaskList);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          showForm={showForm}
          showAddTask={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && (
                  <AddTask createTask={createTask} tasks={tasks} />
                )}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    deleteTask={deleteTask}
                    toggleReminder={toggleReminder}
                  />
                ) : (
                  <p className="centered">No Tasks</p>
                )}
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
