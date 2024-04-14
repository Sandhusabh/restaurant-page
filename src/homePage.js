import restImg from './image.png'
import './style.css';
function createHomepageContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.classList.add('content')
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant";
  
    const image = document.createElement("img");
    image.src = restImg;
    image.alt = "Restaurant Image";
    image.classList.add('image')
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "At Our Restaurant, we pride ourselves on providing delicious meals in a cozy atmosphere. Our chefs use only the freshest ingredients sourced locally, ensuring that every dish is bursting with flavor.";
  
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Whether you're joining us for a romantic dinner for two, a family celebration, or a casual lunch with friends, we have something on our menu to suit every taste.";
  
    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "Visit us today and experience the wonderful flavors and warm hospitality that have made Our Restaurant a favorite dining destination.";
  
    contentDiv.appendChild(heading);
    contentDiv.appendChild(image);
    contentDiv.appendChild(paragraph1);
    contentDiv.appendChild(paragraph2);
    contentDiv.appendChild(paragraph3);
  }
export default createHomepageContent 