
function SelectStatus({todo, handleSelect}){
    const allStatus=["TODO", "DONE"];
    const handleChange = (e) => {
        handleSelect(todo, e.target.value);
    };

    return (
        <select value={todo.status} onChange={handleChange}>
            {allStatus.map(status => (
                <option key={status} value={status}>
                    {status}
                </option>
            ))}
        </select>
    );

}
export default SelectStatus;