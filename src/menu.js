import './style.css'; // Import CSS file
import restImg from './image.png'; // Import restaurant image

function createMenuContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.classList.add('content'); // Add 'content' class to the content div

    // Create elements
    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const image = document.createElement("img");
    image.src = restImg;
    image.alt = "Restaurant Image";
    image.classList.add('image'); // Add 'image' class to the image element

    const menuList = document.createElement("ul");
    menuList.classList.add('menu-list'); // Add 'menu-list' class to the menu list

    // Sample menu items
    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "Appetizers";

    const menuItem2 = document.createElement("li");
    menuItem2.textContent = "Main Courses";

    const menuItem3 = document.createElement("li");
    menuItem3.textContent = "Desserts";

    // Append elements to content div
    contentDiv.appendChild(heading);
    contentDiv.appendChild(image);
    contentDiv.appendChild(menuList);

    // Append menu items to menu list
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
}

export default createMenuContent;
