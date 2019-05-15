//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
    let sumList = [];
    if(t){
        if(t.left){
            sumList.concat(getSum(t.left).map(
                x => { return addOrigVal(x, t.value)}
            ));
        }
        if(t.right){
            sumList.concat(getSum(t.right).map(
                x => { return addOrigVal(x, t.value)}));
        }
        /*
        if(!t.right && !t.left){
            sumList.concat(t.value);
        }
        */
        console.log(sumList);
        for(let i = 0; i < sumList.length; i++){
             if(sumList[i] === s){
                 return true;
             }   
        }
    }
    return false;
}

const addOrigVal = (val, add) => {
    return val + add;
}

const getSum = (node) => {
    //console.log("Node value:",node);
    let childList = [];
    if(node.left === null && node.right === null){
        childList.push(;
    }if(node.left){
        childList.push(node.value + parseInt(getSum(node.left)));
    }if(node.right){
        childList.push(node.value + parseInt(getSum(node.right)));
    }
    console.log(childList);
    return childList;
}