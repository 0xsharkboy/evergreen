import Button from "../components/Button";
import Header from "../components/Header";

import { ReactComponent as Youtube } from "../assets/icons/svg/youtube.svg";
import { ReactComponent as Github } from "../assets/icons/svg/git-fork.svg";
import { ReactComponent as Instagram } from "../assets/icons/svg/instagram.svg";
import { ReactComponent as Twitter } from "../assets/icons/svg/twitter.svg";
import { ReactComponent as Telegram } from "../assets/icons/svg/pokemon.svg";

import Avatar from "../assets/profile/avatar.png";

function Home() {
  return (
    <>
      <Header profile="https://avatars.githubusercontent.com/u/44700383?v=4"/>
      <Button text="Instagram" icon={Instagram}/>
      <Button text="Youtube" icon={Youtube}/>
      <Button text="Twitter" icon={Twitter}/>
      <Button text="Github" icon={Github}/>
      <Button text="Telegram" icon={Telegram}/>
    </>
  );
};

export default Home;
