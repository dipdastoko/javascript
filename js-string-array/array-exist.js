function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array';
    }

    let mega = friends[0];

    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['kutub', 'lion', 'shamol', 'sabbir'];
const myBigBuddy = megaFriend(1234);
console.log(myBigBuddy);