//same as counter example-3 but done using local storage

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
   
    componentDidMount(){
        try{
            const json = localStorage.getItem("count")
            const count = JSON.parse(json,10)

            if(!isNaN(count)){
                this.setState(() => ({ count }))
            }
        } catch (e) {
            //continue
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count',json);
        }
    }

    componentWillUnmount(){
        console.log("replacing data")
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

ReactDOM.render(<Counter />, document.getElementById('app'));

