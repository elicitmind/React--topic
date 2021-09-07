import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

 

  const httpData = useHttp();

  const { isLoading, error, sendRequest: fetchTasks } = httpData;

  useEffect(() => {
    const applyData = (data) => {
      const loadedTasks = [];
  
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
  
      setTasks(loadedTasks);
    };

    fetchTasks({
      url: 'https://let-s-backend-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
    }, applyData);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
