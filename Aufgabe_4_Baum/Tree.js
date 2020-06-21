"use strict";
var Lection_Tree;
(function (Lection_Tree) {
    class Tree {
        constructor() {
            this.children = [];
        }
        // constructor(_name: T) {
        //   this.name = _name;
        //}
        createNode(_content) {
            let newNode = new Tree();
            newNode.name = _content;
            return newNode;
        }
        appendChild(_child) {
            this.children.push(_child);
        }
        deleteChild(_child) {
            for (let i = 0; i < this.children.length; i++) {
                if (_child === this.children[i])
                    this.children.splice(i, 1);
            }
        }
        printTree(_childrenPosition = 0) {
            let treeString = this.name + "\n";
            let childrenPositionString = "";
            for (let i = 0; i < _childrenPosition; i++) {
                childrenPositionString += "#";
            }
            treeString = "" + childrenPositionString + treeString;
            _childrenPosition++;
            for (let i = 0; i < this.children.length; i++) {
                treeString += "" + this.children[i].printTree(_childrenPosition);
            }
            return treeString;
        }
    }
    Lection_Tree.Tree = Tree;
})(Lection_Tree || (Lection_Tree = {}));
//# sourceMappingURL=Tree.js.map