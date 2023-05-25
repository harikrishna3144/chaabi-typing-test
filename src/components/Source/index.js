import {Component} from 'react'
import './index.css'


class Source extends Component{

    render(){

        return(
            <div className='source-container'>
            <h1 className='source-heading'>Source</h1>
            
            <div className='radio-container'>
               
                <div className='input-container'>
                    <input type="radio" id="Bigrams" />
                    </div>
                    <label className='text' htmlFor='Bigrams'>Bigrams</label>
                    </div>
    
                    <div className='radio-container'>
               
                <div className='input-container'>
                    <input type="radio" id="Bigrams" />
                    </div>
                    <label className='text' htmlFor='Bigrams'>Trigrams</label>
                    </div>
                    <div className='radio-container'>
               
               <div className='input-container'>
                   <input type="radio" id="Bigrams" />
                   </div>
                   <label className='text' htmlFor='Bigrams'>Tetragrams</label>
                   </div>
                   <div className='radio-container'>
               
               <div className='input-container'>
                   <input type="radio" id="Bigrams" />
                   </div>
                   <label className='text' htmlFor='Bigrams'>Words</label>
                   </div>
    
                   <div className='radio-container'>
               
               <div className='input-container'>
                   <input type="radio" id="Bigrams" />
                   </div>
                   <label className='text' htmlFor='Bigrams'>Custom</label>
                   </div>
    
            </div>

        )
    }
}
export default Source