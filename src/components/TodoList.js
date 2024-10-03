import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const categories = [...new Set(todos.map(todo => todo.category))];

  return (
    <div className={styles.todoList}>
      {categories.map(category => (
        <div key={category} className={styles.category}>
          <h2>{category}</h2>
          <ul>
            {todos
              .filter(todo => todo.category === category)
              .map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;