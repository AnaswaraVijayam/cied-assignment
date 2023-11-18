function transform(input) {
  const output = [];
  // this function searches for menu item with a specific id in an array.
  // if it found it returns the menu item.else it contnue searching.
  function findParent(id, array) {
    for (const data of array) {
      if (data.id === id) {
        return data;
      }
      if (data.child) {
        const parent = findParent(id, [data.child]);
        if (parent) {
          return parent;
        }
      }
    }
  }
  // It adds a menue item to its parent. if the parent already has child the,
  // function recursively call it self to find the child.
  function addToParent(data, parent) {
    if (!parent.child) {
      parent.child = data;
    } else {
      addToParent(data, parent.child);
    }
  }
  // loop through each menu item in the input array
  for (const data of input) {
    const parentId = data.parent.id;
    // each menu item get it parent id and use findparent function to get the parent menu itemin the output array.
    const parent = findParent(parentId, output);
    // add to parent add the current menu item to its parent.no parent found it top-level menu.
    // so push it to output array.
    if (parent) {
      addToParent(data, parent);
    } else {
      output.push(data);
    }
  }

  return output;
}

const input = [
  {
    name: "Menu3",
    id: "1",
    parent: {
      name: "Menu2",
      id: "2",
      parent: {
        name: "Menu1",
        id: "3",
      },
    },
  },
  {
    name: "Menu44",
    id: "11",
    parent: {
      name: "Menu33",
      id: "22",
      parent: {
        name: "Menu22",
        id: "33",
        parent: {
          name: "Menu11",
          id: "44",
        },
      },
    },
  },
];

const output = transform(input);
console.log(JSON.stringify(output));
