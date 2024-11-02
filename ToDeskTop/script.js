const navdialog=document.getElementById('nav-dialog');

function handelMenu(){
    navdialog.classList.toggle('hidden');
}


function setUpInterSectionObserver(element,isLTR,speed){
    const intersectionCallBack=(entries)=>{
        
    }
    const intersectionobserver=new IntersectionObserver(intersectionCallBack);
}