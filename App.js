var h1=React.createElement("h1", {}, "H1 tag");
var h2=React.createElement("h2", {}, "H2 tag");
var child1=React.createElement("div", {id: "child1"}, [h1, h2]);
var child2=React.createElement("div", {id: "child2"}, [h1, h2]);
var parent=React.createElement("div", {id: "parent"}, [child1, child2]);

var heading = React.createElement("h1", 
{id: "heading", xyz: "abc"}, "Namaste Stuti from React");
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);