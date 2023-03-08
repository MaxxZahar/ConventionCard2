const bidList = document.querySelector('.bid_list');

function createSuitSymbol(value) {
    let s = 'NT'
    switch (value[1]) {
        case 'c':
            s = '\u2663';
            break;
        case 'd':
            s = '\u2666';
            break;
        case 'h':
            s = '\u2665';
            break;
        case 's':
            s = '\u2660';
            break;
    }
    return value[0] + s;
}

function createList(rootId) {
    bids.forEach((bid) => {
        if (bid.parentId == rootId) {
            const bidLi = document.createElement('li');
            bidLi.classList.add('bid');
            bidLi.dataset.value = createSuitSymbol(bid.value);
            bidLi.textContent = bid.text;
            bidLi.dataset.comment = bid.comment;
            bidList.appendChild(bidLi);
        }
    })
}

createList(0);