import createHomepageContent from './homePage'
import createMenuContent from './menu'

function render(pageName){
     (document.getElementById('content')).innerText=''
     if (pageName=='Menu') {
        createMenuContent()
     } else if(pageName=='Home'||!pageName) {
        createHomepageContent()
     } 
}

function pagePicker(){
   let allAnchors =  document.querySelectorAll('.link')
  
   allAnchors.forEach(a=>{
    a.addEventListener('click',(e)=>{
         render(a.id)
    }) 
   })

}
render()
pagePicker()