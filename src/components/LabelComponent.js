import React from 'react';

const LabelComponent = (props) => {
    const {label} = {...props};
    return (
        <div>
            <p>{label}</p>
        </div>
    )
};

export default LabelComponent;