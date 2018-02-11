const MenuReturn = () => (
  <button onClick={renderMainMenu}>
    Return to Menu
  </button>
);

const renderMainMenu = () => {
  ReactDOM.render(
    <div>
        <h1>Welcome to JavaScript 5</h1>
        <span>Example Code</span>
        <ul>
            <li>
              <a onClick={renderHelloWorld} href="#">
                Hello World Example
              </a>
            </li>
            <li>
              <a onClick={renderBasicInput} href="#">
                Input Example
              </a>
            </li>
            {/* try adding your own code to the list */}
            
        </ul>
    </div>,
    document.getElementById('root')
  );
};

renderMainMenu();
