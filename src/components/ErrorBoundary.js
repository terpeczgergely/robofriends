import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
            super(props);
            this.state = { 
                hasError: false 
            };
        }

    componentDidCatch(next, nextComponent
        ) {
            this.setState({ hasError: true });
        }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;