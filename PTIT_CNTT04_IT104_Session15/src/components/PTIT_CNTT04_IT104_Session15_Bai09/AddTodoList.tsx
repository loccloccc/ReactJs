import { Component } from 'react';

type Task = {
  id: number;
  taskName: string;
  completed: boolean;
};

type InitialState = {
  taskName: string;
  tasks: Task[];
  isEdit: boolean;
  editId: number | null;
};

export default class Baitap9 extends Component<object, InitialState> {
  constructor(props: object) {
    super(props);
    this.state = {
      taskName: '',
      isEdit: false,
      editId: null,
      tasks: [],
    };
  }

  componentDidMount() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.setState({ tasks: JSON.parse(savedTasks) });
    }
  }

  componentDidUpdate(prevProps: object, prevState: InitialState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ taskName: e.target.value });
  };

  handleSubmit = () => {
    const { taskName, isEdit, editId, tasks } = this.state;
    if (taskName === '') {
      alert('Dữ liệu trống!');
    } else if (isEdit && editId !== null) {
      this.setState({
        taskName: '',
        isEdit: false,
        editId: null,
        tasks: tasks.map((task) =>
          task.id === editId ? { ...task, taskName } : task
        ),
      });
    } else {
      const newTask: Task = {
        id: new Date().getTime(),
        taskName,
        completed: false,
      };
      this.setState({
        taskName: '',
        tasks: [...tasks, newTask],
      });
    }
  };

  handleEdit = (id: number) => {
    const task = this.state.tasks.find((t) => t.id === id);
    if (task) {
      this.setState({
        taskName: task.taskName,
        isEdit: true,
        editId: id,
      });
    }
  };

  handleDelete = (id: number) => {
    if (window.confirm('Bạn có chắc muốn xóa công việc này không?')) {
      this.setState({
        tasks: this.state.tasks.filter((task) => task.id !== id),
      });
    }
  };

  handleToggleComplete = (id: number) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    });
  };

  render() {
    const { taskName, tasks, isEdit } = this.state;
    const completedCount = tasks.filter((task) => task.completed).length;

    return (
      <div>
        <h1>DANH SÁCH CÔNG VIỆC</h1>
        <input
          type="text"
          placeholder="Thêm công việc"
          value={taskName}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>
          {isEdit ? 'Cập nhật' : 'Thêm'}
        </button>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => this.handleToggleComplete(task.id)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.taskName}
              </span>
              <button onClick={() => this.handleEdit(task.id)}>Sửa</button>
              <button onClick={() => this.handleDelete(task.id)}>Xóa</button>
            </li>
          ))}
        </ul>

        <p>
          Số lượng công việc hoàn thành: {completedCount} / {tasks.length}
        </p>
      </div>
    );
  }
}