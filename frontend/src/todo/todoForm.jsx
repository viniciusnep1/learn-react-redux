import React from 'react'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="row  todoForm">
        <div className="col-xs-12 col-sm-9 col-md-10">
            <input id="description" className="form-control" placeholder="Adicione um Produto" value={props.description} onChange={props.handleChange}></input>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-2">

            <IconButton style="success" icon="plus" text="Adicionar" onClick={props.handleAdd}></IconButton>
        </div>
    </div>
)