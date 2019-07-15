import React from 'react';
import Option from './Option';

export default (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                onClick={props.handleDeleteOptions}
                className="button button--link"
            >
                Remove All
        </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Add some knowledge to get going</p>}
        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    count={index + 1}
                    handleDeleteOneOption={props.handleDeleteOneOption}
                />
            ))
        }
    </div>
);
