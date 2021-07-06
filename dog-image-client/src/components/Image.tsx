import React, { Component } from 'react';

type Prop = {
    image?: string,
}

class Image extends React.Component<Prop> {

    render() {
        return (
            <div>
                <img src={this.props.image} />
            </div>
        );
    }
}

export default Image;