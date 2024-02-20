
import './index.css'

function TodoItem(props) {
const {name, status, id} = props.data;
const {index, deleteTodo } =props;
let styleObj;
if(index % 2 == 1){
    styleObj ={
        backgroundColor: 'gray'
    }
}else{
    styleObj ={
        backgroundColor: 'white'
    }
}

}

function handleDelete(e){
    e.preventDefault();
    const isDelete = confirm(`Rostdan ham ${name} ni ochirmoqchimisiz?`)
    if(isDelete){
        deleteTodo(id)
    }
}
return (
    <div className="item-wrapper" style={styleObj}>
        <div className="check-name">
            <input type="checkbox" name='' id={'el'+id} />
            <label htmlFor={'el'+id}>{name}</label>
        </div>
        <div className="actions">
            <i className='fa-regular fa-pen-to-square'></i>
            <i className='fa-regular fa-trash-can' onClick={handleDelete}></i>
        </div>


    </div>


);
}

export default TodoItem;
