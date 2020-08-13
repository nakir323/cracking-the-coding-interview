/**
 * 有向グラフ全体を表すクラス
 */
class DirectedGraph {
    constructor(nodes) {
        this.nodes = nodes;
    }

    /**
     * @type {Array<DirectedGraphNode>}
     */
    nodes;
}

/**
 * 有向グラフのノード
 */
class DirectedGraphNode {
    constructor(name, children) {
        this.name = name;
        this.children = children;
    }
    /**
     * @type {string}
     */
    name;
    /**
     * @type {Array<DirectedGraphNode>}
     */
    children;
}

/**
 * 
 * @param {Array<{name:string, children:Array<object>}>} graphElements 
 */
function createGraph(graphElements) {
    /**
     * @type {Array<DirectedGraphNode>}
     */
    let nodes = [];

    for (element of graphElements) {
        nodes.push(new DirectedGraphNode(element.name, element.children ? element.children : []));
    }

    return new DirectedGraph(nodes);
}

module.exports = {
    DirectedGraph,
    DirectedGraphNode,
    createGraph,
}
