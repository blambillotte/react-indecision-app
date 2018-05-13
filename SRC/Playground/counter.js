let count = 0;
const addOne = () => {
  count ++;
  renderCounterApp();
  console.log('addOne', count);
};

const minusOne = () => {
  count --;
  renderCounterApp()
  console.log('minusOne');
}

const resetBtn = () => {
  count = 0;
  renderCounterApp();
  console.log('Reset');
}


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetBtn}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
