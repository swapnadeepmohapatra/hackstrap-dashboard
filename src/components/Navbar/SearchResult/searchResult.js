import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './searchResult.module.css';

export default function searchResult({ tag, result, navTo, setNull }) {
    return (
        <div className={Classes.searchResult}>
            {result.length > 0 ? <div className={Classes.headTag}>{tag}</div> : null}
            {result.map(el => {
                return (
                    <Link to={{ pathname: `/${navTo}/${el.id}`, state: `${el.id}` }} onClick={setNull} key={el.id}>
                        <div className={Classes.result}>{el.name}</div>
                    </Link>)
            })}
        </div>
    )
}
