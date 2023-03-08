const bids = [];
function createBid(parentId, id, value, text, comment) {
    bids.push({ parentId, id, value, text, comment })
    return { parentId, id, value, text, comment }
}


const root = {
    parentId: -1,
    id: 0,
    value: '',
    text: '',
    comment: ''
}
bids.push(root);
createBid(0, 1, '1c', '1+c 11-22 or 16+ game forcing', '');
createBid(0, 2, '1d', '5+d 11-22', '');
createBid(0, 3, '1h', '5+h 11-22', '');
createBid(0, 4, '1s', '5+s 11-22', '');
createBid(0, 5, '1n', '15-17 balanced', '');
console.log(bids);