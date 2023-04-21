import React from 'react';

const Select = ({type, options, onChange, placeholder}) => {
    return (
        <select className="selector"
                name={type}
                onChange={onChange}
                defaultValue={"null"}
        >
            <option
                className={"selector__option"}
                value="null"
                disabled
            >
                {placeholder}
            </option>
            {options.map((option, index) =>
                <option key={option.name} value={index} className={"selector__option"}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;