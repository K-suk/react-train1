import { useEffect, useState } from "react";
import './App.css'
import { InputRecord } from "./components/InputRecord";
import { RecordList } from "./components/RecordList";
import { supabase } from "./service/supabaseClient";

function App() {
  const [records, setRecrods] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [about, setAbout] = useState("");
  const [hour, setHour] = useState(0);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = records.reduce((sum, record) => sum + Number(record.time), 0);
    setTotal(newTotal);
  }, [records]);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      const { data, error} = await supabase
        .from('study-record')
        .select('*');
      if (error) {
        console.log('error');
      } else {
        setRecrods(data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  const onChangeAbout = (e) => {
    setAbout(e.target.value);
  }

  const onChangeHour = (e) => {
    setHour(e.target.value);
  }

  const onClickAdd = async() => {
    if (about === "" || hour === 0) {
      setError(true);
      return;
    }
    const newContent = {title: about, time: hour};
    const newRecords = [...records, newContent];
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase
      .from('study-record')
      .insert([{ title: about, time: hour}])
      .select();
    if (error) {
      console.log('error');
    } else {
      setRecrods(newRecords);
    }
    setAbout("");
    setHour(0);
    setError(false);
  }

  const onClickDelete = async(index, id) => {
    console.log(`id: ${id}, index: ${index}`)
    const newRecords = [...records];
    newRecords.splice(index, 1);
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase
      .from('study-record')
      .delete()
      .match({id})
    if (error) {
      console.log('error');
    } else {
      setRecrods(newRecords);
    }
  }
  
  return (
    <>
      {loading ? 
      <>
        <div>Loading...</div>
      </> :
      <>
        <h1>Study Record Listtttt</h1>
        <InputRecord about={about} hour={hour} onChangeAbout={onChangeAbout} onChangeHour={onChangeHour} onClickAdd={onClickAdd} />
        {error && <p style={{ color: "red" }}>You have to fill all the information.</p>}
        <RecordList records={records} total={total} onClickDelete={onClickDelete} />
      </>}
    </>
  )
}

export default App
