/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(root === null){
        return null;
    }
    var t = root.left;
    root.left = (root.right === null?null:invertTree(root.right));
    root.right = (t === null?null:invertTree(t));
    return root;
};
