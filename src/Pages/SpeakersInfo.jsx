import { SpeakerSlide, SpeakerInfo, SpeakerSchedule, Speakers } from "../Components/index";

export default function SpeakersInfo() {
  return (
    <>
      {/* Speaker Slide Start */}
      <SpeakerSlide />
      {/* Speaker Slide End */}
      {/* Speaker Info Start */}
      <SpeakerInfo />
      {/* Speaker Info End */}
      {/* Speaker Schedule Start */}
      <SpeakerSchedule />
      {/* Speaker Schedule End */}
      {/* Speakers List Start */}
      <Speakers />
      {/* Speakers List End */}
    </>
  );
}
