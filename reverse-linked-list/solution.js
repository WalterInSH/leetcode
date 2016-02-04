/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null) return null;
    var i = head, n = head.next;
    while(n!= null){
        var temp = n.next;
        n.next = i;
        i = n;
        n = temp;
    }
    head.next = null;
    return i;
};
