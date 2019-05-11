// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  console.log(l);
  let origHead = l;
  let newHead = origHead;
  if (origHead && origHead.value) {
    while (origHead.value === k) {
      origHead = origHead.next;
      newHead = origHead;
    }
    while (newHead.next) {
      newHead.next = getNext(newHead, k);
      newHead = newHead.next;
    }
  }
  return origHead;
}

const getNext = (node, k) => {
  if (node.next !== k) {
    return node.next;
  } else {
    return getNext(node.next, k);
  }
};
