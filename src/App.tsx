import React, {useState} from 'react';
import './App.css';
import {list, listType} from "./list/list";
import {Buttons, InputSelector, ListSelector} from './list/inputSelector';
import {v1} from "uuid";


export type filteredDebtorsType = 'all' | 'big' | 'small'

function App() {

    let [debtors, setDebtors] = useState<Array<listType>>(list)
    let [filteredDebtors, setfilteredDebtors] = useState<filteredDebtorsType>('all')

    const removeDebtors = (id: string) => {
        const newDebtors = debtors.filter(d => d.id !== id)
        setDebtors(newDebtors)
    }

    const changeDebtors = (rfilteredDebtors: filteredDebtorsType) => {
        setfilteredDebtors(rfilteredDebtors)
    }
    const getDebtors = () => {
        if (filteredDebtors === 'big') {
            return ( debtors.filter(d=>d.count>500) )
        }
        if (filteredDebtors === 'small') {
            return ( debtors.filter(d=>d.count<=500) )
        }
        else {
            return ( debtors )
        }
    }

    const addDebtors = (name: string, count: number) => {
        const newDebtors: listType = {
            id: v1(),
            name: name,
            count: count
        }
        const newAddDebtors = [newDebtors, ...debtors]
        setDebtors(newAddDebtors)
    }

    return (
        <div className="App">
            <InputSelector addDebtors={addDebtors} />
            <ListSelector debtors={getDebtors()} remove={removeDebtors} />
            <Buttons changeDebtors={changeDebtors}/>
        </div>
    );
}

export default App;
