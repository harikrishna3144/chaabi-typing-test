import './index.css'


const Generator =()=>(

    <div className='generator-container'>
        <h1 className='heading'>Generator</h1>

        <div className='input-containers'>
            <label className='label-text' htmlFor="Combination">Combination</label>
            <input className='number-input' id ="Combination" type="number"  min="1" />
        </div>
        <div className='input-containers'>
            <label className='label-text1' htmlFor="Repetition">Repetition</label>
            <input className='number-input' id ="Repetition" type="number"  min="1" />
        </div>

    </div>




)
export default Generator