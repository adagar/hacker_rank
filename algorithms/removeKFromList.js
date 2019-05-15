// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  /*
    console.log(l);
  let head = l;
  if (head && head.value) {
      console.log(head);
    while(head.value === k) {
        console.log("bad start");
        head = deleteFirstNode(head);
    }
  let tail = head.next; 
    while(head.next){
        tail = getNext(head, k);
        head = tail;
    }
  }
  return head;
  */
  for (let i = 0; i < l.length; i++) {
    if (l[i] === k) {
      l.splice(i, 1);
      i--;
    }
  }
  return l;
}
/*
const deleteFirstNode = (head) => {
    if(!origHead){
        return;
    } else {
        head = head.next;
        return head;
    }
}
const getNext = (node, k) => {
    if(node.next !== k){
        return node.next;
    } else {
        return getNext(node.next, k);
    }
}
*/
