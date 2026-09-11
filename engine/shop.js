import { items } from "../data/items.js";
const shopKeeper = document.getElementById("keeperItems");
const player = document.getElementById("playerItems");
const allItems = [...Object.values(items['PokeBalls']),...Object.values(items['Evolution']),...Object.values(items['Potions'])];


export const createItemList = (count=4,type=['PokeBalls','Evolution','Potions'],maxCost=2000) => {
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

export const populateShop = ([...itemList]) => {
    itemList.forEach((e) => {
        const shopItem = document.createElement("div");
        const itemName = document.createElement("span");
        const itemCost = document.createElement("span");
        const itemImg = new Image();
        const itemDesc = document.createElement("span");

        shopItem.classList.add("shopItem");
        itemImg.classList.add("itemImg");
        itemName.classList.add("itemName");
        itemCost.classList.add("itemCost");
        itemDesc.classList.add("itemDesc");
        var itemInfo = [itemCost,itemName,itemImg,itemDesc];
        itemInfo.forEach((f) => { f.classList.add("itemInfo") });
        if (e.NAME == 'Poké Ball') { itemImg.classList.add("bigShopImg") }

        itemName.innerHTML = e.NAME;
        itemCost.innerHTML = "$" + e.COST;
        itemImg.src = e.URL;
        itemDesc.innerHTML = e.DESC;

        shopItem.appendChild(itemName);
        shopItem.appendChild(itemCost);
        shopItem.appendChild(itemImg);
        shopItem.appendChild(itemDesc);

        shopKeeper.appendChild(shopItem);
    })
};

export const populateInventory = ([...itemList]) => {
    itemList.forEach((e) => {
        const shopItem = document.createElement("div");
        const itemName = document.createElement("span");
        const itemCost = document.createElement("span");
        const itemImg = new Image();
        const itemDesc = document.createElement("span");

        shopItem.classList.add("playerItem");
        itemImg.classList.add("itemImg");
        itemName.classList.add("itemName");
        itemCost.classList.add("itemCost");
        itemDesc.classList.add("itemDesc");
        var itemInfo = [itemCost,itemName,itemImg,itemDesc];
        itemInfo.forEach((f) => { f.classList.add("itemInfo") });
        if (e.NAME == 'Poké Ball') { itemImg.classList.add("bigShopImg") }

        itemName.innerHTML = e.NAME;
        itemCost.innerHTML = "$" + e.COST;
        itemImg.src = e.URL;
        itemDesc.innerHTML = e.DESC;

        shopItem.appendChild(itemName);
        shopItem.appendChild(itemCost);
        shopItem.appendChild(itemImg);
        shopItem.appendChild(itemDesc);

        player.appendChild(shopItem);
    })
};

export const loadShop = () => {
            const REFRESH_INTERVAL_MS = 1 * 1 * 1 * 1000;
            const STORAGE_KEY = "lastRefreshTimePokeApp";

            const lastRefresh = localStorage.getItem(STORAGE_KEY);
            const now = Date.now();

            if (!lastRefresh) {

                localStorage.setItem(STORAGE_KEY, now);
                
                } else {
                
                    const elapsed = now - parseInt(lastRefresh, 10);

                if (elapsed >= REFRESH_INTERVAL_MS) {

                    localStorage.setItem(STORAGE_KEY, now);
                    populateShop(createItemList())

            } else {

                const searchItems = localStorage.getItem("shopKeeperInventory").split(',');
                const loadItems = [];

                searchItems.forEach((e) => {
                    // const option = Object.values(items['PokeBalls']).filter((n) => { return n.NAME == e })[0];
                    const option = allItems.filter((n) => { return n.NAME == e })[0];
                    loadItems.push(option)
                })

                populateShop(loadItems);

            }
        }
};
