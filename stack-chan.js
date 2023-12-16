module.exports = function(RED) {
    function StackChan(config) {
        var node = this;
        RED.nodes.createNode(this, config);
        node.on('input', function(msg) {
            node.send(msg);
        });
    }
    RED.nodes.registerType("stack-chan", StackChan);
}
