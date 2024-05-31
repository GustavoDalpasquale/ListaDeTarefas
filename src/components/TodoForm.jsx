import React from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue('');
    setCategory('');
    //limpar campos
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Selecione uma opção</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudo">Estudo</option>
        </select>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default TodoForm;
