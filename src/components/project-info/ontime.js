import React, {Component} from 'react';

export default class OnTime extends Component {
    render() {
        return (
            <div className="project-details">
                ontime
                <button onClick={this.props.onClickCloseProject}>close</button>
            </div>
        )
    }
}
