console.log('App.js is Running!');

const appRoot = document.getElementById('app');

//Create app object with Title and Subtitle

//Only render the subTitle if it exist.
//Conditionally render new p tag - if options.length > 0 "Here are your options", else "No Options"

const app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  renderApp();
}

const removeAll = () => {
  app.options = [];
  renderApp()
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do? </button>

      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>Option: {option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
