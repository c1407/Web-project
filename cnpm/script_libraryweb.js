const allimages = document.querySelectorAll('img');
const sidebar = document.querySelector('.left-section');
const sidebarItems = document.querySelectorAll('.sidebar .item');
const catItems = document.querySelectorAll('.categories li a');

// Xử lý khi người dùng nhấn vào một mục trong thanh bên
sidebarItems.forEach(sideItem => {
    sideItem.addEventListener('click', () => {
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });
        sideItem.classList.add('active');
    });
});

// Xử lý khi người dùng nhấn vào một mục danh mục
catItems.forEach(catItem => {
    catItem.addEventListener('click', () => {
        catItems.forEach(item => {
            item.classList.remove('active');
        });
        catItem.classList.add('active');
    });
});


//move sidebar on small devices scroll
window.addEventListener('scroll', ()=>{
  if (window.innerWidth <=992) {
    if (this.pageXOffset > 20){
      sidebar.style.paddingTop = '20px';
    } else {
      sidebar.style.paddingTop = '70px';
    }
  } 
});