console.log('visible-toggle.js is running');

const app = {

title: 'Visibility Toggle',
flag: true

}

const toggle = () => {
    app.flag ? app.flag = false : app.flag = true;
    render();
}

const render = () => {
    const template = (

        <div>
            <h1>{app.title}</h1>
            <button onClick={toggle}>
            {app.flag ? 'Hide Details' : 'Show Details'}
            </button>
   
            {app.flag ? <p>This is more than you needed to know</p> : <p></p>}
            
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
}


render();