
import {UserButton} from '@clerk/clerk-react'
import {use, useState, useEffect } from 'react'
import {useSearchParams} from 'react-router'
import {useStreamChat} from '../hooks/useStreamChat'
import PageLoader from '../components/PageLoader.jsx'
import CreateChannelModal from '../components/CreateChannelModal.jsx' 
import {
  Chat,
  Channel,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from "stream-chat-react";
import "../styles/stream-chat-theme.css";
import { HashIcon, PlusIcon, UsersIcon } from "lucide-react";
const HomePage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const {chatClient, error, isLoading} = useStreamChat();

useEffect(()=>{
  if(chatClient){
    const channelId = searchParams.get('channel');
    if(channelId){
      const channel = chatClient.channel("messaging", channelId);
      setActiveChannel(channel);
    }
  }
},[chatClient, searchParams])

if(error) return <p>Something went wrong...</p>
if(isLoading || !chatClient) return <PageLoader/>

  return (
    <div className='chat-wrapper'>
      <Chat client = {chatClient}>
        <div className='chat-container'> 
          {/* LEFT SIDEBAR */}
          <div className='str-chat_channel-list'>
            <div className='team-channel-list'>
              {/* HEADER */}
              <div className="team-channel-list__header gap-4">
                <div className="brand-container">
                  <img src="/logo.png" alt="Logo" className="brand-logo" />
                  <span className="brand-name">WorkHub</span>
                </div>
                <div className="user-button-wrapper">
                  <UserButton />
                </div>
                </div>
                {/* CHANNELS LIST */}
               <div className='team channel-list__content'>
                <div className='create-channel-section'>
                  <button onClick={() => setIsCreateModalOpen(true)} className="create-channel-btn">
                    <PlusIcon className="size-4" />
                    <span>Create Channel</span>
                  </button>
                </div>
                {/* CHANNEL LIST */}
               </div>
            </div>

          </div>
          {/* RIGHT CONTAINER */}
          <div className='chat-main'>
            <Channel channel={activeChannel}>
              <Window>
                {/* CustomCHannelHeader */}
                <MessageList/>
                <MessageInput/>
              </Window>
              <Thread/>
            </Channel>
          </div>
        </div>
        {isCreateModalOpen && <CreateChannelModal onClose={() => setIsCreateModalOpen(false)} />}
      </Chat>
    </div>
  )
}

export default HomePage
