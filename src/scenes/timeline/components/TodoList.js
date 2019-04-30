// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';

class TodoList extends Component {
    render(){
       return(
        <div className="container-ListItems">
        {this.props.tasks.map( (x,i) =><div className={`list-item ${x.completed ? "item-complete" :""}`} key={i} onClick={() => this.props.cb_click(i)}>{x.task}</div>
        )}
       </div>
       )
    }
};
export default TodoList