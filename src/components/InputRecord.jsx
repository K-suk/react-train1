export const InputRecord = (props) => {
    // eslint-disable-next-line react/prop-types
    const {about, hour, onChangeAbout, onChangeHour, onClickAdd} = props;
    return (
        <>
            <div>
                <input placeholder="About Study" value={about} onChange={onChangeAbout} />
                <input placeholder="length of study" value={hour} onChange={onChangeHour} />
                <button onClick={onClickAdd}>Add</button>
            </div>
        </>
    )
}