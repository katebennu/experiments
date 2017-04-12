/**
 * Created by kbennu on 6.2.2017.
 */

var ChatApp = require('../components/chat-component');

// Container component class
var ChatAppContainer = React.createClass({
    getInitialState: function () {
        return {
            messages: [],
            socket: window.io('http://localhost:3000'), //why it returns "cannot GET" on port 3000 and works on a random one?
            user: null

        }
    },
    componentDidMount: function () {
        this.state.socket.on("receive-message", function (msg) {
            var messages = this.state.messages;
            messages.push(msg);
            this.setState({messages:messages});
            console.log(messages);
        }.bind(this));
    },

    submitMessage: function () {
        this.state.socket.emit("new-message", {
            body: this.state.message,
            user: this.state.user || "guest"
        });
    },

    render: function () {
        return <ChatApp/>
    }
});

ReactDOM.render(
    <ChatAppContainer/>,
    document.getElementById("chat")
);


/*
* FURTHER:
* 1) onChange function for message input to e.g. show when someone is typing a message
*
*
*
* */