import Button from "../components/Button";
import Header from "../components/Header";
import Description from "../components/Description";
import Welcome from "../components/Welcome";
import Username from "../components/Username";

import { ReactComponent as Github } from "../assets/icons/svg/github.svg";
import { ReactComponent as Code } from "../assets/icons/svg/code.svg";
import { ReactComponent as Youtube } from "../assets/icons/svg/youtube.svg";
import { ReactComponent as OF } from "../assets/icons/svg/onlyfans.svg";


function Home() {
  return (
    <>
      <Header profile="https://avatars.githubusercontent.com/u/58356637?s=400&u=3c76f657b46dd5adb9bf0bd92e495ddbd42aac52&v=4"/>

      <Username text="SharkBoy"/>

      <Welcome text="Hi, I am SharkBoy !"/>
      <Description
        text="I am trying to dev 😅"
      />
      <Button
        text="Github"
        link="https://github.com/SharkBoy69-CS"
        icon={Github}
      />
      <Button
        text="Source code"
        link="https://github.com/Neotoxic-off/evergreen"
        icon={Code}
      />
      />
      <Button
        text="Youtube"
        link="https://www.youtube.com/channel/UCkz62-16Nsw-3Jd7qGqM3pw"
        icon={Youtube}
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
