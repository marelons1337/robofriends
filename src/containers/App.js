import React from 'react';
import CardList from '../components/CardList'; 
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearch = (event) =>{
        this.setState({searchfield: event.target.value});
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (!this.state.robots.length) {
            return <h1>Loading...</h1>
        }else{
        return(
            <div className ='tc washed-blue'>
                <h1 className= 'f1 lh-title '>Robofriends</h1>
                <SearchBox searchChange = {this.onSearch}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList robots ={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )}
    };
}
 
export default App;