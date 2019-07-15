console.log('App.js is running')

//JSX - JavaScript XML


const app = {
    title: 'Indecision App',
    subtitle: 'Here ur informacion',
    options: []
};

const onFormSubmit = (e) => {

    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){

        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }

}

const appRoot = document.getElementById('app');

const remove = () =>{

    app.options = [];
    render();

}

const makeDecision = () => {

    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);

}
const render  = () => {


    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
        
            <p>{app.options.length > 0 ? 'Here are your options ' : 'No options'}</p>

            <button disabled={app.options.length === 0}onClick={makeDecision}>What should i do....</button>
            <button onClick = {remove}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
        
        ReactDOM.render(template, appRoot);
}


render();

