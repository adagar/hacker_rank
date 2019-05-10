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
    if (origHead.value === k) {
      origHead = origHead.next;
    }
    let next = origHead.next;
    while (next !== null) {
      if (next.value === k) {
        newHead.next = next.next;
      } else {
        newHead = next;
        next = next.next;
      }
    }
  }
  return origHead;
}
