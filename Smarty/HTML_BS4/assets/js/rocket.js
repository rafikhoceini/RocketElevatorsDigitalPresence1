let selectList = $("#building-type");
let numApartments = $("#number-of-apartments");
let numFloors =  $("#number-of-floors");
let numBasements = $("#number-of-basements");
let numCompanies = $("#number-of-companies");
let numParking = $("#number-of-parking-spots");
let numElevators = $("#number-of-elevators");
let numCorporations = $("#number-of-corporations");
let maxOccupancy = $("#maximum-occupancy");
let bizHours = $("#business-hours");
let numberOfElevator= $("#elevator-amount")

numApartments.hide();
numFloors.hide();
numBasements.hide();
numCompanies.hide();
numParking.hide();
numElevators.hide();
numCorporations.hide();
maxOccupancy.hide();
bizHours.hide();


$("#building-type").change(function(e){

    if (e.target.value == "default-select"){
 numApartments.hide();
 numFloors.hide();
 numBasements.hide();
 numCompanies.hide();
 numParking.hide();
 numElevators.hide();
numCorporations.hide();
maxOccupancy.hide();
bizHours.hide();
    }
    if (e.target.value == "residential"){
        numApartments.show();
        numFloors.show();
        numBasements.show();
        numCompanies.hide();
        numParking.hide();
        numElevators.hide();
        numCorporations.hide();
        maxOccupancy.hide();
        bizHours.hide();
        
    }

    if (e.target.value == "commercial"){
        numApartments.hide();
        numFloors.show();
        numBasements.show();
        numCompanies.show();
        numParking.show();
        numElevators.show();
        numCorporations.hide();
        maxOccupancy.hide();
        bizHours.hide();  
        
    }
    if (e.target.value == "corporate"){
        numApartments.hide();                                                               
        numFloors.show();
        numBasements.show();
        numParking.show();
        numCorporations.show();
        maxOccupancy.show();
        numElevators.hide();
        numCompanies.hide();
       
        
        bizHours.hide();
    }

  
    if (e.target.value == "hybrid"){
        numApartments.hide();
        numFloors.show();
        numBasements.show();
        numCompanies.show();
        numParking.show();
        numCorporations.hide();
        maxOccupancy.show();
        numElevators.hide();
        bizHours.show();
        
        
    }
})

function calculateNumElevatorsCommercial(){
   let numelevator = document.getElementsById("numelev").value || 0;
   document.getElementsById("elevator-amount-input").value = numelevator;
   return numelevator;

    }

    function calculateNumElevatorsResidential(){
    
        let numapartments = document.getElementsById("numapart").value || 0;
        let numfloors = document.getElementsById("numfloo").value || 0;
        let numbasements = document.getElementsById("numbase").value || 0;

        let elevatoramount = math.ceil(numapartments/(numfloors*6));
        let colom = math.ceil(numfloors/20);


    }





