import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Добавление задачи
  const handleAddTask = () => {
    const trimmedTask = task.trim();
    if (!trimmedTask) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: trimmedTask, completed: false },
    ]);
    setTask("");
  };

  // Переключение выполнения
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Удаление задачи
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      {/* Верхняя панель */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do List</Typography>
        </Toolbar>
      </AppBar>

      {/* Основной контейнер */}
      <Container maxWidth="sm">
        <Box mt={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            {/* Форма добавления */}
            <Typography variant="h6" gutterBottom>
              Add a New Task
            </Typography>

            <Box display="flex" gap={2} mb={2}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddTask}
              >
                ADD
              </Button>
            </Box>

            {/* Список задач */}
            <List>
              {tasks.map((item) => (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <Button
                      color="error"
                      onClick={() => handleDeleteTask(item.id)}
                    >
                      Удалить
                    </Button>
                  }
                >
                  <Checkbox
                    edge="start"
                    checked={item.completed}
                    onClick={() => handleToggleTask(item.id)}
                  />
                  <ListItemText
                    primary={item.text}
                    sx={{
                      textDecoration: item.completed
                        ? "line-through"
                        : "none",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
