import * as React from 'react';

class Entry extends React.Component {

    render() {
        return (
            <div className="Entry">
                {this.props.name} {this.props.gren} {this.props.plassering}
            </div>
        );
    }
}

export default Entry;