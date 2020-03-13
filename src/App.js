import React,{Component} from 'react';
import MovieContainer from './Components/MovieContainer'
import './App.css';
import WithLoading from './Components/WithLoading';



const ListWithLoading = WithLoading(MovieContainer);

class App extends Component {
  state={
    loading: true
  }
  componentDidMount() {
    setTimeout(() => 
      this.setState({ loading: false}),10000)

  }
  // EndLoading=()=>{
  // setTimeout(() => {
  //   this.setState({ loading: false });
  // }, 50);}



  render(){
    return (
      <div className="App">
        <ListWithLoading isLoading={this.state.loading}  />
      </div>
    );
  }

 
}

export default App;
