import React, { ChangeEvent } from 'react';

type Prop = {
    image?: string,
    parentCallback: Function
}
type State = {
    input?: string
};

class Form extends React.Component<Prop, State> {
    state: State = {
        input: '',
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ input: event.target.value });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {  //try Axios??
        event.preventDefault();
        
        fetch('https://dog.ceo/api/breeds/image/random', {
            method: 'GET',
            // body: JSON.stringify(this.state.input), //no params permitted here 
        })
            .then(res => res.json())
            .then(data => {
                this.props.parentCallback(data.message) //pass image back to parent 
                console.log(data)
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Input:
                    <input type="text" value={this.state.input} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;

