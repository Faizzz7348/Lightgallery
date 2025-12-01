const $gallery1 = document.getElementById("gallery-1");
if ($gallery1) {
  const gallery1 = window.lightGallery($gallery1, {
    dynamic: true,
    plugins: [lgZoom, lgVideo, lgThumbnail],
    dynamicEl: [
    {
      src:
        "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                    <p>Published on September 14, 2016</p>
                </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`
    }
  ]
});
$gallery1.addEventListener("click", () => {
  gallery1.openGallery(0);
});
}

const $gallery2 = document.getElementById("gallery-2");
if ($gallery2) {
const gallery2 = window.lightGallery($gallery2, {
  dynamic: true,
  plugins: [lgZoom, lgVideo, lgThumbnail],
  dynamicEl: [
    {
      src:
        "https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                    <p>Description of the slide 4</p>
                </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1543059509-6d53dbee1728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1543059509-6d53dbee1728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@charlespostiaux">Charles Postiaux</a></h4>
                    <p>Published on November 24, 2018</p>
                </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
                    <p>Published on January 6, 2021</p>
                </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@sigmund">Sigmund</a></h4>
                    <p>Published on November 6, 2019</p>
                </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1579406842270-ea87c39a8a12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1579406842270-ea87c39a8a12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@chow_parij">Parij Borgohain</a></h4>
                    <p>Published on January 19, 2020</p>
                </div>`
    }
  ]
});
$gallery2.addEventListener("click", () => {
  gallery2.openGallery(0);
});
}

const $gallery3 = document.getElementById("gallery-3");
if ($gallery3) {
const gallery3 = window.lightGallery($gallery3, {
  dynamic: true,
  plugins: [lgZoom, lgVideo, lgThumbnail],
  dynamicEl: [
    {
      src:
        "https://images.unsplash.com/photo-1598911543663-37d77962beb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1598911543663-37d77962beb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@inespiazzese">Ines Piazzese</a></h4>
                    <p>Published on September 1, 2020</p>
                </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1560885673-2cdc12600ec8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1560885673-2cdc12600ec8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@rdsaunders">Richard Saunders</a></h4>
                    <p>Published on June 19, 2019</p>
                </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1571292064306-669f0e758231?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1571292064306-669f0e758231?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jalanmeier">J. Meier</a></h4>
                    <p>Published on October 17, 2019</p>
                </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                    <p>Published on October 6, 2020</p>
                </div>`
    }
  ]
});
$gallery3.addEventListener("click", () => {
  gallery3.openGallery(0);
});
}

// Page Navigation
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show selected section
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
  }
  
  // Update navbar title based on section
  const navbarTitle = document.querySelector('.navbar-title');
  const navbarSubtitle = document.querySelector('.navbar-subtitle');
  
  if (sectionId === 'gallery-section') {
    navbarTitle.textContent = 'Gallery';
    navbarSubtitle.textContent = 'Explore our photo collection';
  } else if (sectionId === 'music-section') {
    navbarTitle.textContent = 'Music';
    navbarSubtitle.textContent = 'Listen to our curated playlists';
  } else if (sectionId === 'video-section') {
    navbarTitle.textContent = 'Videos';
    navbarSubtitle.textContent = 'Watch our featured video content';
  }
  
  // Update active menu item in sidebar
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.classList.remove('active');
  });
}

// Sidebar navigation
document.querySelectorAll('.sidebar-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const href = item.getAttribute('href');
    
    if (href === '#gallery-1') {
      e.preventDefault();
      showSection('gallery-section');
      item.classList.add('active');
    } else if (href === '#gallery-2') {
      e.preventDefault();
      showSection('music-section');
      item.classList.add('active');
    } else if (href === '#gallery-3') {
      e.preventDefault();
      showSection('video-section');
      item.classList.add('active');
    }
  });
});

// Sidebar collapse functionality
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Click outside sidebar to collapse
document.addEventListener('click', (e) => {
  // Check if click is outside sidebar and not on sidebar itself
  if (!sidebar.contains(e.target) && !e.target.closest('.sidebar')) {
    sidebar.classList.add('collapsed');
    mainContent.classList.add('expanded');
  }
});

// Click on sidebar to expand
sidebar.addEventListener('click', (e) => {
  if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
    mainContent.classList.remove('expanded');
    e.stopPropagation();
  }
});
