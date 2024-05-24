
        const images = [ "proplayer.jpeg","iiiii.webp", "imageee.jpeg", "imagee.jpeg"];

        let currentImageIndex = 0;

        function changeBackgroundImage() {
            
            currentImageIndex = (currentImageIndex + 1) % images.length;
            document.getElementById("background-image").src = images[currentImageIndex];
        }

        setInterval(changeBackgroundImage, 2000);
  