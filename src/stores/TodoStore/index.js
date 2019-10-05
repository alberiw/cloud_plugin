import { observable, action } from 'mobx';

class TodoStore {
    @observable index = 0;

    @observable todos = [];

    @observable draft = '';

    @action updateDraft = e => {
        this.draft = e.target.value;
    };

    @action fetchTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => {
                this.todos = json.map(todo => ({
                    key: todo.id,
                    value: todo.title,
                    done: todo.completed,
                }));
                this.index = this.todos.length + 1;
            });
    };

    @action addTodo = () => {
        this.todos.push({ key: this.index, value: this.draft, done: false });
        this.index += 1;
        this.draft = '';
    };

    @action toggleTodo = key => {
        const index = this.todos.findIndex(e => key === e.key);
        const todo = this.todos[index];
        todo.done = !todo.done;
    };

    @action deleteTodo = key => {
        const index = this.todos.findIndex(e => key === e.key);
        this.todos.splice(index, 1);
    };
}

const store = new TodoStore();
export default store;
