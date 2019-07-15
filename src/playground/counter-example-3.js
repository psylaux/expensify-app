//same as counter example-2 but done using stateless components and default values

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
   
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }

    handleAddOne(){
        this.setState((prev)=> {
            return {
                count: prev.count+1
            };
        });
    }

    handleMinusOne(){
        this.setState((prev)=> {
            return {
                count: prev.count-1
            };
        });
    }

    handleReset(){
        this.setState((prev)=> {
            return {
                count: 0
            }
        })
    }
}

Counter.defaultProps = {
    count: 0
}


ReactDOM.render(<Counter />, document.getElementById('app'));

