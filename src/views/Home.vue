<template>
  <div>

    <!-- Page loading -->
    <div id="loading">
        <div class="spinner-grow"></div>
    </div>
    <!-- * Page loading -->

    <!-- App Header -->
    <div class="appHeader">
        <div class="left">
            <a href="#" class="icon goBack">
                <i class="icon ion-ios-arrow-back"></i>
            </a>
        </div>
        <div class="pageTitle">Pecece</div>
        <div class="right">
            <label for="searchInput" class="mb-0 icon toggleSearchbox">
                <i class="icon ion-ios-search"></i>
            </label>
        </div>
    </div>
    <!-- searchBox -->
    <div id="searchBox">
        <form>
            <span class="inputIcon">
                <i class="icon ion-ios-search"></i>
            </span>
            <input type="text" class="form-control" id="searchInput" placeholder="Search...">
            <a href="javascript:;" class="toggleSearchbox closeButton">
                <i class="icon ion-ios-close-circle"></i>
            </a>
        </form>
    </div>
    <!-- * searchBox -->
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule">

        <div class="appContent">

            <!-- Card Overlay Carousel -->
            <div class="carousel-single splide mt-2 mb-4">
                <div class="splide__track">
                    <ul class="splide__list">
                        <!-- slide -->
                        <li class="splide__slide">
                            <router-link to="/posts" class="card card-overlay text-white">
                                <img src="assets/img/sample/photo8.jpg" class="card-img img-fluid" alt="image">
                                <div class="card-img-overlay">
                                    <div class="header row">
                                        <div class="col-8">TRAVEL</div>
                                        <div class="col-4 text-end">
                                            <i class="icon ion-ios-heart"></i> 523
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h1>Top 10 Travel Bloggers You Should Already Be Following</h1>
                                        <footer>
                                            <div class="author">
                                                <img src="assets/img/sample/avatar3.jpg" alt="avatar">
                                                Marti Valencia
                                            </div>
                                            <div class="date">
                                                5 hours ago
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html" class="card card-overlay text-white">
                                <img src="assets/img/sample/photo5.jpg" class="card-img img-fluid" alt="image">
                                <div class="card-img-overlay">
                                    <div class="header row">
                                        <div class="col-8">EVENTS</div>
                                        <div class="col-4 text-end">
                                            <i class="icon ion-ios-heart"></i> 12K
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h1>The World's Largest Pillow Fight is Also a Festival</h1>
                                        <footer>
                                            <div class="author">
                                                <img src="assets/img/sample/avatar.jpg" alt="avatar">
                                                Sofie Fulloway
                                            </div>
                                            <div class="date">
                                                2 hours ago
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html" class="card card-overlay text-white">
                                <img src="assets/img/sample/photo11.jpg" class="card-img img-fluid" alt="image">
                                <div class="card-img-overlay">
                                    <div class="header row">
                                        <div class="col-8">SPORTS</div>
                                        <div class="col-4 text-end">
                                            <i class="icon ion-ios-heart"></i> 12K
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h1>Juxon Julio praises Peri’s resilience after testing week</h1>
                                        <footer>
                                            <div class="author">
                                                <img src="assets/img/sample/avatar5.jpg" alt="avatar">
                                                Jackie Pearson
                                            </div>
                                            <div class="date">
                                                2 hours ago
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html" class="card card-overlay text-white">
                                <img src="assets/img/sample/photo10.jpg" class="card-img img-fluid" alt="image">
                                <div class="card-img-overlay">
                                    <div class="header row">
                                        <div class="col-8">WORLD</div>
                                        <div class="col-4 text-end">
                                            <i class="icon ion-ios-heart"></i> 12K
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h1>Best of Skyscrapers in the World</h1>
                                        <footer>
                                            <div class="author">
                                                <img src="assets/img/sample/avatar6.jpg" alt="avatar">
                                                Vincent Hunt
                                            </div>
                                            <div class="date">
                                                2 hours ago
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <!-- * slide -->
                    </ul>
                </div>
            </div>
            <!-- * Card Overlay Carousel -->

            <!-- Post Carousel -->
            <div class="sectionTitle mb-2 mt-4">
                <div class="text-muted">NEWS</div>
                <div class="title">
                    <h1>Today</h1>
                    <a href="blog-category.html">View All</a>
                </div>
            </div>

            <div class="carousel-multiple postCarousel splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo13.jpg" alt="image" class="image">
                                <h2 class="title">Can you spot the difference in this scene</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo2.jpg" alt="image" class="image">
                                <h2 class="title">20 Presents That Actually Won't Get Re-Gifted</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo3.jpg" alt="image" class="image">
                                <h2 class="title">Is Orange Juice the Enemy of the Disease?</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo4.jpg" alt="image" class="image">
                                <h2 class="title">Best Selling Furniture of This Year</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo12.jpg" alt="image" class="image">
                                <h2 class="title">What is the best gift to buy for your husband?</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                    </ul>
                </div>
            </div>
            <!-- * Post Carousel -->

            <div class="divider mt-4 mb-4"></div>

            <div class="sectionTitle mb-2">
                <div class="title">
                    <h1>Sports</h1>
                    <a href="blog-category.html">View All</a>
                </div>
            </div>

            <!-- post list -->
            <div class="row">
                <!-- item -->
                <div class="col-6">
                    <a href="blog-post.html" class="postItem">
                        <div class="imageWrapper">
                            <img src="assets/img/sample/photo11.jpg" alt="image" class="image">
                            <div class="badge badge-warning">SPORT</div>
                        </div>
                        <h2 class="title">Juxon praises Peri’s resilience after testing week</h2>
                        <footer>
                            <img src="assets/img/sample/avatar.jpg" alt="avatar" class="avatar">
                            25 Sep 2019
                        </footer>
                    </a>
                </div>
                <!-- * item -->
                <!-- item -->
                <div class="col-6">
                    <a href="blog-post.html" class="postItem">
                        <div class="imageWrapper">
                            <img src="assets/img/sample/photo8.jpg" alt="image" class="image">
                            <div class="badge badge-success">TRAVEL</div>
                        </div>
                        <h2 class="title">Top 10 Travel Bloggers You Should Follow</h2>
                        <footer>
                            <img src="assets/img/sample/avatar2.jpg" alt="avatar" class="avatar">
                            25 Sep 2019
                        </footer>
                    </a>
                </div>
                <!-- * item -->
                <!-- item -->
                <div class="col-6">
                    <a href="blog-post.html" class="postItem">
                        <div class="imageWrapper">
                            <img src="assets/img/sample/photo3.jpg" alt="image" class="image">
                            <div class="badge badge-danger">FOODS</div>
                        </div>
                        <h2 class="title">Is Orange Juice the Enemy of the Disease?</h2>
                        <footer>
                            <img src="assets/img/sample/avatar3.jpg" alt="avatar" class="avatar">
                            25 Sep 2019
                        </footer>
                    </a>
                </div>
                <!-- * item -->
                <!-- item -->
                <div class="col-6">
                    <a href="blog-post.html" class="postItem">
                        <div class="imageWrapper">
                            <img src="assets/img/sample/photo4.jpg" alt="image" class="image">
                            <div class="badge badge-info">HEALTH</div>
                        </div>
                        <h2 class="title">Check the Best Selling Furniture of This Year</h2>
                        <footer>
                            <img src="assets/img/sample/avatar4.jpg" alt="avatar" class="avatar">
                            25 Sep 2019
                        </footer>
                    </a>
                </div>
                <!-- * item -->
            </div>
            <!-- * post list -->

            <div class="divider mt-2 mb-4"></div>

            <!-- Post Carousel -->
            <div class="sectionTitle mb-2">
                <div class="title">
                    <h1>Travel</h1>
                    <a href="blog-category.html">View All</a>
                </div>
            </div>

            <div class="carousel-multiple postCarousel splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo4.jpg" alt="image" class="image">
                                <h2 class="title">Can you spot the difference in this scene</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo5.jpg" alt="image" class="image">
                                <h2 class="title">20 Presents That Actually Won't Get Re-Gifted</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo6.jpg" alt="image" class="image">
                                <h2 class="title">Is Orange Juice the Enemy of the Disease?</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo7.jpg" alt="image" class="image">
                                <h2 class="title">Best Selling Furniture of This Year</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo8.jpg" alt="image" class="image">
                                <h2 class="title">What is the best gift to buy for your husband?</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                    </ul>
                </div>
            </div>

            <!-- * Post Carousel -->

            <div class="divider mt-4 mb-4"></div>

            <!-- Post Carousel -->
            <div class="sectionTitle mb-2">
                <div class="title">
                    <h1>Health</h1>
                    <a href="blog-category.html">View All</a>
                </div>
            </div>


            <div class="carousel-multiple postCarousel splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo12.jpg" alt="image" class="image">
                                <h2 class="title">Can you spot the difference in this scene</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo2.jpg" alt="image" class="image">
                                <h2 class="title">20 Presents That Actually Won't Get Re-Gifted</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo3.jpg" alt="image" class="image">
                                <h2 class="title">Is Orange Juice the Enemy of the Disease?</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo7.jpg" alt="image" class="image">
                                <h2 class="title">Best Selling Furniture of This Year</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo8.jpg" alt="image" class="image">
                                <h2 class="title">What is the best gift to buy for your husband?</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                    </ul>
                </div>
            </div>
            <!-- * Post Carousel -->

            <div class="divider mt-4 mb-4"></div>

            <!-- Post Carousel -->
            <div class="sectionTitle mb-2">
                <div class="title">
                    <h1>Politics</h1>
                    <a href="blog-category.html">View All</a>
                </div>
            </div>


            <div class="carousel-multiple postCarousel splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo5.jpg" alt="image" class="image">
                                <h2 class="title">Can you spot the difference in this scene</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo7.jpg" alt="image" class="image">
                                <h2 class="title">20 Presents That Actually Won't Get Re-Gifted</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo8.jpg" alt="image" class="image">
                                <h2 class="title">Is Orange Juice the Enemy of the Disease?</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo9.jpg" alt="image" class="image">
                                <h2 class="title">Best Selling Furniture of This Year</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                        <!-- slide -->
                        <li class="splide__slide">
                            <a href="blog-post.html">
                                <img src="assets/img/sample/photo10.jpg" alt="image" class="image">
                                <h2 class="title">What is the best gift to buy for your husband?</h2>
                            </a>
                        </li>
                        <!-- * slide -->
                    </ul>
                </div>
            </div>
            <!-- * Post Carousel -->


        </div>

        <!-- app Footer -->
        <footer class="appFooter d-none">
            <div class="heading">Copyright © Bitter. All Rights Reserved.</div>
            <p>
                Modern, simple and elegant design for mobile devices. Based on Bootstrap.
            </p>
            <!-- facebook -->
            <a href="#" class="btn btn-facebook btn-icon me-1">
                <i class="icon ion-logo-facebook"></i>
            </a>
            <!-- twitter -->
            <a href="#" class="btn btn-twitter btn-icon me-1">
                <i class="icon ion-logo-twitter"></i>
            </a>
            <!-- instagram -->
            <a href="#" class="btn btn-instagram btn-icon me-1">
                <i class="icon ion-logo-instagram"></i>
            </a>
            <!-- linkedin -->
            <a href="#" class="btn btn-linkedin btn-icon me-1">
                <i class="icon ion-logo-linkedin"></i>
            </a>
            <!-- whatsapp -->
            <a href="#" class="btn btn-whatsapp btn-icon me-1">
                <i class="icon ion-logo-whatsapp"></i>
            </a>
        </footer>
        <!-- * app Footer -->


    </div>
    <!-- * appCapsule -->




    <!-- App Bottom Menu -->
    <div style="color: orange;" class="appBottomMenu">
        <div class="item">
            <router-link to="/">
                <p>
                    <i  class="icon ion-ios-home"></i>
                    <span>Home</span>
                </p>
            </router-link>
        </div>
        <div class="item">
            <router-link to="/profile">
                <p>
                    <i class="icon ion-ios-contact"></i>
                    <span>Profile</span>
                </p>
            </router-link>
        </div>
        <div class="item d-none">
            <a href="components.html">
                <p>
                    <i class="icon ion-ios-analytics"></i>
                    <span>Components</span>
                </p>
            </a>
        </div>
        <div class="item">
            <a href="search.html">
                <p>
                    <i class="icon ion-ios-search"></i>
                    <span>Search</span>
                </p>
            </a>
        </div>
        <div class="item">
            <a href="#appSidebar" class="icon" data-bs-toggle="offcanvas">
                <p>
                    <i class="icon ion-ios-menu"></i>
                    <span>Menu</span>
                </p>
            </a>
        </div>
    </div>
    <!-- * App Bottom Menu -->

    <!-- Sidebar Menu -->
    <div class="offcanvas offcanvas-start sidebarWrapper" tabindex="-1" id="appSidebar">
        <div class="offcanvas-body">
            <nav class="sidebar">
                <div class="profilebox">
                    <img src="assets/img/sample/avatar.jpg" alt="avatar" class="avatar">
                    <h2 class="title">Jane Antunes</h2>
                    <h5 class="lead">
                        <i class="icon ion-ios-pin me-1"></i>
                        Nigeria
                    </h5>
                    <div class="sidebutton">
                        <a href="#">
                            <i class="icon ion-ios-settings"></i>
                        </a>
                    </div>
                </div>
                <div class="sidebarGroup">
                    <ul class="sidebarMenu">
                        <li>
                            <a href="social-home.html">
                                <i class="icon ion-ios-people"></i>
                                Saved Posts
                            </a>
                        </li>
                        <li>
                            <a href="social-chat.html">
                                <i class="icon ion-ios-chatboxes"></i>
                                Create Post
                            </a>
                        </li>
                        <li>
                            <a href="pages.html">
                                <i class="icon ion-ios-apps"></i>
                                Activities
                            </a>
                        </li>
                      
                        <li>
                            <router-link to="/login">
                                <i class="icon ion-ios-lock"></i>
                                Login
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="sidebarGroup d-none">
                    <ul class="sidebarMenu">
                        <li class="title">Online</li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sample/avatar2.jpg" alt="avatar" class="avatar">
                                Guiying K.
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sample/avatar3.jpg" alt="avatar" class="avatar">
                                Kita Chihoko
                                <span class="badge badge-primary">2</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sample/avatar4.jpg" alt="avatar" class="avatar">
                                Leonetta Lloyd
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sample/avatar5.jpg" alt="avatar" class="avatar">
                                Lizzie Rose
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sample/avatar6.jpg" alt="avatar" class="avatar">
                                Kari Granleese
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted () {

        // alert('ehllo')

        if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
        } else {
            // Set a flag so that we know not to reload the page twice.
            localStorage.setItem('reloaded', '1');
            location.reload();
        }
    }
}
</script>


