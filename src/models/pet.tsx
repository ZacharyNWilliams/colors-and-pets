export interface Pet {
    name:string,
    breed:string,
    image:string,
    isAdopted:boolean
}

let dogArray:Pet[] = [
    {name: "Bones", breed: "Corgi", image: "One", isAdopted: false},
    {name: "Fido", breed: "Mixed", image: "Two", isAdopted: true},
    {name: "Dodger", breed: "Dodger", image: "Three", isAdopted:false},
    {name: "Fluffy", breed: "Fluffy", image: "Four", isAdopted: true}
];

let catArray:Pet[] = [
    {name: "Major", breed: "Bombay Cat", image: "One", isAdopted: false},
    {name: "Queenie", breed: "Corgi", image: "Two", isAdopted: true},
    {name: "Dakota", breed: "Corgi", image: "Three", isAdopted: false},
    {name: "Claw", breed: "Corgi", image: "Four", isAdopted: true}
];

// export function displayDogs(){
//     return (
//         <div>
//             <p>
//                {dogArray} 
//             </p>
//         </div>
//     )
// }
function ReptileListItems() {

  
    return dogArray.map((dogArray) => <li>{dogArray.name}</li>);
  }


function Cards(){
    return (
        <div className='Header'>
        
        </div>
    )
}
export {dogArray, catArray}

export default ReptileListItems
