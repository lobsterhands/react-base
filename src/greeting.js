import React from "react";

export default React.createClass({
    render: function() {
        return (
            <div className="greeting">
                <h2>Hello, {this.props.name}!</h2>
            </div>
        );
    }
});