var MultiplyDivide = React.createClass({

    getInitialState: function() {
        return {
            result: 1
        }
    },

    multiplyBy2: function() {
        this.setState({
            result: this.state.result * 2
        })
    },

    multiplyBy3: function() {
        this.setState({
            result: this.state.result * 3
        })
    },

    multiplyBySelf: function() {
        this.setState({
            result: this.state.result * this.state.result
        })
    },

    divideBy2: function() {
        this.setState({
            result: this.state.result / 2
        })
    },

    divideBy3: function() {
        this.setState({
            result: this.state.result / 3
        })
    },

    divideBySelf: function() {
        this.setState({
            result: this.state.result / this.state.result
        })
    },

    reset: function() {
        this.setState({
            result: 1
        })
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', { onClick: this.multiplyBy2 }, 'Multiply By 2'),
            React.createElement('button', { onClick: this.multiplyBy3 }, 'Multiply By 3'),
            React.createElement('button', { onClick: this.multiplyBySelf }, 'Multiply By Self'),
            React.createElement('button', { onClick: this.divideBy2 }, 'Divide By 2'),
            React.createElement('button', { onClick: this.divideBy3 }, 'Divide By 3'),
            React.createElement('button', { onClick: this.divideBySelf }, 'Divide By Self'),
            React.createElement('button', { onClick: this.reset }, 'Reset'),
            React.createElement('span', {}, 'Result ' + this.state.result)
        )
    }
})