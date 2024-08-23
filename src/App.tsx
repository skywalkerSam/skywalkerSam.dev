//    .-')    .-. .-')                  (`\ .-') /`   ('-.                .-. .-')      ('-.    _  .-')     .-')       ('-.      _   .-')         _ .-') _      ('-.         (`-.
//   ( OO ).  \  ( OO )                  `.( OO ),'  ( OO ).-.            \  ( OO )   _(  OO)  ( \( -O )   ( OO ).    ( OO ).-. ( '.( OO )_      ( (  OO) )   _(  OO)      _(OO  )_
//  (_)---\_) ,--. ,--.    ,--.   ,--.,--./  .--.    / . --. /  ,--.      ,--. ,--.  (,------.  ,------.  (_)---\_)   / . --. /  ,--.   ,--.)     \     .'_  (,------. ,--(_/   ,. \
//  /    _ |  |  .'   /     \  `.'  / |      |  |    | \-.  \   |  |.-')  |  .'   /   |  .---'  |   /`. ' /    _ |    | \-.  \   |   `.'   |      ,`'--..._)  |  .---' \   \   /(__/
//  \  :` `.  |      /,   .-')     /  |  |   |  |, .-'-'  |  |  |  | OO ) |      /,   |  |      |  /  | | \  :` `.  .-'-'  |  |  |         |      |  |  \  '  |  |      \   \ /   /
//   '..`''.) |     ' _) (OO  \   /   |  |.'.|  |_) \| |_.'  |  |  |`-' | |     ' _) (|  '--.   |  |_.' |  '..`''.)  \| |_.'  |  |  |'.'|  |      |  |   ' | (|  '--.    \   '   /,
//  .-._)   \ |  .   \    |   /  /\_  |         |    |  .-.  | (|  '---.' |  .   \    |  .--'   |  .  '.' .-._)   \   |  .-.  |  |  |   |  |      |  |   / :  |  .--'     \     /__)
//  \       / |  |\   \   `-./  /.__) |   ,'.   |    |  | |  |  |      |  |  |\   \   |  `---.  |  |\  \  \       /   |  | |  |  |  |   |  | .-.  |  '--'  /  |  `---.     \   /
//   `-----'  `--' '--'     `--'      '--'   '--'    `--' `--'  `------'  `--' '--'   `------'  `--' '--'  `-----'    `--' `--'  `--'   `--' `-'  `-------'   `------'      `-'

// import { useState } from "react";
import PWABadge from "./PWABadge.tsx";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import Introduction from "./components/Introduction.tsx";
import Footer from "./components/Footer.tsx";
import StarboyLogo from "./components/StarboyLogo.tsx";
// import NavigationBar from "./components/NavigationBar.tsx";

const App = () => {
  console.log(
    String.raw`%c
         __                             .__    __                                                    .___               
  ______|  | __ ___.__.__  _  _______   |  |  |  | __  ____  _______   ___________     _____       __| _/  ____  ___  __
 /  ___/|  |/ /<   |  |\ \/ \/ /\__  \  |  |  |  |/ /_/ __ \ \_  __ \ /  ___/\__  \   /     \     / __ | _/ __ \ \  \/ /
 \___ \ |    <  \___  | \     /  / __ \_|  |__|    < \  ___/  |  | \/ \___ \  / __ \_|  Y Y  \   / /_/ | \  ___/  \   / 
/____  >|__|_ \ / ____|  \/\_/  (____  /|____/|__|_ \ \___  > |__|   /____  >(____  /|__|_|  / /\\____ |  \___  >  \_/  
     \/      \/ \/                   \/            \/     \/              \/      \/       \/  \/     \/      \/        

    `,
    "color: cyan;"
  );
  return (
    <>
      <ErrorBoundary>
        {/* <NavigationBar></NavigationBar> */}
        <StarboyLogo></StarboyLogo>
        <Introduction></Introduction>
        <Footer></Footer>
        <PWABadge></PWABadge>
      </ErrorBoundary>
    </>
  );
};

export default App;
