/* Basic example demonstrating input - using stateful components */
class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      userInput: ''
    };
  }
  handleChange(e) {
    this.setState({userInput: e.target.value});
  }
  render() {
    return (
      <div>
          <p>
            Please enter some input
          </p>
          <input onChange={this.handleChange}/> 
          <button type="button" id="addButton">Add</button> 

      </div>
    ); 
  }
}

const renderBasicInput = () => {
  ReactDOM.render(
    <div>
      This is a simple example to demonstrate a reactive update.
       <BasicInput/> 
    </div>,
    document.getElementById('root')
  );
};


/*//(function() { 
let userinput = document.getElementsByTagName("input").value;
//console.log(userinput);
//let putHere = node.appendChild(userinput);
//let selectClassName = document.getElementsByClassName("add");
//selectClassName.appendChild(userinput);

  document.getElementById("addButton").onclick = function() {myfunction()}

  function myfunction() {  
    document.getElementById("addButton").innerHTML = userinput;
}

//}) ();*/


