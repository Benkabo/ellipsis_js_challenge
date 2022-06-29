
import sample from '../assets/feed/sample.json';

const SIZE = 21;
const data = sample.entries;

// Sort data by ascending title
const orderByTitle = data.sort((a, b) => (a.title > b.title ? 1 : -1));

// Filter all whose release year is >= 210
const filteredData = orderByTitle.filter(function(value) {
  return value.releaseYear >= 2010
})

// display the first 21 entries only
const filteredList = filteredData.slice(0, SIZE);


export default filteredList 