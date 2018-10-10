'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function count(dataset, search){
    return dataset.reduce(function(n, val) {
        return n + (val === search);
    }, 0);
}


// Complete the maximumPeople function below.
function maximumPeople(p, x, y, r) {
    let totalPopulation = function(cityList){
        let pop = 0;
        for(let city in cityList){
            pop += p[cityList[city]];
        }
        return pop;
    }
    // Return the maximum number of people that will be in a sunny town after removing exactly one cloud.
    let cloudList = [];
    for(let i = 0; i < y.length; i++){
        let newCloud = {
            location: y[i],
            range: r[i],
            coversTowns: function(){
                let cloudLocation = this.location;
                let cloudRange = this.range;
                let coveredTownLocations = x.filter((townLocation) => {
                    //console.log(townLocation, cloudLocation, cloudRange);
                    return (cloudLocation - cloudRange <= townLocation && cloudLocation + cloudRange >= townLocation);
                
            })
                let coveredTownIndex = [];
                    for(let i in coveredTownLocations){
                        coveredTownIndex.push(x.indexOf(coveredTownLocations[i]));
                    }
                return coveredTownIndex;
            }
        }
    
            cloudList.push(newCloud);
     }
    let allCloudedCities = [];
    for(let i = 0; i < cloudList.length; i++){
        //console.log(cloudList[i].coversTowns());
        allCloudedCities.push(...cloudList[i].coversTowns());
    }
    let cityCandidates = allCloudedCities.filter((city) => {return count(allCloudedCities, city) == 1})
    let clearCities = [];
    for(let i = 0; i < p.length; i++){
      if(!allCloudedCities.includes(i)){
          clearCities.push(i);
      }
    }

    let highestSum = 0;
    for(let i = 0; i < cloudList.length; i++){
        let myUncovered = totalPopulation(cloudList[i].coversTowns().filter((town) =>{
            return cityCandidates.includes(town)
        }))
        if(highestSum < myUncovered){
            highestSum = myUncovered;
        }
    }
    return highestSum + totalPopulation(clearCities);//totalPopulation(cityCandidates);
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    const x = readLine().split(' ').map(xTemp => parseInt(xTemp, 10));

    const m = parseInt(readLine(), 10);

    const y = readLine().split(' ').map(yTemp => parseInt(yTemp, 10));

    const r = readLine().split(' ').map(rTemp => parseInt(rTemp, 10));

    let result = maximumPeople(p, x, y, r);

    ws.write(result + "\n");

    ws.end();
}
