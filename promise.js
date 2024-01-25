// An async function that simulates an asynchronous operation
function fetchData(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulating a successful operation
      if (success) {
        resolve(`Data for item ${item} fetched successfully!`);
      } else {
        reject(`Error: Data fetch for item ${item} failed!`);
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// An array of items you want to process asynchronously
const itemsToProcess = [1, 2, 3, 4, 5];

// Using Promise.all with async/await to process each item
async function processItems() {
  try {
    const results = await Promise.all(
      itemsToProcess.map(async (item) => {
        const result = await fetchData(item);
        return result;
      })
    );

    // results is an array containing the results for each item
    console.log(results);
  } catch (error) {
    console.error(error); // Handle any errors here
  }
}
