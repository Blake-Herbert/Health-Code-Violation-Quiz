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
    
    const correctAnswer = features[Math.floor(Math.random() * features.length)].attributes;
    const incorrectAnswer1 = features[Math.floor(Math.random() * features.length)].attributes;
    const incorrectAnswer2 = features[Math.floor(Math.random() * features.length)].attributes;
    
    const inspectionDate = formatDate(correctAnswer.InspectionDate) || "N/A";
    
    const answers = [correctAnswer, incorrectAnswer1, incorrectAnswer2];

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(answers);

    const promptDiv = document.getElementById("prompt");
    promptDiv.textContent = "\"" + correctAnswer.Insp_Viol_Comments + "\" - " + inspectionDate;

    const option1 = document.getElementById("option1");
    option1.textContent = answers[0].premise_name + " on " + answers[0].premise_adr1_street;
    
    const option2 = document.getElementById("option2");
    option2.textContent = answers[1].premise_name + " on " + answers[1].premise_adr1_street;
    
    const option3 = document.getElementById("option3");
    option3.textContent = answers[2].premise_name + " on " + answers[2].premise_adr1_street;
  
  
  })
  .catch(error => {
    console.error("Error fetching data: " + error);
  });
