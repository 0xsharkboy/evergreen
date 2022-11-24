import Button from "../components/Button";
import Header from "../components/Header";
import Description from "../components/Description";
import Welcome from "../components/Welcome";
import Username from "../components/Username";

import { ReactComponent as Github } from "../assets/icons/svg/github.svg";
import { ReactComponent as Code } from "../assets/icons/svg/code.svg";
import { ReactComponent as OF } from "../assets/icons/svg/onlyfans.svg";


function Home() {
  return (
    <>
      <Header profile="https://avatars.githubusercontent.com/u/44700383?v=4"/>

      <Username text="neo"/>

      <Welcome text="Hi, I am neo"/>
      <Description
        text="I am a developer. Feel free to use my stuff"
      />

      <Button
        text="Github"
        link="https://github.com/Neotoxic-off"
        icon={Github}
      />
      <Button
        text="Source code"
        link="https://github.com/Neotoxic-off/evergreen"
        icon={Code}
      />
      <Button
        text="Onlyfans"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={OF}
      />
    </>
  );
};

export default Home;
