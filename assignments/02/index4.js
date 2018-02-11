const TimeDisplay = (Time) => {
  var centiseconds = formatTime (Math.floor(Time.x % 1000 / 10));
  var minutes = formatTime (Math.floor(Time.x / 60000));
  var seconds =formatTime ( Math.floor(Time.x % 60000 / 1000));

    return (
      <div>   
        {minutes}:{seconds}:{centiseconds}
      </div>
    )
}

const formatTime = (time) => {
  if(time < 10) {
    return '0' + time;
  }
  return time;
}

class Watch extends React.Component {
  // pass in start time, end time
  constructor(props) {
    super(props);

    this.state = {
      currentMilliseconds: props.currentMilliseconds
    };

    this.counter();
  }
  // use setInterval
  counter() {
    setInterval(
      function() {
        let newTime =
          this.state.currentMilliseconds;

        // thought here... talk in a second
        newTime += 10;
        this.setState({
          currentMilliseconds: newTime
        });
      }.bind(this),
      10
    );
  }
  render() {
    return (
      <div>
        <TimeDisplay
            millisecond={
              this.state.currentMilliseconds
            }
          />
        Hello world!
        {this.state.currentMilliseconds}
      </div>
    );
  }
}
/*

class Watch extends React.Component{
  constructor(props) {
    super(props);
    this.stat = {
      currentMilliseconds:props.currentMilliseconds
    };
  }
  render() {
    return (
      <div>
        <TimeDisplay
            millisecond={
              this.state.currentMilliseconds
            }
          />
        Hello world!
       {this.state.currentMilliseconds} 
      </div>
    );
  }
}
*/
function renderTime() {
  ReactDOM.render(
      <div>
        <TimeDisplay
          x="1638397"
        />
        <Watch startTime='123456' countDown='true' />
      </div>,
    document.getElementById('root')
);}
  
ReactDOM.render(
    <div>
      <h1>Assignment #2</h1>
      <TimeDisplay millisecond={789234}/>
      <Watch currentMilliseconds={55000}/>
    </div>,
    document.getElementById('root')
);
  renderTime();
  formatTime();