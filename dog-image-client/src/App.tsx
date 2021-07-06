import React from 'react';
import Form from './components/Form';
import Image from './components/Image'

type State = {
  image?: string
};

class App extends React.Component<State>  {
  state: State = {
    image: ''
  }

  handleCallback = (childData: string) =>{
    this.setState({image: childData})
  }

  render() {
    return (
      <div>
        {/* pass from  */}
        <Form parentCallback={this.handleCallback}  /> 
        {/* pass to */}
        <Image image={this.state.image}/>  
      </div>
    );
  }
}

export default App;