const apiUrl = "https://services1.arcgis.com/79kfd2K6fskCAkyg/arcgis/rest/services/Louisville_Metro_KY_Inspection_Violations_of_Failed_Restaurants/FeatureServer/0/query?where=1%3D1&outFields=InspectionDate,premise_name,premise_adr1_street,Insp_Viol_Comments&outSR=4326&f=json";
// Make an HTTP request to fetch the data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const features = data.features;
    const randomIndex = Math.floor(Math.random() * features.length);
    const randomRow = features[randomIndex].attributes;
    console.log(randomRow.premise_name);
    
    const promptDiv = document.getElementById("prompt");
    promptDiv.textContent = "Premise Name: " + randomRow.premise_name;


  })
  .catch(error => {
    console.error("Error fetching data: " + error);
  });
