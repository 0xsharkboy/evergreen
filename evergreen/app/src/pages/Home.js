import Button from "../components/Button";
import Header from "../components/Header";
import Description from "../components/Description";
import Welcome from "../components/Welcome";
import Username from "../components/Username";

import { ReactComponent as Github } from "../assets/icons/svg/github.svg";
import { ReactComponent as lineage } from "../assets/icons/svg/lineageos.svg";
import { ReactComponent as Youtube } from "../assets/icons/svg/youtube.svg";
import { ReactComponent as OF } from "../assets/icons/svg/onlyfans.svg";

function Home() {
  return (
    <>
      <Header profile="https://avatars.githubusercontent.com/u/58356637?s=400&u=3c76f657b46dd5adb9bf0bd92e495ddbd42aac52&v=4"/>
    
      <Username text="Achille"/>
    
      <Welcome text="Hi, welcome on my page !"/>
    
      <Button
        text="Github"
        link="https://github.com/SharkBoy69-CS"
        icon={Github}
      />
      <Button
        text="Youtube"
        link="https://www.youtube.com/channel/UCkz62-16Nsw-3Jd7qGqM3pw"
        icon={Youtube}
      />
      <Button
        text="My Redmi Note 7 LineageOS 20.0"
        link="https://forum.xda-developers.com/t/rom-unofficial-13-0-ota-open-source-encryption-lineageos-20-for-redmi-note-7-lavender.4544471/"
        icon={lineage}
      />
      <Button
        text="Onlyfans"
        link="https://youtu.be/Pwq4rqJYH8o"
        icon={OF}
      />
    </>
  );
};

export default Home;
