import api from "../../../assets/icons/technologies/api-m-g.png";
import bootstrap from "../../../assets/icons/technologies/bootstrap-t-text2.png";
import d3js from "../../../assets/icons/technologies/d3-t-c.png";
import materialui from "../../../assets/icons/technologies/materialui-t-c.png";
import mongodb from "../../../assets/icons/technologies/mongodb-t-c.png";
import moviepy from "../../../assets/icons/technologies/moviepy-f.jpeg";
import nltk from "../../../assets/icons/technologies/nltk-c.png";
import opencv from "../../../assets/icons/technologies/opencv-t-c.png";
import pandas from "../../../assets/icons/technologies/pandas-c.png";
import reactjs from "../../../assets/icons/technologies/react-b.jpg";
import threejs from "../../../assets/icons/technologies/threejs-t-c.png";
import selenium from "../../../assets/icons/technologies/selenium-t-c.png";
import sass from "../../../assets/icons/technologies/sass-t-c.png";
import tailwindcss from "../../../assets/icons/technologies/tailwindcss-t-c.png";
import ffmpeg from "../../../assets/icons/technologies/ffmpeg-t-c.png";
import django from "../../../assets/icons/technologies/django-t-c2.png";
import cpp from "../../../assets/icons/languages/cpp-t-f.png";
import javascript from "../../../assets/icons/languages/javascript-c.png";
import python from "../../../assets/icons/languages/python-t-b.png";
import html from "../../../assets/icons/languages/html-t-text.png";
import css from "../../../assets/icons/languages/css-t-text.png";

const nodeGroups = {
  projects: [
    { id: "algovisualizer", name: "AlgoVisualizer" },
    { id: "financialsentiment", name: "Financial Sentiment" },
    { id: "form4analysis", name: "Form 4 Analysis" },
    { id: "socialmerge", name: "SocialMerge" },
    { id: "spotifyrooms", name: "Spotify Rooms" },
    { id: "stocktools", name: "Stock Tools" },
    { id: "youtubeautomation", name: "Youtube Automation" },
  ],
  technologies: [
    { id: "api", name: "API", icon: api },
    { id: "bootstrap", name: "Bootstrap", icon: bootstrap },
    { id: "d3js", name: "D3.js", icon: d3js },
    { id: "materialui", name: "MaterialUI", icon: materialui },
    { id: "moviepy", name: "MoviePy", icon: moviepy },
    { id: "opencv", name: "OpenCV", icon: opencv },
    { id: "pandas", name: "Pandas", icon: pandas },
    { id: "reactjs", name: "React.js", icon: reactjs },
    { id: "threejs", name: "Three.js", icon: threejs },
    { id: "selenium", name: "Selenium", icon: selenium },
    { id: "sass", name: "Sass", icon: sass },
    { id: "tailwindcss", name: "Tailwind CSS", icon: tailwindcss },
    { id: "ffmpeg", name: "FFmpeg", icon: ffmpeg },
    { id: "django", name: "Django", icon: django },
    { id: "mongodb", name: "MongoDB", icon: mongodb },
    { id: "nltk", name: "Natural Language Toolkit", icon: nltk },
  ],
  languages: [
    { id: "cpp", name: "C++", icon: cpp },
    { id: "javascript", name: "Javascript", icon: javascript },
    { id: "python", name: "Python", icon: python },
    { id: "html", name: "HTML", icon: html },
    { id: "css", name: "CSS", icon: css },
  ],
};

export default nodeGroups;
