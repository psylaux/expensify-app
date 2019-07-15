//VisibleToggle - render, constructor, handletogglevisibility
//visiblity -> false

console.log('visible-toggle-2.js is running');

class VisibleToggle extends React.Component {

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            flag: false
        }
    }

    toggle(){
        this.setState((prev)=> {
            return {
                flag: !prev.flag
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.flag ? 'Hide Details' : 'Show Details'}</button>
                {this.state.flag ? <p>This is more than you needed to know</p> : <p></p>}
            </div>
        );
    }

}

ReactDOM.render(<VisibleToggle />, document.getElementById('app'));