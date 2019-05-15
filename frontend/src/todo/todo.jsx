import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'
import Axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{

    constructor(props){
        
        super(props);
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.refresh(this.state)

    }

    refresh(){

        Axios.get(`${URL}?sort=-createdAt`)
        .then(response => this.setState({...this.state, description: '', list: response.data}))

    }

    handleAdd(){

        const description = this.state.description
        Axios.post(URL, {description})
        .then(response => this.refresh())

    }

    handleChange(e){

        this.setState({...this.state, description: e.target.value});

    }

    handleDelete(params){

        Axios.delete(`${URL}/${params}`)
        .then(response => this.refresh())

    }
    
    render(){

        return(

            <div className="">
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}></TodoForm>
                <TodoList list={this.state.list} handleDelete={this.handleDelete}></TodoList>
            </div>

        )

    }
}