import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left-nav'>
        <img className='logo' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="Logo" />
        
      </div>
      <div className='right-nav'>
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F0b%2FNetflix-avatar.png&tbnid=nZOFHtwea_quaM&vet=12ahUKEwjo0LmEi86EAxXD0KACHenYDTQQMygAegQIARBJ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANetflix-avatar.png&docid=giDSZ8hKlyMOLM&w=320&h=320&q=netflix%20avatar%20logo%20png&ved=https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fnetflix-profile-pictures&psig=AOvVaw2y9J0k9gF0qmJ4gpKc8j2d&ust=1709211585232000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjGu72LzoQDFQAAAAAdAAAAABAE" alt="avatarLogo" />

      </div>
    </div>
  )
}

export default Navbar
