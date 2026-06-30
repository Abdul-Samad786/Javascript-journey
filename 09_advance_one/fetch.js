async function getData() {
  const url = "https://api.github.com/users/Abdul-Samad786";
  try {
    const response = await fetch(url);
        //console.log(response);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    //console.log(typeof response);
    console.log(response.json);
    
   /// console.log(response.json)

    const result = await response.json();
   // console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
getData()