// const fetchUser = async (url) => {
//   const resp = await fetch(url);
//   const data = await resp.json();
//   console.log(data[0]['Image Gallery'][0].src);
//   const name = data[0]['Species Name'];

//   const resp2 = await fetch(`https://www.fishwatch.gov/api/species/${name}`);
//   const body = await resp2.json();
//   console.log(body);
// };

// fetchUser('https://www.fishwatch.gov/api/species');
