function isJavaScriptFile(name){
    if(typeof name !== 'string'){
        return 'Enter valid Input';
    }
    if((name[name.length-1] == 's') && (name[name.length-2] == 'j') && (name[name.length-3] =='.')){
        return true;
    }
    else{
        return false;
    }
    

}

const fileName = 'app.js.png';
const file = isJavaScriptFile(fileName);
console.log(file);