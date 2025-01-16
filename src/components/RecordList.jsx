/* eslint-disable react/prop-types */
export const RecordList = (props) => {
    // eslint-disable-next-line react/prop-types
    const {records, total, onClickDelete} = props;
    return (
        <>
            <div>
                {records.map((record, index) => (
                <div key={record.id} style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" , marginBottom: "10px"}}>
                    <p className="todo-item">{record.title}:{record.time} hours</p>
                    <button onClick={() => onClickDelete(index, record.id)}>Delete</button>
                </div>
                ))}
            </div>
            <div>Total Hours: {total}/1000(h)</div>
        </>
    )
}