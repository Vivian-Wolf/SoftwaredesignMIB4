namespace Lection_Tree {

    export class Tree<T> {

        name: T;
        children: Tree<T>[] = [];

        // constructor(_name: T) {
        //   this.name = _name;
        //}

        createNode(_content: T): Tree<T> {
            let newNode: Tree<T> = new Tree<T>();
            newNode.name = _content;
            return newNode;
        }

        appendChild(_child: Tree<T>): void {
            this.children.push(_child);
        }

        deleteChild(_child: Tree<T>): void {
            for (let i: number = 0; i < this.children.length; i++) {
                if (_child === this.children[i])
                    this.children.splice(i, 1);
            }
        }

        printTree(_childrenPosition: number = 0): String {
            let treeString: String = this.name + "\n";
            let childrenPositionString: String = "";

            for (let i: number = 0; i < _childrenPosition; i++) {
                childrenPositionString += "#";
            }

            treeString = "" + childrenPositionString + treeString;
            _childrenPosition++;

            for (let i: number = 0; i < this.children.length; i++) {
                treeString += "" + this.children[i].printTree(_childrenPosition);
            }
            
            return treeString;
        }
    }
}