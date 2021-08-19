// chcek the given function parameter is Array or not
function megaFried(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide array.';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['kutub', 'lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFried(122);
console.log(myBigBuddy);

// element is existed or not
if (friends.includes('lion')) {
    console.log('Lion exists');
}

// concat
const first = [1, 2, 3];
const second = [4, 6, 8, 0];
const combinded = first.concat(second);
console.log(combinded);