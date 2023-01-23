import React,{ useState } from "react";
import {addTodo,deleteTodo,removeTodo} from '../actions/index';
import {useDispatch,useSelector} from 'react-redux';
import './Todo.css';
import {FcPlus} from 'react-icons/fc'
import{AiFillDelete} from 'react-icons/ai'
const Todo=()=>{
    const[inputData,setInputData]=useState('')
    const list =useSelector((state)=>state.todoReducers.list);
    const dispatch=useDispatch();
    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add your List</figcaption>
                    </figure>
                        <div className="addItems">
                            <input type="text" placeholder="Add Items.."
                            value={inputData}
                            onChange={(event)=>setInputData(event.target.value)}
                            />
                            <FcPlus className="todo__icon"  onClick={()=>dispatch(addTodo(inputData),
                                setInputData(''))}/>
                            {/* <i className="fa fa-plus add-btn" ></i> */}
                        </div>
                                <div className="showItems">
                                    {
                                        list.map((elem,id)=>{
                                            return(
                                                <div className="eachItem" key={elem.id}>
                                                    <span className="spanElem">{elem.data}</span>
                                                    <div className="todo-btn">
                                                        <AiFillDelete className="todo__icon1" title="Delete" onClick={()=>dispatch(deleteTodo(elem.id))}/>
                                                       
                                                    </div>        
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div>
                                    <button className="btn__effect" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}>
                                        <span>Delete List</span>
                                    </button>
                                </div>
                </div>
            </div>

        </>
    )
}
export default Todo;