import React from 'react'
import IconButton from '../template/iconButton'


export default props => {
    const renderRows = () =>{
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className="col-md-10">
                    {todo.description}
                </td>
                <td>
                    <IconButton style="danger" icon="trash" text="" onClick={() => props.handleDelete(todo._id)} ></IconButton>
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
                        <th className="col-md-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
        
    )

}