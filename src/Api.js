import React from 'react';
//import axios from 'axios';
/**
 * App
 *
 * Simple react js fetch example
 */
class Forex extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {
//https://jsonplaceholder.typicode.com/users
        fetch('https://springherocudemo.herokuapp.com/welcome')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded } = this.state;
        console.log(this.state.items);
   
        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="Forex">
            {this.state.items.name} {this.state.items.age} {this.state.items.count}
            </div>
        );

    }

}

export default Forex;