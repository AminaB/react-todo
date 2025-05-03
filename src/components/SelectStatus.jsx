import {useState} from "react";

function SelectStatus({todo, handleSelect}){
    const [value, setValue] = useState(todo.status);
    const allStatus=["TODO", "DONE"];
    const handleStatusSelect = (newStatus) => {
        setValue(newStatus);
        handleSelect(todo.id, newStatus); // Callback vers le parent
    };

    return (
        <>
            <select
                value={value}
                onChange={e => handleStatusSelect(e.target.value)}
            >
                <option value={value}>{value}</option>
                {allStatus.filter((status)=>value!==status).map(status => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </>
    );

}
export default SelectStatus;