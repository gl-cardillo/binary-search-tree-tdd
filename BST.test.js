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
  it("should insert a new value in the tree", () => {
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
  it("it should delete the value in the tree", () => {
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
});
