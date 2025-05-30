import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
export default function AskNewtonium({onClick}) {
  return (
    <button onClick={onClick} className="ask-newtonium-btn">
      <ChatBubbleBottomCenterIcon className="ask-newtonium-icon" />
      <span className="ask-newtonium-text">ask AI</span>
    </button>
  );
}