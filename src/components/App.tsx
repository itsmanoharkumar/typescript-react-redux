import React from "react";

interface AppProps {
    color: string
}

export class App extends React.Component<AppProps> {

    constructor(props: AppProps) {
        super(props);

        this.state = {counter: 0};
    }

    state = {counter: 0};

    onIncrement = (): void => {
        this.setState({counter: this.state.counter++})
    }

    onDecrement = (): void => {
        this.setState({counter: this.state.counter--})
    }

    render() {
        return <div>{this.props.color}</div>
    }
}
