import React from 'react';
import { VStack, Heading, IconButton, useColorMode } from '@chakra-ui/react';
import Todolist from './components/Todolist';
import Addtodo from './components/Addtodo';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="10"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, blue.500 , pink.300 , pink.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <Todolist todos={todos} deleteTodo={deleteTodo} />
      <Addtodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
