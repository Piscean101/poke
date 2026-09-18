import { items } from "../data/items.js";
const shopKeeper = document.getElementById("keeperItems");
const player = document.getElementById("playerItems");
export const allItems = [...Object.values(items['PokeBalls']),...Object.values(items['Evolution']),...Object.values(items['Potions'])];
var walletDisplayAmount; 

// localStorage.setItem("playerInventory","Potion");

if (document.title == 'Shop') {

    walletDisplayAmount = document.getElementById("walletAmount");
    
    walletDisplayAmount.innerHTML = Number(localStorage.getItem("pokeWallet"));

}

const walletAmount = Number(localStorage.getItem("pokeWallet"));

export const moveMoney = (num,add=true) => {

    num = Number(num);

    var wallet = Number(localStorage.getItem("pokeWallet"));
    if (add) {
        wallet += num;
    } else { 
        wallet -= num;
        wallet <= 0 ? wallet = 0 : null;
    }

    localStorage.setItem("pokeWallet",wallet);

    add == true ? alert(`You received $${num}`) : add == 'Loss' ? alert(`You handed over ${num}`) : null;

}

export const createItemList = (count=6,type=['PokeBalls','Evolution','Potions'],maxCost=2000) => {
    count = [4,5,6,7][Math.floor(Math.random()*4)];
    let result = []; let names = []; let filter = [];
        filter.push(allItems.filter((e) => { return e.COST <= maxCost && e.COST != null }));
    while (count) {
        let choice = filter[0][Math.floor(Math.random()*filter[0].length)];
        if (!result.includes(choice)) {
            result.push(choice);
            names.push(choice.NAME);
            count--;
        }
    }
    localStorage.setItem("shopKeeperInventory",names);
    return result;
};

export const parseInventory = (inventoryString) => {
    const result = [];
    const itemNames = inventoryString.toString().split(',');
    itemNames.sort().forEach((e) => {
        result.push(allItems.filter((i) => {
            return i.NAME == e;
        })[0])
    });
    return result;
};

export const addToInventory = (itemName) => {
    if (!allItems.filter((e) => { return e.NAME == itemName }).length) {
        return alert(`Error: ${itemName} does not exist`)
    } else {
        const itemsInBag = localStorage.getItem("playerInventory").split(',');
        itemsInBag.push(itemName);
        localStorage.setItem("playerInventory",itemsInBag);
    }
};

export const removeFromInventory = (itemName) => {

        const itemsInBag = localStorage.getItem("playerInventory").split(',');
        var found = 0;
        itemsInBag.forEach((e,i) => {
            if(e == itemName && found == 0) {
                itemsInBag.splice(i,1);
                found++;
            }
        });
        console.log(itemsInBag)
        localStorage.setItem("playerInventory",itemsInBag);

};

export const purchaseItem = (name,cost) => {

    if (walletAmount < cost) { alert(`You don't have enough money to buy this.`) } 
    
    else {

        const confirmBuy = confirm(`Buy this ${name} for $${cost}?`);

        if (confirmBuy) {
            
            addToInventory(name);
            moveMoney(cost,false);
            location.reload(true);

        }

    }

}

export const sellItem = (name,cost) => {

    const confirmSell = confirm(`Would you like to sell your ${name} for $${cost}?`);

    if(confirmSell) {
        
        removeFromInventory(name);
        moveMoney(cost,true);
        location.reload(true);

    }


}

export const populateInventory = ([...itemList]) => {
    itemList.forEach((e) => {
        const shopItem = document.createElement("div");
        const itemName = document.createElement("span");
        const itemCost = document.createElement("span");
        const itemImg = new Image();
        const itemDesc = document.createElement("span");
        const buyItem = document.createElement("div");
        const sellCost = Math.floor(e.COST*0.42);

        shopItem.classList.add("playerItem");
        itemImg.classList.add("itemImg");
        itemName.classList.add("itemName");
        itemCost.classList.add("itemCost");
        itemDesc.classList.add("itemDesc");
        buyItem.classList.add("buyItem");
        var itemInfo = [itemCost,itemName,itemImg,itemDesc];
        itemInfo.forEach((f) => { f.classList.add("itemInfo") });
        if (e.NAME == 'Poké Ball') { itemImg.classList.add("bigShopImg") }

        buyItem.addEventListener("click", () => {
            sellItem(e.NAME,sellCost);
        })

        itemName.innerHTML = e.NAME;
        itemCost.innerHTML = "$" + sellCost;
        itemImg.src = e.URL;
        itemDesc.innerHTML = e.DESC;
        buyItem.innerHTML = 'SELL';

        shopItem.appendChild(itemName);
        shopItem.appendChild(itemCost);
        shopItem.appendChild(itemImg);
        shopItem.appendChild(itemDesc);
        shopItem.appendChild(buyItem);

        player.appendChild(shopItem);
    })
};

export const populateShop = ([...itemList]) => {
    itemList.forEach((e) => {
        const shopItem = document.createElement("div");
        const itemName = document.createElement("span");
        const itemCost = document.createElement("span");
        const itemImg = new Image();
        const itemDesc = document.createElement("span");
        const buyItem = document.createElement("div");

        shopItem.classList.add("shopItem");
        itemImg.classList.add("itemImg");
        itemName.classList.add("itemName");
        itemCost.classList.add("itemCost");
        itemDesc.classList.add("itemDesc");
        buyItem.classList.add("buyItem");
        var itemInfo = [itemCost,itemName,itemImg,itemDesc,buyItem];
        itemInfo.forEach((f) => { f.classList.add("itemInfo") });
        if (e.NAME == 'Poké Ball') { itemImg.classList.add("bigShopImg") }

        buyItem.addEventListener("click", () => {
            purchaseItem(e.NAME,e.COST);
        })

        itemName.innerHTML = e.NAME;
        itemCost.innerHTML = "$" + e.COST;
        itemImg.src = e.URL;
        itemDesc.innerHTML = e.DESC;
        buyItem.innerHTML = 'BUY'

        shopItem.appendChild(itemName);
        shopItem.appendChild(itemCost);
        shopItem.appendChild(itemImg);
        shopItem.appendChild(itemDesc);
        shopItem.appendChild(buyItem);

        shopKeeper.appendChild(shopItem);
    })
};

export const loadShop = () => {
            const REFRESH_INTERVAL_MS = 1 * 5 * 60 * 1000;
            const STORAGE_KEY = "lastRefreshTimePokeApp";

            const lastRefresh = localStorage.getItem(STORAGE_KEY);
            const now = Date.now();

            const playerInventory = localStorage.getItem("playerInventory").split(',');

            if (!lastRefresh) {

                localStorage.setItem(STORAGE_KEY, now);
                loadShop();
                
            } else {
                
            const elapsed = now - parseInt(lastRefresh, 10);

            if (elapsed >= REFRESH_INTERVAL_MS) {

                localStorage.setItem(STORAGE_KEY, now);
                populateShop(createItemList())

            } else {

                const searchItems = localStorage.getItem("shopKeeperInventory").split(',');
                const loadItems = [];

                searchItems.forEach((e) => {
                    const option = allItems.filter((n) => { return n.NAME == e })[0];
                    loadItems.push(option)
                })

                populateShop(loadItems);

            }

            populateInventory(parseInventory(playerInventory));

        }

};
