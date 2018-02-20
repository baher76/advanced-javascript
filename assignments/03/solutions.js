function answer1() {
  /* Replace 'undefined' with some JSX */
  return (
    <div>Hello world</div>
  );
  //return undefined;
}

/* -----------------2---------------------------------- */

function answer2() {
  class BuggyComponent extends React.Component {
    render() {
      return (
        <div>
          a + b =  {this.props.a + this.props.b}
        </div>
      );      
    }
  }
  
  return (
    <BuggyComponent a={4} b={7}/>
  );
}

/* --------------------3------------------------------- */

function answer3() {
  function AddAPropToMe(someProps) {
    return (
      <div>
        {someProps.one}
        , {someProps.two}
        , {someProps.third}, 
         is a sort of fun game!
      </div>
    );
  }

  return (
    <AddAPropToMe
      one={'Tic'}
      two={'tac'}
      third={'toe'}
    />
  );
}
/* ---------------------4------------------------------ */
function answer4() {
  class InputComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        userInput: ''
      };
    }

    changeText(e){
        this.setState({userInput: e.target.value});
    }

    render() {
      return (
        <div>
          <input  onChange={this.changeText.bind(this)}/>
          <p >
            The user typed {this.state.userInput}
          </p>
        </div>
      );
    }
  }

  return <InputComponent />;
}
/* --------------------5------------------------------- */
function answer5() {
  class Dots extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }
    componentDidMount() {
      var counter = function() {
        console.log(this.state.count);
        this.setState({
          count: ((this.state.count + 1) % 3) + 1
        });
      }.bind(this);

      setInterval(counter, 1000);
    }
    render() {
      var dots = '';
      if(this.state.count% 3 === 0){
        return dots ='...';
      }
      else if (this.state.count%2 === 0){ 
        return dots ='..';
      }
      else {
      //if  (this.state.count% === 1){ 
        return dots ='.';
      }
/*    var threeDots = '...';
      var twoDots   = '..';
      var oneDot    = '.';
*/
      return (
        <div>
          {dots}
        </div>
      );
    }
  }

  return <Dots/>;
}
/* ------------------6--------------------------------- */
function answer6() {
  /*function convertMeToArrowSyntax(a, b, c) {
    return a * (b - c);
  }*/
  
  var convertMeToArrowSyntax= (a, b, c) => a * (b - c);
  
  /*(a, b, c) => {
    return a * (b - c);
  }
  return (3, 7, 5);*/
  return convertMeToArrowSyntax(3, 7, 5);
}
/* --------------------7------------------------------- */

function answer7() {
  var myObject = {
    x: 8,
    y: 3
  };

  function addXtoY() {
    return this.x + this.y;
  }
  var addNumbers = addXtoY.bind(myObject);
  try {
    return addNumbers();
  } catch(e) {
    return String(e);
  }
}
/* --------------------8------------------------------- */

function answer8() {
  var myObject = {
    x: 8,
    y: 3,
    addXtoY: function() {
      return this.x + this.y;
    }
  };
var answerQ8 = myObject.addXtoY.bind(myObject); // add this code 
  function Component(props) {
    return (
      <div>
        AddXtoY returned {props.callback()}
      </div>
    );
  }
    //console.log(addXtoY); // delete cosole log it makes problem
    return (
      <Component callback={answerQ8}/>
  );
}
