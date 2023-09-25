import React, {useState} from 'react';
import todo from "../images/sticky-note.png"
import "../App.css";



const Todo = () => {

    const [inputData,setInputData] = useState('');
    const [items, setItems] = useState([]);


    //For adding items
    const addItem = () => {
        if (!inputData){
            alert("You cannot add blank data!");
        }else{
            setItems([...items,inputData]);
            setInputData('');
        }

    }

    //For delete items
    const deleteItem = (id) => {
        console.log(id);
        const updateitems = items.filter((elem, ind) => {
            return ind !== id;
        })
        setItems(updateitems)
    }

    //For removing all items
    const removeAll = (id) => {
        setItems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt = 'This is todoimage'/>
                        <figcaption>Add Your Lists Here ✌️📃</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add Items..." 
                            value= {inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i class="fa fa-solid fa-plus fa-beat-fade add-btn" title="Add Item" onClick={addItem}></i>
                    </div>

                    <div className="showItems">
                        {
                            items.map((elem,ind) => {
                                return(
                                    <div className="eachItem" key={ind}>
                                        <h3>{ elem }</h3>
                                        <i class="fa-solid fa-trash-alt fa-beat-fade add-btn" title="delete Item" onClick={() => deleteItem(ind)}></i>
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Todo;