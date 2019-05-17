import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { changeDescription } from './todoAction'

const TodoForm = props => {

    return (<div role="form" className="row  todoForm">
        <div className="col-xs-12 col-sm-9 col-md-10">
            <input id="description" className="form-control" placeholder="Adicione um Produto" onChange={props.handleChange} value={props.description}></input>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-2">

        <IconButton style="dark" icon="plus" text="" onClick={props.handleAdd}></IconButton>
        <IconButton style="secondary" icon="search" text="" onClick={props.handleSearch}></IconButton>
        <IconButton style="warning" icon="times" text="" onClick={props.handleClear}></IconButton>
        </div>
    </div>)
}

const mapStateToProps = state =>({
    description: state.todo.description
})


export default connect(mapStateToProps)(TodoForm)