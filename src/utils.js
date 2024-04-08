import cssImg from "./assets/experience/css.svg"
import djangoImg from "./assets/experience/django.svg"
import galogoImg from "./assets/experience/galogo.png"
import htmlImg from "./assets/experience/html.svg"
import mongodbImg from "./assets/experience/mongodb.svg"
import nodeImg from "./assets/experience/node.svg"
import petronasImg from "./assets/experience/petronas.png"
import pythonImg from "./assets/experience/python.svg"
import reactImg from "./assets/experience/react.svg"
import javascriptImg from "./assets/experience/javascript.svg"
import expressImg from "./assets/experience/express.svg"
import githubImg from "./assets/experience/github.svg"
import sqlImg from "./assets/experience/sql.svg"
import postgresqlImg from "./assets/experience/postgresql.svg"
import farawayImg from "./assets/projects/faraway.png"
import menuImg from "./assets/projects/menu.png"
import nasaImg from "./assets/projects/nasa.png"
import demoImg from "./assets/projects/demo.png"




export const getImageUrl = ( path ) => {
  return new URL( `assets/${path}`, import.meta.url ).href;
};

export const getImg = ( title ) => {

  let selectedImg;

  switch( title ) {
    case "SQL":
      selectedImg = sqlImg
      break
    case "PostgreSQL":
      selectedImg = postgresqlImg
      break
    case "GitHub":
      selectedImg = githubImg
      break
    case "HTML":
      selectedImg = htmlImg
      break
    case "CSS":
      selectedImg = cssImg
      break
    case "JavaScript":
      selectedImg = javascriptImg
      break
    case "React":
      selectedImg = reactImg
      break
    case "Node":
      selectedImg = nodeImg
      break
    case "Express":
      selectedImg = expressImg
      break
    case "Python":
      selectedImg = pythonImg
      break
    case "MongoDB":
      selectedImg = mongodbImg
      break
    case "Django":
      selectedImg = djangoImg
      break
    case "ga":
      selectedImg = galogoImg
      break
    case "pct":
      selectedImg = petronasImg
      break
    case "Far Away":
      selectedImg = farawayImg
      break
    case "Me n U":
      selectedImg = menuImg
      break
    case "Astronomy Photo of the Day":
      selectedImg = nasaImg
      break
    case "CalorieWise Selector":
      selectedImg = demoImg
      break
    default:
      selectedImg = ""
  }

  return selectedImg
}

