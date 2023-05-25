import './index.css'


const Threshold =()=>(

    <div className='Threshold-container'>
        <h1 className='heading'>Threshold</h1>

        <div className='input-containers'>
            <label className='label-text' htmlFor="wpm">WPM</label>
            <input className='number-input' id ="wpm" type="number"  min="1" max="500" />
        </div>
        <div className='input-containers'>
            <label className='label-text1' htmlFor="Accuracy">Accuracy</label>
            <input className='number-input' id ="Accuracy" type="number" min="1" max="100" />
        </div>

    </div>




)
export default Threshold