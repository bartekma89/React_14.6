var Counter = React.createClass({

    getDefaultProps: function() {
        console.log('Default props...');
    },

    getInitialState: function() {
        return {
            counter: 0
        }
    },

    componentWillMount: function() {
        console.log('Component is mounting')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        })
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', { onClick: this.increment }, 'Increment'),
            React.createElement('button', { onClick: this.decrement }, 'Decrement'),
            React.createElement('span', {}, 'Result -> ' + this.state.counter)
        );
    },

    componentDidMount: function() {
        console.log('Component mounted')
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('Component will receive props ', nextProps);
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('should component update -> ', nextState.counter);
        return nextState.counter === this.state.counter;
    },

    componentWillUpdate: function(nextProps, nextState) {
        console.log('component will update -> ', nextState.counter);
    },

    componentDidUpdate: function(prevProps, prevState) {
        console.log('component did update -> ', prevState.counter);
    }

});