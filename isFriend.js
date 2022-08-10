function isFriend(arr){
    const obb1 = arr[0];
    const obb2 = arr[1];
    if((typeof obb1.name !== 'string') || (typeof obb1.friend !== 'string') || (typeof obb2.name !== 'string') || (typeof obb2.friend !== 'string')){
        return 'Enter a valid Input';
    }

    if(obb1.name == obb2.friend && obb1.friend == obb2.name){
        return true
    }
    else{
        return false
    }
}

const friend1 = [
    {name : 'abul', friend: 'kabul'},
    {name : 'kabul', friend : 'abul'}
]
const friends = isFriend(friend1);
console.log(friends)