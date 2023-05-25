import './index.css'

const UserType = ()=> {
    return(
        <>
        <div className="user-container">
            <input type="text" 
            placeholder='Re-type if failed, press <TAB> or <ESC> to'
             className='input-text' />
        </div>
        <div className='result-container'>
            <p className='wpm-description'>WPM: 0</p>
            <p className='accuracy-description'>Accuracy: 0 %</p>
            <p className='average-description'>Average WPM: 0</p>

        </div>
        </>
    )
}
export default UserType