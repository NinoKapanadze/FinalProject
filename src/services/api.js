async function getProductsAsync ()
  {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
    }
  
  export default getProductsAsync
// const appID = 'NinoKapa-key-SBX-54b497691-083bb7ed'; 
// const endpoint = 'https://api.ebay.com/buy/browse/v1/item_summary/search';

// export async function searchEbayListings(query) {
//     const response = await fetch(`https://dummyjson.com/products`, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${appID}`,
//             'Content-Type': 'application/json'
//         }
//     });

//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
// }

// // Example usage
// searchEbayListings('laptop')
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching eBay listings:', error));