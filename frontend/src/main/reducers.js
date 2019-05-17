import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'ler livro',
        list: [{
            _id: 1,
            description: 'ler livro ruim',
            done: true
        },{
            _id: 2,
            description: 'ler livro bom',
            done: false
        },{
            _id: 3,
            description: 'ler livro meia boca',
            done: false
        }]
    })
})

export default rootReducer