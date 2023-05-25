import './index.css'

const Scope = ()=> (

    <div className='source-container'>
        <h1 className='scope-heading'>Scope</h1>

        <div className='containers'>
        
        <div className='radio-container'>
           
            <div className='input-container'>
                <input type="radio" id="top1" />
            </div>
                
                <label className='text' htmlFor='top1'>Top_50</label>
        
                </div>

                <div className='radio-container'>
           
            <div className='input-container'>
                <input type="radio" id="Bigrams" />
                </div>
                <label className='text' htmlFor='Bigrams'>Top_100</label>
                </div>
                <div className='radio-container'>
           
           <div className='input-container'>
               <input type="radio" id="Bigrams" />
               </div>
               <label className='text' htmlFor='Bigrams'>Top_150</label>
               </div>
               <div className='radio-container'>
           
           <div className='input-container'>
               <input type="radio" id="Bigrams" />
               </div>
               <label className='text' htmlFor='Bigrams'>Top_200</label>
               </div>

               </div>

        </div>

    


)
export default Scope