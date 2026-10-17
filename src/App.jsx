import { useCallback, useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
//import Sparkles from "./components/Sparkles";
import MusicPlayer from "./components/music";
import InvitationCover from "./components/InvitationCover";
import Invitation from "./components/Invitation";
import NewBeginning from "./components/Newbegining";
import VenueSection from "./components/Venue";
import InvitationFooter from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const finishLoading = useCallback(() => {
  setIsLoading(false);
}, []);

  const openInvitation = () => {
    setIsOpen(true);

    requestAnimationFrame(() => {
      document
        .getElementById("invitation-content")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  };

  if (isLoading) {
    return <LoadingScreen onComplete={finishLoading} />;
  }

  return (
  <main>
    {isLoading ? (
      <LoadingScreen onComplete={finishLoading} />
    ) : (
      <>
        
  <InvitationCover onOpen={openInvitation} />
  <MusicPlayer shouldPlay={true} />

  {isOpen && (
    <div id="invitation-content">
      <Invitation />
      <VenueSection />
      <NewBeginning />
      <InvitationFooter />
    </div>
  )}
</>
    )}
  </main>
);
}