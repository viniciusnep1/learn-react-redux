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
        this.handleMarkDone = this.handleMarkDone.bind(this)
        this.handleMarkPending = this.handleMarkPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh(this.state.description)
        
    }

    refresh(params = ''){
        const search = params ? `&description__regex=/${params}/` : ''
        Axios.get(`${URL}?sort=-createdAt${search}`)
        .then(response => this.setState({...this.state, params, list: response.data}))
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
        .then(response => this.refresh(this.state.description))
    }

    handleMarkDone(params){
        Axios.put(`${URL}/${params._id}`, {...params, done: true}).then(response => this.refresh(this.state.description))
    }


    handleMarkPending(params){
        Axios.put(`${URL}/${params._id}`, {...params, done: false}).then(response => this.refresh(this.state.description))
    }
    
    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    render(){

        return(

            <div className="">

                <PageHeader 
                    name="Tarefas" 
                    small="Cadastro">
                </PageHeader>

                <TodoForm 
                    description={this.state.description} 
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch} 
                    handleChange={this.handleChange}
                    handleClear={this.handleClear}>
                </TodoForm>

                <TodoList 
                    list={this.state.list} 
                    handleDelete={this.handleDelete} 
                    handleMarkPending={this.handleMarkPending} 
                    handleMarkDone={this.handleMarkDone}>
                </TodoList>

            </div>

        )

    }
}