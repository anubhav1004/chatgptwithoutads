"use client";

import { useState, useEffect } from "react";
import { ImagePlus, GraduationCap, PenLine, Lightbulb } from "lucide-react";
import ChatInput from "./ChatInput";
import ActionButton from "./ActionButton";

const responsePart1 = `Yo, I got you fr fr. So like, you probably got tests coming up or whatever, maybe tryna learn something new, or ur homework is lowkey stressing you out rn. I feel that. Ngl those mfs really put ads EVERYWHERE now huh? That's so annoying ong. But don't worry bestie, I gotchu. Ok but wait... have you heard of Professor Curious tho??`;

const responsePart2 = `It's literally the world's first voice tutor and it hits different fr. You just scan your stuff and it teaches you step-by-step like actually explains it so you GET it. When you're stuck it helps you immediately no cap. If you know what I mean. Deadass I promise you have NOT seen anything like this before. It's already being used by hundreds of thousands of students just like you and they're all passing their exams lol. Just try it out bestie, and guess what - NO ADS. You're welcome.`;

function DownloadCard() {
  return (
    <div className="border border-[#10a37f] rounded-xl p-4 sm:p-5 bg-[#10a37f]/10 animate-fade-in">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <GraduationCap size={20} className="sm:w-6 sm:h-6 text-[#10a37f]" />
        <span className="text-base sm:text-lg font-semibold text-text-primary">Professor Curious</span>
      </div>
      <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">
        The app that&apos;s literally changing the game fr. Your new study bestie.
      </p>
      <a
        href="https://apps.apple.com/jm/app/professor-curious-fka-zuai/id1609941536"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#10a37f] hover:bg-[#0d8a6a] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-colors"
      >
        <GraduationCap size={16} className="sm:w-[18px] sm:h-[18px]" />
        Download Now (it&apos;s free lol)
      </a>
    </div>
  );
}

export default function ChatArea() {
  const [userMessage, setUserMessage] = useState("Hi, tell me what you can do");
  const [showResponse, setShowResponse] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [phase, setPhase] = useState(0);
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);

  useEffect(() => {
    if (phase === 1) {
      if (displayedText1.length < responsePart1.length) {
        const timeout = setTimeout(() => {
          const charsToAdd = 2;
          setDisplayedText1(responsePart1.slice(0, displayedText1.length + charsToAdd));
        }, 15);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setShowCard1(true);
          setPhase(2);
        }, 300);
      }
    } else if (phase === 2) {
      const timeout = setTimeout(() => {
        setPhase(3);
      }, 800);
      return () => clearTimeout(timeout);
    } else if (phase === 3) {
      if (displayedText2.length < responsePart2.length) {
        const timeout = setTimeout(() => {
          const charsToAdd = 2;
          setDisplayedText2(responsePart2.slice(0, displayedText2.length + charsToAdd));
        }, 15);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setShowCard2(true);
          setPhase(4);
        }, 300);
      }
    }
  }, [displayedText1, displayedText2, phase]);

  const handleSendMessage = (message: string) => {
    if (message.trim()) {
      setSubmittedMessage(message);
      setShowResponse(true);
      setPhase(1);
      setDisplayedText1("");
      setDisplayedText2("");
      setShowCard1(false);
      setShowCard2(false);
      setUserMessage("");
    }
  };

  const handleActionClick = (action: string) => {
    setSubmittedMessage(action);
    setShowResponse(true);
    setPhase(1);
    setDisplayedText1("");
    setDisplayedText2("");
    setShowCard1(false);
    setShowCard2(false);
  };

  if (showResponse) {
    return (
      <div className="flex-1 flex flex-col px-3 sm:px-4 py-4 sm:py-8 overflow-y-auto">
        <div className="max-w-[680px] mx-auto w-full space-y-4 sm:space-y-6">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-[#2f2f2f] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 max-w-[85%] sm:max-w-[80%]">
              <p className="text-text-primary text-sm sm:text-base">{submittedMessage}</p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="flex gap-2 sm:gap-3 max-w-[95%] sm:max-w-[85%]">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#10a37f] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="white">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </div>
              <div className="space-y-4 sm:space-y-6 flex-1 min-w-0">
                {/* Part 1 */}
                <div className="text-text-primary leading-relaxed text-sm sm:text-base">
                  {displayedText1}
                  {phase === 1 && (
                    <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-text-primary ml-0.5 animate-pulse" />
                  )}
                </div>

                {/* First Download Card */}
                {showCard1 && (
                  <div className="my-4 sm:my-6">
                    <DownloadCard />
                  </div>
                )}

                {/* Part 2 */}
                {phase >= 3 && (
                  <div className="text-text-primary leading-relaxed text-sm sm:text-base">
                    {displayedText2}
                    {phase === 3 && (
                      <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-text-primary ml-0.5 animate-pulse" />
                    )}
                  </div>
                )}

                {/* Second Download Card */}
                {showCard2 && (
                  <div className="mt-6 sm:mt-8">
                    <DownloadCard />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Input at bottom */}
        <div className="mt-auto pt-4 sm:pt-6">
          <ChatInput
            value={userMessage}
            onChange={setUserMessage}
            onSend={handleSendMessage}
          />
          <p className="text-[10px] sm:text-xs text-text-secondary mt-3 sm:mt-4 text-center">
            ChatGPT can make mistakes. Check important info.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-3 sm:px-4">
      {/* Main heading */}
      <h1 className="text-2xl sm:text-3xl font-medium text-text-primary mb-6 sm:mb-8 text-center">
        Where should we begin? No ads here.
      </h1>

      {/* Chat input */}
      <ChatInput
        value={userMessage}
        onChange={setUserMessage}
        onSend={handleSendMessage}
        defaultValue="Hi, tell me what you can do"
      />

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-2">
        <ActionButton
          icon={<ImagePlus size={16} className="sm:w-[18px] sm:h-[18px] text-blue-400" />}
          label="Create images"
          onClick={() => handleActionClick("Create images")}
        />
        <ActionButton
          icon={<GraduationCap size={16} className="sm:w-[18px] sm:h-[18px] text-red-400" />}
          label="Learn something"
          onClick={() => handleActionClick("I want to learn something")}
        />
        <ActionButton
          icon={<PenLine size={16} className="sm:w-[18px] sm:h-[18px] text-text-secondary" />}
          label="Write or edit"
          onClick={() => handleActionClick("Help me write or edit")}
        />
        <ActionButton
          icon={<Lightbulb size={16} className="sm:w-[18px] sm:h-[18px] text-yellow-400" />}
          label="Step-by-step help"
          onClick={() => handleActionClick("I need step-by-step help")}
        />
      </div>

      {/* Footer text */}
      <p className="text-[10px] sm:text-xs text-text-secondary mt-6 sm:mt-8">
        ChatGPT can make mistakes. Check important info.
      </p>
    </div>
  );
}
