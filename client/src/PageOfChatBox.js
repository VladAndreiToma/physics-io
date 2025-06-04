import ChatBotBox from "./ChatBotBox";
export default function PageOfChatBox(){
    return(
        <div className="page-of-chat-box">
            <ChatBotBox/>
            <b className="text-in-newtonium blink-smooth">Press Esc to exit Newtonium Screen...</b>
        </div>
    )
}