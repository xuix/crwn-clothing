import { createSelector } from "reselect";
const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview= createSelector(
  [selectShopCollections], 
  //*if collections is null return an emty array
(collections)=>collections?Object.keys(collections).map(key=>collections[key]):[]


)



export const selectShopCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections?collections[collectionUrlParam]: null
  );