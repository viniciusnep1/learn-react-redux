import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () =>{
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markDone col-md-10' : 'col-md-10'}>
                    {todo.description}
                </td>
                <td className="text-right">
                    <IconButton style="success" icon="check" text="" onClick={() => props.handleMarkDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style="primary" icon="undo" text="" onClick={() => props.handleMarkPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style="danger" icon="trash" text="" onClick={() => props.handleDelete(todo._id)} hide={!todo.done}></IconButton>
                </td>
            </tr>
        ))

    }


    return(
        
        <div className="">
            <br/>
            <table className='table'>
                <thead>
                    <tr>
                        <th className="col-md-10">Descrição</th>
                        <th className="col-md-2 text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
        
    )

}