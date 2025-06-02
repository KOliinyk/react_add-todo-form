import React from 'react';

interface Props {
  todo: {
    id: number;
    title: string;
    completed: boolean;
    user: {
      id: number;
      name: string;
      username: string;
      email: string;
    };
  };
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="TodoInfo" data-id={todo.id}>
      <h3>{todo.title}</h3>
      <p>
        <strong>User:</strong> {todo.user.name} ({todo.user.email})
      </p>
      <p>
        <strong>Status:</strong> {todo.completed ? 'Completed' : 'Incomplete'}
      </p>
    </div>
  );
};
