/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public int minDepth(TreeNode root) {
        if(root == null){
            return 0;
        }
        int ld = minDepth(root.left);
        int rd = minDepth(root.right);
        return (ld == 0 || rd == 0) ? ld + rd + 1: Math.min(ld,rd) + 1;
    }
}
