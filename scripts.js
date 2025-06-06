// 可以添加一些交互功能，比如视频播放控制
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有视频元素
    const videos = document.querySelectorAll('video');
    
    // 为每个视频添加点击播放/暂停功能
    videos.forEach(video => {
        const container = video.parentElement;
        
        container.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
    
    // 可以在这里添加更多交互功能
});