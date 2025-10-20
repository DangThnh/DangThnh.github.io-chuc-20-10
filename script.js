document.addEventListener('DOMContentLoaded', () => {
   const textElement = document.getElementById('wish-text');
    const surpriseButton = document.getElementById('surprise-button');
    const cardContainer = document.getElementById('card-container');
    
    // Khai báo thêm biến mới cho khu vực GIF
    const surpriseDisplay = document.getElementById('surprise-display'); 

    // 1. Nội dung lời chúc (Giữ nguyên phần này)
    const fullText = "Con chúc mừng mẹ một ngày 20-10 thật ý nghĩa, tràn ngập niềm vui và hạnh phúc. Cảm ơn mẹ vì những điều tuyệt vời mà mẹ đã mang lại. Con chúc mẹ hãy luôn rạng rỡ như đóa hoa nhé!";
    let index = 0;
    const typingSpeed = 50; 
    
    function typeWriter() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            surpriseButton.style.display = 'inline-block';
        }
    }

    typeWriter();

    /**
     * Xử lý sự kiện bấm nút: Ẩn khung thẻ và hiện GIF
     */
    surpriseButton.addEventListener('click', () => {
        // 1. Bắt đầu ẩn khung chữ nhật bằng cách giảm opacity
        cardContainer.style.opacity = '0';
        
        // 2. Sau khi khung chữ nhật ẩn xong (1 giây), hiển thị ảnh GIF
        setTimeout(() => {
            cardContainer.style.display = 'none'; // Ẩn hoàn toàn thẻ cũ
            
            // Hiện khu vực GIF bằng cách thêm class "show-gif"
            surpriseDisplay.classList.remove('hidden-gif');
            surpriseDisplay.classList.add('show-gif');
            
        }, 1000); // 1000ms (1 giây) khớp với thời gian transition opacity của card
    });
});