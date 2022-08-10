function radianToDegree(radian){
    if(typeof radian !== 'number'){
        return 'Enter a valid Input';
    }
    let degree = (radian * 57.2958);
    degree = degree.toFixed(2);
    return degree;
}
const radian = 199;
const degree = radianToDegree(radian);
console.log(degree);