import {useState, useEffect} from 'react';
import {StreamChat} from "stream-chat";
import {useUser} from "@clerk/clerk-react";
import {useQuery} from "@tanstack/react-query";
import { getStreamToken } from '../lib/api.js';
import * as Sentry from "@sentry/react";

const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

export const useStreamChat = () => {
    const { user } = useUser();
    const [chatClient, setChatClient] = useState(null);

    const {data:tokenData, isLoading: tokenLoading, error: tokenError } = useQuery({
    queryKey: ['streamToken'],
    queryFn: getStreamToken,
    enabled: !!user?.id,
});

useEffect(() =>{
    const initChat = async () =>{
        if(!tokenData?.token || !user) return;

        try {
            const client = StreamChat.getInstance(STREAM_API_KEY);
            let cancelled = false;
            await client.connectUser({
                id: user.id,
                name: user.fullName,
                image: user.imageUrl
            })
            if (!cancelled) {
          setChatClient(client);
        }
        } catch (error) {
            console.log("Error connecting to stream",error);
            Sentry.captureException(error, {
                tags: {component: "useStreamChat"},
                extra: {
                    context: "stream_chat_connection",
                    userId: user?.id,
                    streamApiKey: STREAM_API_KEY? "present": "missing",
                }
            })
        }
    };

    initChat();

    return () => {
        if(chatClient){
            chatClient.disconnectUser();
            
        }
    }
}, [tokenData,user,chatClient]);
 
return {chatClient, isLoading:tokenLoading, error:tokenError};
};




