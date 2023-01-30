import { Container } from 'reactstrap'
import './css/Card.css'
import Header from './Header'
import { catArray, dogArray } from './pet'

function Cards(){
    return (
        <Container>
     <div className='row'>
        <div className='col-md-3' >
        <div className='dog-cards'>
            <div className='card'>
             <img className='' src="/Users/williams/Grand_Circus/practice/my-project/public/cat1.jpg" alt="" />
            <div className='card-body'>
            
            <h5>{dogArray[0].name}</h5>
            <p>{dogArray[0].breed}</p>
                 <button id='details-button'>Details</button>
             </div>   
        </div>
        </div>
        </div> 

        
        <div className='col-md-3'>
        <div className='dog-cards'>
            <div className='card'>
             <img className='' src="/Users/williams/Grand_Circus/practice/my-project/public/cat1.jpg" alt="" />
            <div className='card-body'>
            
            <h5>{dogArray[1].name}</h5>
            <p>{dogArray[1].breed}</p>
                 <button id='details-button'>Details</button>
             </div>   
        </div>
        </div>
        </div> 
        

        <div className='col-md-3'>
        <div className='dog-cards'>
            <div className='card'>
             <img className='' src="/Users/williams/Grand_Circus/practice/my-project/public/cat1.jpg" alt="" />
            <div className='card-body'>
            
            <h5>{dogArray[2].name}</h5>
            <p>{dogArray[2].breed}</p>
                 <button id='details-button'>Details</button>
             </div>   
        </div>
        </div>
        </div> 

        <div className='col-md-3'>
        <div className='dog-cards'>
            <div className='card'>
             <img className='' src="/Users/williams/Grand_Circus/practice/my-project/public/cat1.jpg" alt="" />
            <div className='card-body'>
            
            <h5>{dogArray[3].name}</h5>
            <p>{dogArray[3].breed}</p>
                 <button id='details-button'>Details</button>
             </div>   
        </div>
        </div>
        </div> 

        <div className='col-md-3'>
        <div className='dog-cards'>
            <div className='card'>
             <img className='' src="/Users/williams/Grand_Circus/practice/my-project/public/cat1.jpg" alt="" />
            <div className='card-body'>
            
            <h5>{catArray[0].name}</h5>
            <p>{catArray[0].breed}</p>
                 <button id='details-button'>Details</button>
             </div>   
        </div>
        </div>
        </div> 

        <div className='col-md-3'>
        <div className='dog-cards'>
            <div className='card'>
             <img className='' src="/Users/williams/Grand_Circus/practice/my-project/public/cat1.jpg" alt="" />
            <div className='card-body'>
            
            <h5>{catArray[1].name}</h5>
            <p>{catArray[1].breed}</p>
                 <button id='details-button'>Details</button>
             </div>   
        </div>
        </div>
        </div> 

        <div className='col-md-3'>
        <div className='dog-cards'>
            <div className='card'>
             <img className='' src="" alt="" />
            <div className='card-body'>
            
            <h5>{catArray[2].name}</h5>
            <p>{catArray[2].breed}</p>
                 <button id='details-button'>Details</button>
             </div>   
        </div>
        </div>
        </div> 

        <div className='col-md-3'>
        <div className='dog-cards'>
            <div className='card'>
             <img className='' src="/Users/williams/Grand_Circus/practice/my-project/public/cat1.jpg" alt="" />
            <div className='card-body'>
            
            <h5>{catArray[3].name}</h5>
            <p>{catArray[3].breed}</p>
                 <button id='details-button'>Details</button>
             </div>   
        </div>
        </div>
        </div> 
        


     </div>
        {/* <div className='Header'>
        <h1>Pet Finder</h1>
        
        </div>

        <div id='dog'>
        <p>{dogArray[0].name}</p>
        <p>{dogArray[0].breed}</p>
        <button id='details-button'>Details</button>
        </div>

        <div id='dog'>
        <p>{dogArray[1].name}</p>
        <p>{dogArray[1].breed}</p>
        <button id='details-button'>Details</button>
        </div>


        <div id='dog'>
        <p>{dogArray[2].name}</p>
        <p>{dogArray[2].breed}</p>
        <button id='details-button'>Details</button>
        </div>



        <div>
        <p>{dogArray[3].name}</p>
        <p>{dogArray[3].breed}</p>
        <button id='details-button'>Details</button>
        </div>



        <div>
        <p>{dogArray[0].name}</p>
        <p>{dogArray[0].breed}</p>
        <button id='details-button'>Details</button>
        </div>

        <div>
        <p>{catArray[0].name}</p>
        <p>{catArray[0].breed}</p>
        <button id='details-button'>Details</button>
        </div>

        <div>
        <p>{catArray[1].name}</p>
        <p>{catArray[1].breed}</p>
        <button id='details-button'>Details</button>
        </div>

        <div>
        <p>{catArray[2].name}</p>
        <p>{catArray[2].breed}</p>
        <button id='details-button'>Details</button>
        </div>

        <div>
        <p>{catArray[3].name}</p>
        <p>{catArray[3].breed}</p>
        <button id='details-button'>Details</button>
        </div>

 */}


        





        </Container>
    )
}




export default Cards