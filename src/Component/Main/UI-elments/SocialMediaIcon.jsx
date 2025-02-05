import React from 'react'
//social medi icons
const SocialMediaIcon = ({textColor, textSize, textGap}) => {

  const iconStyle = {
    styles :{
      color: textColor,
      fontSize: textSize
    },
  }

  return (
    <div className='socialmedia-icon-container' style={{gap: textGap}} >
        <a href="" style={iconStyle.styles}><i class="fa-brands fa-square-x-twitter"></i></a>
        <a href="" style={iconStyle.styles}><i class="fa-brands fa-facebook"></i></a>
        <a href="" style={iconStyle.styles}><i class="fa-brands fa-square-instagram"></i></a>
    </div>
  )
}

export default SocialMediaIcon