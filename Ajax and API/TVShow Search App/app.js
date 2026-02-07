const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
   e.preventDefault();
   console.log(form.elements.input.value);
   const formValue = form.elements.input.value;
   try {
      // const searchResults = await axios.get(`https://api.tvmaze.com/search/shows?q=${formValue}`);
      const config = { params: { q: formValue } };
      const searchResults = await axios.get(`https://api.tvmaze.com/search/shows`, config);
      console.log(searchResults.data);
      // const newImg = document.createElement('IMG');
      // newImg.src = searchResults.data[0].show.image.medium;
      // document.body.append(newImg);
      for (let i = 0; i < searchResults.data.length; i++) {
         const newImg = document.createElement('IMG');
         newImg.src = searchResults.data[i].show.image.medium;
         document.body.append(newImg);
      }
   }
   catch (e) {
      console.log("Error while searching", e);
   }

})