import githubImg from "../images/github.svg";
import linkedInImg from "../images/linkedin.png";
import twitterImg from "../images/twitter.png";

const socialLinks = [
  { id: 1, social: "GitHub", link: "https:/github.com/KachiKaduru", image: githubImg },
  { id: 2, social: "Twitter", link: "#", image: twitterImg },
  { id: 3, social: "LinkedIn", link: "#", image: linkedInImg },
];

const navs = [
  { id: 1, nav: "Home", route: "#" },
  { id: 2, nav: "About", route: "#about" },
  { id: 3, nav: "Tech Stack", route: "#stack" },
  { id: 4, nav: "Projects", route: "#projects" },
  { id: 5, nav: "Contact", route: "#contact" },
];

export { socialLinks, navs };
