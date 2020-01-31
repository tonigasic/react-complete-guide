import React from 'react'

const cockpit = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div className="cockpit">
            <h1>{props.appTitle}</h1>
            <button
                style={style}
                onClick={props.clicked}
            >
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;