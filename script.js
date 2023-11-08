const apiUrl = "https://services1.arcgis.com/79kfd2K6fskCAkyg/arcgis/rest/services/Louisville_Metro_KY_Inspection_Violations_of_Failed_Restaurants/FeatureServer/0/query?where=1%3D1&outFields=InspectionDate,premise_name,premise_adr1_street,Insp_Viol_Comments&outSR=4326&f=json";

function formatDate(timestamp) {
  if (timestamp) {
      const date = new Date(timestamp);
      return date.toDateString();
  }
  return "N/A";
}

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const features = data.features;
    
    const randomRow1 = features[Math.floor(Math.random() * features.length)].attributes;
    const randomRow2 = features[Math.floor(Math.random() * features.length)].attributes;
    const randomRow3 = features[Math.floor(Math.random() * features.length)].attributes;

    const inspectionDate = formatDate(randomRow1.InspectionDate) || "N/A";
    
    const promptDiv = document.getElementById("prompt");
    promptDiv.textContent = "\"" + randomRow1.Insp_Viol_Comments + "\" - " + inspectionDate;

    const option1 = document.getElementById("option1");
    option1.textContent = randomRow1.premise_name + " on " + randomRow1.premise_adr1_street;
    
    const option2 = document.getElementById("option2");
    option2.textContent = randomRow2.premise_name + " on " + randomRow2.premise_adr1_street;
    
    const option3 = document.getElementById("option3");
    option3.textContent = randomRow3.premise_name + " on " + randomRow3.premise_adr1_street;
  
  
  })
  .catch(error => {
    console.error("Error fetching data: " + error);
  });
