function areSimilar(a, b) {
    let isSwapped = false;
    
    for(let i = 0; i < a.length; i++){
        if(a[i] === b[i]){
            continue;
        } else {
            if(isSwapped){
                console.log("Already did a swap");
                console.log(a, b);
               return false; 
            } else{
                let aLoc = a.indexOf(b[i]);
                let bLoc = b.indexOf(a[aLoc]);
                if(aLoc < 0 || bLoc < 0){
                    console.log("Couldn't find aLoc or bLoc");
                    return false;
                } else{
                    let tmp = b[i];
                    b[i] = b[aLoc];
                    b[aLoc] = tmp;
                    isSwapped = true;
                    i--;
                    console.log(b);
                }
            }
        }
    }
    return true;
}
