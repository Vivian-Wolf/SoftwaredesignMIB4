namespace Lection_Tree {

    let habsburgerStammbaum: Tree<String> = new Tree<String>();
    habsburgerStammbaum.name = "Habsburg";
    let philippI: Tree<String> = habsburgerStammbaum.createNode("Phillip I.");
    let karlV: Tree<String> = habsburgerStammbaum.createNode("Karl V.");
    let ferdinandI: Tree<String> = habsburgerStammbaum.createNode("Ferdinand I.");
    let philippII: Tree<String> = habsburgerStammbaum.createNode("Phillip II.");
    let maximilianII: Tree<String> = habsburgerStammbaum.createNode("Maximilian II.");
    let ferdinandIITirol: Tree<String> = habsburgerStammbaum.createNode("Ferdinand III. von Tirol");
    let karlII: Tree<String> = habsburgerStammbaum.createNode("Karl III.");
    let phillipIII: Tree<String> = habsburgerStammbaum.createNode("Phillip III.");
    let rudolfII: Tree<String> = habsburgerStammbaum.createNode("Rudolf II.");
    let matthias: Tree<String> = habsburgerStammbaum.createNode("Matthias");
    let ferdinandII: Tree<String> = habsburgerStammbaum.createNode("Ferdinand II");
    let leopoldV: Tree<String> = habsburgerStammbaum.createNode("Leopold V.");

    philippI.appendChild(karlV);
    karlV.appendChild(philippII);
    philippII.appendChild(phillipIII);
    philippI.appendChild(maximilianII);
    maximilianII.appendChild(rudolfII);
    maximilianII.appendChild(matthias);
    ferdinandI.appendChild(ferdinandIITirol);
    ferdinandI.appendChild(karlII);
    karlII.appendChild(ferdinandII);
    karlII.appendChild(leopoldV);

    console.log(habsburgerStammbaum.printTree());
}