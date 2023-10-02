export const Task = (props) => {
    return (
        <div>
            <h3 style={ {backgroundColor:props.complete && "green"} }>{props.name}</h3>
            <button onClick={()=>props.deleteTask(props.id)}>X</button>
            <button onClick={()=>props.update(props.id)}>Complete/Incomplete</button>
        </div>
    );

}