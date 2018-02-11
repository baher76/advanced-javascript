const formatTime = (time) => {
    if(time < 10) {
      return '0' + time;
    }
    return time;
  }

  function timeDispaly() {
    if(props.millisecond === 0) {
        return (
            <div>
                Times Up
            </div> 
        );
    } else {
        return (
    <div>
        
    </div>          
    );}

    ReactDOM.render(
    
      document.getElementById('root')
    )