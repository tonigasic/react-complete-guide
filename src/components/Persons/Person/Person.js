import React , {Component} from 'react';
import './Person.css';

class Person extends Component {
    render() {
        console.log('person.js rendering...');
        return (
            <div className="Person">
                <p onClick={this.props.click}>I am {this.props.name} and i am {this.props.age}</p>
                <div>{this.props.children}</div>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
        {/*<Person*/}
        {/*    name={this.state.persons[0].name}*/}
        {/*    age={this.state.persons[0].age}*/}
        {/*/>*/}
        {/*<Person*/}
        {/*    name={this.state.persons[1].name}*/}
        {/*    age={this.state.persons[1].age}*/}
        {/*    click={this.switchNameHandler.bind(this, 'drugo ime Ivanovo')}*/}
        {/*    changed={this.nameChangedHandler}*/}
        {/*>*/}
        {/*    <p>My my my</p>*/}
        {/*</Person>*/}
        {/*<Person*/}
        {/*    name={this.state.persons[2].name}*/}
        {/*    age={this.state.persons[2].age}*/}
        {/*/>*/}
    }
}

export default Person;