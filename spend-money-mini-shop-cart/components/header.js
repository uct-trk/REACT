
import React from 'react'

const Header =({money, total}) => {
  return(
    <>
      <div>
      {total > 0 && money - total !== 0 && (
         <div> You have {money - total} $</div>
      )}
      {total === 0 && (
        <div>You can spend {money} $ </div>
      )}
      {money - total == 0 && (
        <div>You dont have any money</div>
      )}
      </div>
    </>
  )
}
export default Header