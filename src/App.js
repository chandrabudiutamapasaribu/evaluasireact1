import React, { Component } from 'react';
import {data} from './Data';
import './App.css';
// import Bisa from './NewsApp'

class App extends Component {
  constructor () {
    super()
    this.state = {
      dataku: []
    }
  }

  componentDidMount() {
    this.setState({
      dataku: data
    }) 
  }

  // render() {
  //   return (
  //  <div>
  //    {this.state.dataku.map((ini,i) => { 
     
  //    <div key={i} className='title'>{ini.title}</div>}
  //    )}
  //   )
  // }

  //  </div>
  // }
render() {
  return (
    <div className='granpa'>
      <div className='header'>
        <div>News App</div>
      </div>
      {this.state.dataku.map((param,index) => {
        return (        

                      <div className='parent'>
                        <div className="lis">
                          <img className="thumbnail" src={param.thumbnail}/>

                        </div>
                                
                            <div key={index} className='kumpulan'>
                              <div className="title">{param.title}</div>
                              <div className='pubDate'>{param.pubDate}</div>
                              <div className='author'>{param.author}</div>
                            </div>
                            </div>
     
        )
      })}
      
    </div>
  )
}
}
export default App;
