import React, {Component} from 'react'
import './App.css' 
const data = [
  { id: 'snare', letter: 'Q', 
  src: 'https://www.myinstants.com/media/sounds/snare.mp3' }, 
  { id: 'bass 1', letter: 'W', 
  src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' }, 
  { id: 'bongo', letter: 'E', 
  src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' }, 
  { id: 'tom tom', letter: 'A', 
  src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' }, 
  { id: 'bass 3', letter: 'S', 
  src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' }, 
  { id: 'shotgun', letter: 'D', 
  src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' }, 
  { id: 'high hat', letter: 'Z',
   src: 'http://www.denhaku.com/r_box/tr707/closed.wav' }, 
  { id: 'drum hit', letter: 'X', 
  src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },

   { id: 'laser', letter: 'C', 
   src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
] 
class  Drumpad extends Component {  
  handleClick = () => {
    this.audio.play() 
    this.props.handleDisplay(this.props.id)
  } 
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyDown)
  } 
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown)
  } 
  handleKeyDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()){
      this.audio.play() 
      this.props.handleDisplay(this.props.id)
    }
  }
  render(){
  return(
    <div className="drum-pad col p-3 border bg-info"
     id={this.props.id} 
     onClick={this.handleClick}> 
      <p>{this.props.letter}</p> 
      <audio  
      ref={ref => this.audio = ref}
      className="clip"
      src={this.props.src}
      id={this.props.letter} 
      > 
    
      </audio>

    </div>
  ) 
  }
}
class App extends Component{ 
  constructor(props){
    super(props) 
    this.state = {
      display: ''
    }
  }  
  handleDisplay = display => {
    this.setState({display: display})
  }
  
  render(){
    return(
      <div className="container">
        <h1>Drum Machine</h1> 
        <div id="drum-machine">  
          <div id="display"> 
            <h5>{this.state.display}</h5>
          </div>  
          <div className="container">
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
 
            
            
              {data.map(d => (
                <Drumpad id={d.id} 
                letter={d.letter} 
                src={d.src} 
                handleDisplay={this.handleDisplay}
                />
              ))} 
              
            
            </div>

          </div>


 




          </div>


        </div>
      
    )
  }
} 
export default App