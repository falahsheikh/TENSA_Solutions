function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`nav ul li a[onclick="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    if (pageId === 'home') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function openDownloadPage(productId) {
    document.getElementById(productId + '-download').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeDownloadPage(productId) {
    document.getElementById(productId + '-download').style.display = 'none';
    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id === 'home') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function showImage(index, thumbnailElement) {
    const gallery = thumbnailElement.closest('.image-gallery');
    gallery.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnailElement.classList.add('active');
    
    const galleryImages = gallery.querySelectorAll('.gallery-container .gallery-image');
    galleryImages.forEach(img => img.style.display = 'none');
    galleryImages[index].style.display = 'block';
}

function openZoomView(imageSrc) {
    const modal = document.getElementById('imageZoomModal');
    const zoomedImg = document.getElementById('zoomedImage');
    zoomedImg.src = imageSrc;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeZoomView() {
    const modal = document.getElementById('imageZoomModal');
    modal.style.display = 'none';
    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id === 'home') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const galleries = document.querySelectorAll('.image-gallery');
    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('.gallery-container .gallery-image');
        if (images.length > 0) {
            images.forEach(img => img.style.display = 'none');
            images[0].style.display = 'block';
            
            images.forEach(image => {
                image.style.cursor = 'pointer';
                image.addEventListener('click', function() {
                    openZoomView(this.src);
                });
            });
        }
    });
    
    document.getElementById('imageZoomModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeZoomView();
        }
    });
});

// Back to top button functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Only show button on mobile screens
    if (window.innerWidth <= 768) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            document.getElementById("backToTopBtn").style.display = "block";
        } else {
            document.getElementById("backToTopBtn").style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("backToTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});