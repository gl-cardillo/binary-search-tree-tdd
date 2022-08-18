import { Node, Tree } from "./BST";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

describe("Create tree", () => {
  it("it should create a tree correctly", () => {
    expect(tree.root).toEqual(
      expect.objectContaining({
        data: 8,
        left: {
          data: 4,
          left: {
            data: 1,
            left: null,
            right: {
              data: 3,
              left: null,
              right: null,
            },
          },
          right: {
            data: 5,
            left: null,
            right: {
              data: 7,
              left: null,
              right: null,
            },
          },
        },
        right: {
          data: 67,
          left: {
            data: 9,
            left: null,
            right: {
              data: 23,
              left: null,
              right: null,
            },
          },
          right: {
            data: 324,
            left: null,
            right: {
              data: 6345,
              left: null,
              right: null,
            },
          },
        },
      })
    );
  });
});

describe("methods of the binary search tree", () => {
  it("insert() should insert a new value in the tree", () => {
    expect(tree.insert(11)).toEqual(
      expect.objectContaining({
        data: 8,
        left: {
          data: 4,
          left: {
            data: 1,
            left: null,
            right: {
              data: 3,
              left: null,
              right: null,
            },
          },
          right: {
            data: 5,
            left: null,
            right: {
              data: 7,
              left: null,
              right: null,
            },
          },
        },
        right: {
          data: 67,
          left: {
            data: 9,
            left: null,
            right: {
              data: 23,
              // new value
              left: {
                data: 11,
                left: null,
                right: null,
              },
              right: null,
            },
          },
          right: {
            data: 324,
            left: null,
            right: {
              data: 6345,
              left: null,
              right: null,
            },
          },
        },
      })
    );
  });
  it("delete() should delete the value in the tree", () => {
    expect(tree.delete(11)).toEqual(
      expect.objectContaining({
        data: 8,
        left: {
          data: 4,
          left: {
            data: 1,
            left: null,
            right: {
              data: 3,
              left: null,
              right: null,
            },
          },
          right: {
            data: 5,
            left: null,
            right: {
              data: 7,
              left: null,
              right: null,
            },
          },
        },
        right: {
          data: 67,
          left: {
            data: 9,
            left: null,
            right: {
              data: 23,
              // deleted value
              left: null,
              right: null,
            },
          },
          right: {
            data: 324,
            left: null,
            right: {
              data: 6345,
              left: null,
              right: null,
            },
          },
        },
      })
    );
  });
  it("find() should return value not found it there is no value", () => {
    expect(tree.find(11)).toBe("Value not found");
  });
  it("find() should find a value in the tree", () => {
    expect(tree.find(9)).toEqual(
      expect.objectContaining({
        data: 9,
        left: null,
        right: { data: 23, left: null, right: null },
      })
    );
  });

  it("levelOrder() should traverse the tre in breadth-first level order", () => {
    expect(tree.levelOrder(tree.root)).toEqual([
      8, 4, 67, 1, 5, 9, 324, 3, 7, 23, 6345,
    ]);
  });

  it("preorder() should traverse the tre in depth-first preorder", () => {
    expect(tree.preorder(tree.root)).toEqual([
      8, 4, 1, 3, 5, 7, 67, 9, 23, 324, 6345,
    ]);
  });

  it("inorder() should traverse the tre in depth-first inorder", () => {
    expect(tree.inorder(tree.root)).toEqual([
      1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345,
    ]);
  });

  it("postorder() should traverse the tre in depth-first postorder", () => {
    expect(tree.postorder(tree.root)).toEqual([
      3, 1, 7, 5, 4, 23, 9, 6345, 324, 67, 8,
    ]);
  });

  it("height() should return the height (longest path from a given node to a leaf node)", () => {
    expect(tree.height(tree.root)).toBe(3);
    expect(tree.height(tree.root.right)).toBe(2);
  });

  it("height() should return -1 if the tree is empty", () => {
    expect(tree.height(null)).toBe(-1);
  });

  it("isBalanced() should return true if the tree is balanced", () => {
    expect(tree.isBalanced(tree.root)).toBeTruthy();
  });

  test("isBalanced() returns false for unbalanced tree", () => {
    tree.insert(5555);
    tree.insert(5556);
    tree.insert(5557);
    expect(tree.isBalanced(tree.root)).toBeFalsy();
  });

  it("rebalance() should rebalance an unbalanced tree", () => {
    expect(tree.rebalance()).toEqual(
      expect.objectContaining({
        root: {
          data: 9,
          left: {
            data: 4,
            left: {
              data: 1,
              left: null,
              right: {
                data: 3,
                left: null,
                right: null,
              },
            },
            right: {
              data: 7,
              left: {
                data: 5,
                left: null,
                right: null,
              },
              right: {
                data: 8,
                left: null,
                right: null,
              },
            },
          },
          right: {
            data: 5555,
            left: {
              data: 67,
              left: {
                data: 23,
                left: null,
                right: null,
              },
              right: {
                data: 324,
                left: null,
                right: null,
              },
            },
            right: {
              data: 5557,
              left: {
                data: 5556,
                left: null,
                right: null,
              },
              right: {
                data: 6345,
                left: null,
                right: null,
              },
            },
          },
        },
      })
    );

    // console.log(tree)
    // expect(tree.isBalanced(tree.root)).toBeTruthy();
  });
});
