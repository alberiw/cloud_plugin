import React from 'react';
import { DynamicTableStateless } from '@atlaskit/dynamic-table';
import { inject, observer } from 'mobx-react';

import TodoItem from '../../components/TodoItem';
import NewTodoForm from '../../components/NewTodoForm';

@inject('TodoStore')
@observer
export default class TodoList extends React.Component {
    componentDidMount() {
        const { TodoStore } = this.props;
        TodoStore.fetchTodo();
    }
    render() {
        const { TodoStore } = this.props;

        const head = {
            cells: [
                {
                    key: 'task',
                    content: 'Tasks',
                },
            ],
        };

        const rows = TodoStore.todos.map(e => ({
            key: e.id,
            cells: [
                {
                    key: 'task',
                    content: (
                        <TodoItem
                            key={e.key}
                            value={e.value}
                            done={e.done}
                            onToggle={() => TodoStore.toggleTodo(e.key)}
                            onDelete={() => TodoStore.deleteTodo(e.key)}
                        />
                    ),
                },
            ],
        }));

        return (
            <>
                <DynamicTableStateless head={head} rows={rows} />
                <NewTodoForm
                    onChange={e => TodoStore.updateDraft(e)}
                    onSubmit={() => TodoStore.addTodo()}
                    value={TodoStore.draft}
                />
            </>
        );
    }
}
