function addBorder(picture) {
    const width = picture[0].length + 2;
    const height = picture.length;
    let frame = [];
    
    frame.push(writeLine(width));
    for(let i = 0; i < height; i++){
        frame.push(`*${picture[i]}*`);
    }
    frame.push(writeLine(width));
    
    return frame;
}

const writeLine = length => {
    return Array(length).fill('*').join('');  
}