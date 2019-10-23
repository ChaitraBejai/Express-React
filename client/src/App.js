import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data :''
    }
  }
  fetchit = () => {
    fetch('/getUsers').then(res => res.json()).then(result => console.log(result))
}

  render() {
  return (
    <div className="App">
        <h1>Enter User Details</h1>
        <form method="post" id="userForm" action="/users">
            <input type="text" name="name" placeholder="username*" required />
            <input type="number" name="phone" placeholder="phone*" required />
            <select name="paymentMode*" required >
                <option value="">Select Payment Mode</option>
                <option value="Gpay">Gpay</option>
                <option value="Paytm">Paytm</option>
                <option value="Cash">Cash</option>
            </select>
            <input type="text" name="savedLoc" placeholder="Home Location" />
            <input type="number" name="rating" placeholder="Rating out of 5" />
            <input type="submit" value="Submit" />
        </form>
        <h1>Enter Driver Details</h1>
        <form method="post" action="/drivers">
            <input type="text" name="name" placeholder="username*" required />
            <input type="number" name="phone" placeholder="phone*" required />
            <select name="paymentModeAccepted" required >
                <option value="">Select Payment Mode*</option>
                <option value="Gpay">Gpay</option>
                <option value="Paytm">Paytm</option>
                <option value="Cash">Cash</option>
            </select>
            <select name="cars" required >
                <option value="">Select</option>
                <option>Uber Go</option>
                <option>Uber XL</option>
                <option>Uber Premium</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
        <button onClick={this.fetchit}>See Users</button>
        <div>
            <h2>User Details:</h2>
            <ul>
                {this.state.data}
            </ul>
        </div>

    </div>
  );
}
}

export default App;
