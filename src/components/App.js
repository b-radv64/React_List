import React, { Component } from 'react';
import List from './List.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      text: '',
      value: '',
      listArray : [],
    }
    this.updateInfo = this.updateInfo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }  

  removeElement(index){
    this.setState({
      listArray: this.state.listArray.filter(function (e, i) {
        return i !== index;
      })
    });
  }

  updateInfo(e){
    e.preventDefault();
    if(this.state.input === ''){
      alert("Textbox Empty");
    }
    else{
      this.setState({
        listArray: this.state.listArray.concat(<List list={this.state.input} />)
      });
      this.setState({input: this.state.value});
    }
  }

  onChange(e){
    this.setState({input: e.target.value})
  };

  render(){
    var list = this.state.listArray.map(function(item, i) {
      return <li key={ i }>
          <div>{ item }<button onClick={ this.removeElement.bind(this, i) }>X</button></div>
      </li>
    }, this);
    return (
      <div>
        <h1>To-Do</h1>
        <div>
            <form onSubmit={this.updateInfo}>
              <label>
                <input type="text" value={this.state.input} onChange={this.onChange} />
              </label>
            <button>+</button>
            </form>
        </div>
        <div>
          <ol>
            {list}
          </ol>
        </div>
      </div>
    )
  }
};
export default App;
