document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('wish-text');
    const surpriseButton = document.getElementById('surprise-button');
    const cardContainer = document.getElementById('card-container');
    const flowerAnimation = document.getElementById('flower-animation');

    // 1. Nội dung lời chúc (thay đổi tại đây)
    const fullText = "Chúc mừng bạn một ngày 20-10 thật ý nghĩa, tràn ngập niềm vui và hạnh phúc. Cảm ơn bạn vì những điều tuyệt vời mà bạn đã mang lại. Hãy luôn rạng rỡ như đóa hoa nhé!";
    let index = 0;
    const typingSpeed = 50; // Tốc độ gõ (milliseconds/chữ)

    /**
     * Hàm gõ chữ từng ký tự
     */
    function typeWriter() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Khi gõ xong, hiện nút "Bất ngờ"
            surpriseButton.style.display = 'inline-block';
        }
    }

    // Bắt đầu gõ chữ khi trang tải xong
    typeWriter();

    /**
     * Xử lý sự kiện bấm nút
     */
    surpriseButton.addEventListener('click', () => {
        // Ẩn khung chữ nhật
        cardContainer.style.opacity = '0';
        
        // Sau khi khung chữ nhật ẩn xong (1 giây), bắt đầu animation hoa
        setTimeout(() => {
            cardContainer.style.display = 'none'; // Ẩn hoàn toàn
            
            // Hiện khu vực hoa và chạy animation
            flowerAnimation.classList.remove('hidden');
            
            // Đặt lại vị trí để bó hoa nằm giữa màn hình
            flowerAnimation.style.position = 'fixed';
            flowerAnimation.style.top = '50%';
            flowerAnimation.style.left = '50%';
            flowerAnimation.style.transform = 'translate(-50%, -50%)';

            // Kích hoạt animation CSS
            setTimeout(() => {
                flowerAnimation.classList.add('animate');
            }, 50); // Độ trễ nhỏ để đảm bảo lớp 'hidden' đã bị loại bỏ

        }, 1000); // 1000ms (1 giây) khớp với thời gian transition opacity của card
    });
});