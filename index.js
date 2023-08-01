const first=document.getElementsByClassName('co');
for(let i=0;i<first.length;i++){

    first[i].addEventListener('click',function(){
    this.classList.toggle('active');
})
}