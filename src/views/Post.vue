<template>
    <!-- Page loading -->
    <!-- <div id="loading d-none">
        <div class="spinner-grow"></div>
    </div> -->
    <!-- * Page loading -->

    <!-- App Header -->
    <div class="appHeader">
        <div class="left">
            <a href="#" class="icon goBack">
                <i class="icon ion-ios-arrow-back"></i>
            </a>
        </div>
        <div class="pageTitle">Blog Post</div>
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

            <!-- title -->
            <h1 class="title-lg mt-2 mb-2">
                {{post.post_title}}
            </h1>
            <!-- * title -->

            <!-- post header -->
            <div class="postHeader mb-2">
                <div>
                    <a href="#" class="badge badge-primary">TRAVEL</a>
                </div>
                <div>
                    <img src="assets/img/sample/avatar2.jpg" alt="avatar" class="avatar">
                    25 Sep 2019
                </div>
            </div>
            <!-- * post header-->

            <!-- post body -->
            <div class="postBody">

               

                <figure>
                    <img :src="post.featured_image" alt="image">
                </figure>

                <div v-html="post.post_body">
                   
                </div>
               

            </div>
            <!-- * post body -->

            <!-- author -->
            <div class="postAuthor mt-3">
                <img src="assets/img/sample/avatar.jpg" alt="avatar" class="avatar">
                <div>
                    <strong>Olivia Eklund</strong>
                    <div class="text-muted">Tech Journalist</div>
                </div>
            </div>
            <!-- * author -->

            <!-- post buttons -->
            <div class="row mt-2">
                <div class="col-6">
                    <a href="javascript:;" class="btn btn-primary btn-block">
                        <i class="icon ion-md-share"></i> Share
                    </a>
                </div>
                <div class="col-6">
                    <a href="javascript:;" class="btn btn-danger btn-block">
                        <i class="icon ion-ios-heart"></i> 1.2k
                    </a>
                </div>
            </div>
            <!-- * post buttons -->

            <div class="divider mt-2 mb-4"></div>

            <!-- related posts -->
            <div class="sectionTitle mb-2">
                <div class="title">
                    <h1>Related Posts</h1>
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
            <!-- * related posts -->

            <div class="divider mt-4 mb-4"></div>

            <!-- comments -->
            <div class="sectionTitle mb-2">
                <div class="title">
                    <h1>Comments <small>(2)</small></h1>
                </div>
            </div>

            <div class="comments">
                <div class="item">
                    <div class="image">
                        <img src="assets/img/sample/avatar2.jpg" alt="avatar" class="avatar">
                    </div>
                    <div class="content">
                        <strong>Homayoun Shakibaii</strong>
                        <div class="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula efficitur,
                            accumsan magna vitae, lobortis turpis. Suspendisse gravida, augue et vestibulum ultricies,
                            tortor neque condimentum lacus, quis tincidunt nisl est sit amet diam.
                        </div>
                        <footer>25 Sep 2019</footer>
                    </div>
                </div>
                <div class="item">
                    <div class="image">
                        <img src="assets/img/sample/avatar4.jpg" alt="avatar" class="avatar">
                    </div>
                    <div class="content">
                        <strong>Niek Bove</strong>
                        <div class="text">
                            Duis interdum suscipit ullamcorper. Proin purus mi, tincidunt eu eros tincidunt, tincidunt
                            pharetra diam. Etiam congue, massa quis facilisis euismod
                        </div>
                        <footer>25 Sep 2019</footer>
                    </div>
                </div>
            </div>
            <!-- * comments -->

            <div class="divider mt-3 mb-3"></div>

            <!-- form -->
            <form>
                <div class="form-group">
                    <textarea class="form-control" rows="4" placeholder="Write a comment..."></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-large btn-block">
                    SEND
                </button>
            </form>
            <!-- * form -->


        </div>

        <!-- app Footer -->
        <footer class="appFooter">
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
                    <i style="color: #FF6C27;" class="icon ion-ios-home"></i>
                    <span>Home</span>
                </p>
            </router-link>
        </div>
        <div class="item">
            <router-link to="/profile">
                <p>
                    <i style="color: #FF6C27;" class="icon ion-ios-contact"></i>
                    <span>Profile</span>
                </p>
            </router-link>
        </div>
        <div class="item d-none">
            <a href="components.html">
                <p>
                    <i style="color: #FF6C27;" class="icon ion-ios-analytics"></i>
                    <span>Components</span>
                </p>
            </a>
        </div>
        <div class="item">
            <a href="search.html">
                <p>
                    <i style="color: #FF6C27;" class="icon ion-ios-search"></i>
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
                        Chicago
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
                                Social
                            </a>
                        </li>
                        <li>
                            <a href="social-chat.html">
                                <i class="icon ion-ios-chatboxes"></i>
                                Chat
                            </a>
                        </li>
                        <li>
                            <a href="pages.html">
                                <i class="icon ion-ios-apps"></i>
                                Pages
                            </a>
                        </li>
                        <li>
                            <a href="components.html">
                                <i class="icon ion-ios-analytics"></i>
                                Components
                            </a>
                        </li>
                        <li>
                            <a href="blog-home.html">
                                <i class="icon ion-ios-book"></i>
                                Magazine - Blog
                            </a>
                        </li>
                        <li>
                            <a href="page-login.html">
                                <i class="icon ion-ios-lock"></i>
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="sidebarGroup">
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
    <!-- * Sidebar Menu -->
</template>
<script>
    export default {
    data() {
        return {
            post: []
        }
    },

    methods: {
        getPosts(){

            // alert('new')

             this.axios({
                url: process.env.VUE_APP_URL+'/api/posts',
                method: 'get',
                params:{
                    post_id: this.$route.params.id
                }
            })
            .then((response)=>{

                this.post = response.data

                console.log(response)
            })
            .catch((response)=>{

                console.log(response)
            })


        }
    },
    mounted() {
        this.getPosts()
    },
}
</script>