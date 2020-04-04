export const treatmentsRawList = {
    getTreatments() {
      return fetch('http://localhost:3000/treatments').then(response => response.json());
    }
    
  };
   