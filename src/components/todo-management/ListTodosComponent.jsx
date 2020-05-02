import React, {Component} from 'react'

class ListTodosComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            todos : [
                {id: 1, description: 'Learn React', done:false, targetDate: new Date()},
                {id: 2, description: 'Visit Turkey', done:false, targetDate: new Date()},
                {id: 3, description: 'Become Expert in React', done:false, targetDate: new Date()}
            ] 
        }
    }
    
    render(){
        return(
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Is Completed?</th>
                            <th>Target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map( todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTodosComponent;

