import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import {filteredDebtorsType} from "../App";
import {listType} from "./list";

export type ListSelectorType = {
    debtors: Array<listType>
    remove: (id: string) => void
}
export type InputSelectorType = {
    addDebtors: (name: string, count: number) => void
}

export type ButtonsType = {
    changeDebtors: (rfilteredDebtors: filteredDebtorsType) => void
}

export const InputSelector = (props: InputSelectorType) => {
    const [nameTitle, setNameTitle] = useState<string>('')
    const [countTitle, setCountTitle] = useState<string>(' ')
    const changeNameTitle = (e: ChangeEvent<HTMLInputElement>) => setNameTitle(e.currentTarget.value)
    const changeCountTitle = (e: ChangeEvent<HTMLInputElement>) => setCountTitle(e.currentTarget.value)
    const addNameTitle = () => {
        props.addDebtors(nameTitle, Number(countTitle))
        setNameTitle(' ')
        setCountTitle( ' ')
    }
    const onKeyPressAddTitle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNameTitle()
        }
    }
    return (
        <div className={'inputSelector'}>
            <h1>Debtors</h1>
            <p className={'inputSelector__p'}>Add debtors</p>
            <input value={nameTitle} type="text" placeholder='name' onKeyPress={onKeyPressAddTitle} onChange={changeNameTitle} />
            <input value={countTitle} type="number" placeholder='indebtedness' onKeyPress={onKeyPressAddTitle} onChange={changeCountTitle}/>
            <button onClick={addNameTitle}>+</button>
        </div>
    )
}
export const ListSelector = (props: ListSelectorType) => {
    const list = props.debtors.map((d) => {
        return (
            <div className={'listOfDebtors'}>
                <li>{d.name} - {d.count} руб.</li>
                <button onClick={() => {
                    props.remove(d.id)
                }}>x
                </button>
            </div>
        )
    })
    return (<div>
            {list}
        </div>
    )
}

export const Buttons = (props: ButtonsType) => {
    return (
        <div className={'buttons'}>
            <button onClick={() => {
                props.changeDebtors('all')
            }}>all
            </button>
            <button onClick={() => {
                props.changeDebtors('big')
            }}>big
            </button>
            <button onClick={() => {
                props.changeDebtors('small')
            }}>small
            </button>
        </div>
    )
}