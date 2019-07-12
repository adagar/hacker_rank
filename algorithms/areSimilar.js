function areSimilar(a, b) {
    let swapIndex = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            swapIndex.push(i);
        }
    }
    
    if(swapIndex.length === 0) return true;
    if(swapIndex.length > 2) return false;
    if(a[swapIndex[0]] === b[swapIndex[1]] && b[swapIndex[0]] === a[swapIndex[1]]){
        return true;
    }
    return false;
}
    