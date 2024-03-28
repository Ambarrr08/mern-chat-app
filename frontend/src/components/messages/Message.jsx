import React from 'react'

 const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIMG_Academy&psig=AOvVaw3brrDJ411W36TlDrsRgaBL&ust=1711722608246000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCm8-yVl4UDFQAAAAAdAAAAABAE' />
            </div>

        </div>
        <div className = {'chat-bubble text-white bg-blue-500'}>Hi</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message;
