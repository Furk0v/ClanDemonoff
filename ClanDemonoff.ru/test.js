const toggleBlock = document.getElementById('toggleBlock');
const content = document.getElementById('content');

toggleBlock.addEventListener('mouseenter', () => {
    content.style.maxHeight = '100px'; // Установите максимальную высоту, необходимую для вашего контента
});

toggleBlock.addEventListener('mouseleave', () => {
    content.style.maxHeight = '0';
});