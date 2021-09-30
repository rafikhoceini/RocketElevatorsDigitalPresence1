let selectList = document.querySelector('#building-type');
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


let numApar = document.querySelector("#numapar");
let numFloo = document.querySelector("#numfloo");
let numBase = document.querySelector("#numbase");
let numComp = document.querySelector("#numcomp");
let numPark = document.querySelector("#numpark");
let numElev = document.querySelector("#numelev");
let numCorp = document.querySelector("#numcomp");
let maxOccu = document.querySelector("#maxoccu");
let busHour = document.querySelector("#bushour");
let elevAmountInput = document.getElementById("elevator-amount-input");

//Function residential stuff

let Rx = Math.ceil(numApar/(numFloo*6));
let Ry = Math.ceil(numFloo/20);
let rTotal= Rx*Ry

// pricing stuff
let selectLux = document.querySelector("#selectlux")
let standard = document.querySelector("#standard")
let premium =  document.querySelector("#premium")
let excelium = document.querySelector("#excelium")
let priceElevator = document.querySelector("#elevator-unit-price-input")
let totalPriceElevator= document.querySelector("#elevator-total-price-input")
let installationCost = document.querySelector("#installation-fees-input")
let finalPrice = document.querySelector("#final-price-input")

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

    numApar.value = "";
    numFloo.value = "";
    numBase.value="";
    numComp.value="";
    numPark.value="";
    numElev.value="";
    numCorp.value="";
    maxOccu.value="";
    busHour.value="";
    elevAmountInput.value="";
    



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

// function calculateNumElevatorsCommercial(){
//    let numelevator = document.getElementsById("numelev").value || 0;
//    document.getElementsById("elevator-amount-input").value = numelevator;
//    return numelevator;

// }

// function calculateNumElevatorsResidential(){
    
//     let numapartments = document.getElementsById("numapart").value || 0;
//     let numfloors = document.getElementsById("numfloo").value || 0;
//     let numbasements = document.getElementsById("numbase").value || 0;

//     let elevatoramount = math.ceil(numapartments/(numfloors*6));
//     let colom = math.ceil(numfloors/20);
//     let elevatorneeded = elevatoramount*colom
//     document.getElementsById("elevator-amount-input").value = elevatorneeded
//     return elevatorneeded

// }

// numElev.addEventListener('input', (e) => {
//     elevAmountInput.value = numElev.value;
// })

function calculateNumOfElevatorResidential(){
    if (numFloo.value != 0){
        let Rx = Math.ceil(numApar.value/(numFloo.value*6));
        let Ry = Math.ceil(numFloo.value/20);
        let rTotal= Rx*Ry;
        elevAmountInput.value=rTotal;
    } else {
        elevAmountInput.value = 0;
    }
}
// function hybrid and corporate

function calculateNumOfElevatorCorporate(){
let stories = parseFloat(numFloo.value)+parseFloat(numBase.value);
let numOccupants = (maxOccu.value)*(stories);
let elevatorRequired = Math.ceil(numOccupants/1000);
let columns = Math.ceil(stories/20)
let elevatorPerColumns= Math.ceil(elevatorRequired/columns)
let totalElevators = (elevatorPerColumns*columns)
elevAmountInput.value= totalElevators 
console.log(elevatorPerColumns)

}
function totalPriceElevators(){
    let x= priceElevator.value
    let y= elevAmountInput.value
  console.log(x)
      totalPriceElevator.value = (x)*(y)
  }

  function installationcost(){
      let x= totalPriceElevator.value
      
      
        if(standard.checked == true){
            installationCost.value= x*0.1
        }
    
    
        if(premium.checked == true){
            installationCost.value= x*0.13
            
        }
    
    
        if(excelium.checked == true){
            installationCost.value= x*0.16
        }
        
    
      }

      function totalPrice(){
       let x = parseFloat(installationCost.value)
       let y= parseFloat(totalPriceElevator.value)
       finalPrice.value= x+y
      }

  
  numElev.addEventListener('input', (e) => {
    elevAmountInput.value = numElev.value;
    totalPriceElevators();
    installationcost();
    totalPrice();

})

numApar.addEventListener('input', (e) => {
    if (selectList.value == 'residential'){
        calculateNumOfElevatorResidential();
        totalPriceElevators();
        installationcost();
        totalPrice();
    }
    if (selectList.value == 'corporate' || selectList.value == 'hybrid'){

    }
})
numFloo.addEventListener('input', (e) => {
    if (selectList.value == 'residential'){
        calculateNumOfElevatorResidential();
        totalPriceElevators();
        installationcost();
        totalPrice();
    }
    if (selectList.value == 'corporate' || selectList.value == 'hybrid'){
        calculateNumOfElevatorCorporate();
        totalPriceElevators();
        installationcost();
        totalPrice();
    }
})
numBase.addEventListener('input', (e) => {
    if (selectList.value == 'residential'){
        calculateNumOfElevatorResidential();
        totalPriceElevators();
        installationcost();
        totalPrice();
    }
    if (selectList.value == 'corporate' || selectList.value == 'hybrid'){
        calculateNumOfElevatorCorporate();
        totalPriceElevators();
        installationcost();
        totalPrice();
    }
})
maxOccu.addEventListener('input', (e) => {
    if (selectList.value == 'residential'){
        
    }
    if (selectList.value == 'corporate' || selectList.value == 'hybrid'){
        calculateNumOfElevatorCorporate();
        totalPriceElevators();
        installationcost();
        totalPrice();
    }
})

// selectLux.addEventListener('change', (e)=>{
//     if (selectLux.value =='standard'){
//         priceElevator.value = 7565
//     }
// }

// function totalPriceElevators(){
//     let x= priceElevator.value
//     let y= elevAmountInput.value
//   console.log(x)
//       totalPriceElevator.value = (x)*(y)
//   }


standard.addEventListener('change',(e)=>{
    if(standard.checked == true){
        priceElevator.value = 7565
        totalPriceElevators();
        installationcost();
        totalPrice();
    }
})

premium.addEventListener('change',(e)=>{
    if(premium.checked == true){
        priceElevator.value = 12345
        totalPriceElevators();
        installationcost();
        totalPrice();
        
    }
})


excelium.addEventListener('change',(e)=>{
    if(excelium.checked == true){
        priceElevator.value = 15400
        totalPriceElevators();
        installationcost();
        totalPrice();
        
    }
    
})

// ,function totalPriceElevator5(){
//   let x= priceElevator.value
//   let y= elevAmountInput.value

//     totalPriceElevator.value = (x)*(y)
// }











// clickBtn.addEventListener('click', (e) => {
//     console.log(selectList.value);
// })

