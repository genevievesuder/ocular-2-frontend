//This could be added as a column in the user table
//t.string :icon
const Icon = ({icon, setIcon}) => {

    const chooseIcon = (e) => {
        setIcon(e.target.value);
    }

  return (
    <div>
        <label>
         <strong>current mood </strong>
          <select onChange={chooseIcon}>
            <option value="✳">Select</option>
            <option value="✳">✳</option>
            <option value="✴">✴</option>
            <option value="✧">✧</option>
            <option value="✤">✤</option>
            <option value="✪">✪</option>
            <option value="✦">✦</option>
            <option value="✿">✿</option>
            <option value="❀">❀</option>
            <option value="❂">❂</option>
            <option value="❄">❄</option>
            <option value="❤">❤</option>
            <option value="♡">♡</option>
            <option value="♻">♻</option>
            <option value="✈">✈</option>
            <option value="☜">☜</option>
            <option value="☺">☺</option>
            <option value="☠">☠</option>
            <option value="☢">☢</option>
            <option value="☣">☣</option>
            <option value="☂">☂</option>
            <option value="☃">☃</option>
            <option value="☁">☁</option>
            <option value="☾">☾</option>
            <option value="☮">☮</option>
            <option value="☯">☯</option>
            <option value="♕">♕</option>
            <option value="♖">♖</option>
            <option value="♞">♞</option>
            <option value="♫">♫</option>
            <option value="♪">♪</option>
          </select>
         </label>
    </div>
  )
}

export default Icon