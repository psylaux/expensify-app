import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleClearSelected = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOneOption = (optionToRemove) => {
        this.setState((prev) => (
            { options: prev.options.filter((option) => optionToRemove !== option) }
        ))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => (
            { selectedOption: option }
        ))
    }
    handleAddOption = (option) => {
        //error checking

        if (!option) {
            return 'Enter Valid Value pls';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prev) => ({ options: prev.options.concat(option) }))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            //Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log("replacing data");
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container" >
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOneOption={this.handleDeleteOneOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                        <OptionModal
                            selectedOption={this.state.selectedOption}
                            handleClearSelected={this.handleClearSelected}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

