import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    render() {
       
        return (
          <form onSubmit={(event) => {this.props.cb_submit(this.state.value); event.preventDefault();this.setState({value:''});}}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit"/>
            <input type="reset" value="Clear" onClick ={()=> this.props.cb_clear()}/>
          </form>
        );
    }
}
export default TodoForm;