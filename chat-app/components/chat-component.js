function ChatApp() {
    var messages = state.messages.map(function (msg) {
        return <li><strong>{msg.user}:</strong><span> {msg.body}</span></li>
    });

    return (
        <div>
            <ul>
                {messages}
            </ul>
            <p>someone {this.state.isTyping}</p>
            <input id="message" type="text" value={this.state.message} />
            <button onClick={() => self.submitMessage()}>Bam!</button>
            <input id="user" type="text" value={this.state.user} placeholder="pick a username"/>
        </div>
    )
}


module.exports = ChatApp;

//<p>someone {this.state.isTyping}</p>
//onKeyPress={this.handleTyping}