# evergreen
🌲 Host &amp; share your social information

<p align="center">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/Neotoxic-off/evergreen?style=for-the-badge">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/Neotoxic-off/evergreen?style=for-the-badge">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Neotoxic-off/evergreen?style=for-the-badge">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Neotoxic-off/evergreen?style=for-the-badge">
    <img alt="Scrutinizer code quality (GitHub/Bitbucket)" src="https://img.shields.io/scrutinizer/evergreen/quality/g/Neotoxic-off/emcee?style=for-the-badge">
</p>


## Install
```BASH
git clone git@github.com:Neotoxic-off/evergreen.git
cd evergreen/evergreen
docker-compose up --build
```

### Component
#### Button
```JS
import Button from "../components/Button";

import { ReactComponent as Github } from "../assets/icons/svg/github.svg";

<Button
  text="Github"
  link="https://github.com/Neotoxic-off"
  icon={Github}
/>
```

#### Header
```JS
import Header from "../components/Header";

<Header profile="https://avatars.githubusercontent.com/u/44700383?v=4"/>
```

#### Username
```JS
import Username from "../components/Username";

<Username text="neo"/>
```

#### Welcome
```JS
import Welcome from "../components/Welcome";

<Welcome text="Hi, I am neo"/>
```

#### Description
```JS
import Description from "../components/Description";

<Description
  text="I am a developer. Feel free to use my stuff"
/>
```

---

### Example
#### Simple
```JS
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
```

#### Infinit socials
```JS
import Button from "../components/Button";
import Header from "../components/Header";
import Description from "../components/Description";
import Welcome from "../components/Welcome";
import Username from "../components/Username";

import { ReactComponent as Github } from "../assets/icons/svg/github.svg";
import { ReactComponent as Code } from "../assets/icons/svg/code.svg";
import { ReactComponent as OF } from "../assets/icons/svg/onlyfans.svg";
import { ReactComponent as Tiktok } from "../assets/icons/svg/tiktok.svg";
import { ReactComponent as Tweeter } from "../assets/icons/svg/tweeter.svg";

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
      <Button
        text="Tiktok"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tiktok}
      />
      <Button
        text="Tweeter"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tweeter}
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
      <Button
        text="Tiktok"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tiktok}
      />
      <Button
        text="Tweeter"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tweeter}
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
      <Button
        text="Tiktok"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tiktok}
      />
      <Button
        text="Tweeter"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tweeter}
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
      <Button
        text="Tiktok"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tiktok}
      />
      <Button
        text="Tweeter"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tweeter}
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
      <Button
        text="Tiktok"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tiktok}
      />
      <Button
        text="Tweeter"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tweeter}
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
      <Button
        text="Tiktok"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tiktok}
      />
      <Button
        text="Tweeter"
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        icon={Tweeter}
      />
    </>
  );
};

export default Home;
```
