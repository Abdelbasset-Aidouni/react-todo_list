import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import axios from 'axios';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
import './App.css';

class App extends Component{
  state = {
    todos:[]
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos:res.data}));
  }
  markComplete = (id)=> {
    this.setState({todos : this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  delTodo     = (id) =>{
    console.log("the id ",id);
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id )] });
  }

  addTodo = (title) => {
    const newTodo = {
      id : this.state.todos.length + 1,
      title,
      completed : false
    }
    this.setState({todos : [...this.state.todos, newTodo]});
  }

  render(){
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )} />
          <Route path='/about' component={ About }/>
        </div>
      </Router>
    );
  }
}

export default App;
