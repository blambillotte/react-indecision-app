const appRoot = document.getElementById('app');

let visible = false;

const updateVisiblity = () => {
  visible = !visible;
  renderCounterApp();
}


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Visiblity Toggle</h1>
      <button onClick={updateVisiblity}>Toggle Visiblity</button>
      {visible ? <span>Here's some visible content</span> : ''}
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
