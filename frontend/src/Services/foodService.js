//import axios from 'axios';

import { foodData, sample_foods } from "../data";


export const getAll = async () => sample_foods;

export const getFish = async () => foodData.fish;
  
export const getFruits = async () => foodData.fruits;
  
export const getMeat = async () => foodData.meat;
  
export const getVegetables = async () =>  foodData.vegetables;
  
export const getById = async (foodId) => {
  //const { foodId } = req.params
      const categories = ['fish', 'fruits', 'meat', 'vegetables'];
      let foundItem = null;
  
    for (const category of categories) {

      const itemInCategory = foodData[category].find((item) => item.id === foodId);
  
      if (itemInCategory) {
        foundItem = itemInCategory;
        break;
      }
    }
  
    return foundItem;
  };

    
  

export const search = async (searchTerm) => {
  const categories = ['fish', 'fruits', 'meat', 'vegetables'];
  let searchResults = [];

  // Loop through each category
  for (const category of categories) {
    const itemsInCategory = foodData[category];

    // Filter items in the current category that match the search term
    const categoryResults = itemsInCategory.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Add the category results to the overall search results
    searchResults = searchResults.concat(categoryResults);
  }

  return searchResults;
};