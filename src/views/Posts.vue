<template>
    <!-- Page loading -->
    <div id="loading d-none">
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
            <!-- <h1 class="title-lg mt-2 mb-2">
                Posts Title
            </h1> -->
            <!-- * title -->

            <!-- post header -->
          
            <!-- * post header-->

            <!-- post body -->
            <div class="postBody">

                <div v-for="post in posts" :key="post.index" class="content">

                    <h1 class="title-lg mt-2 mb-2">
                        {{post.post_title}}
                    </h1>

                    <figure>
                        <img :src="post.featured_image" alt="image">
                        
                    </figure>

                    <p>
                        {{post.post_description.substring(0, 200) + '...'}}
                    </p>

                </div>

            </div>
           


        </div>

  

    </div>
    <!-- * appCapsule -->




    <!-- App Bottom Menu -->
    <div class="appBottomMenu">
        <div class="item">
            <a href="index.html">
                <p>
                    <i class="icon ion-ios-water"></i>
                    <span>Home</span>
                </p>
            </a>
        </div>
        <div class="item">
            <a href="pages.html">
                <p>
                    <i class="icon ion-ios-apps"></i>
                    <span>Pages</span>
                </p>
            </a>
        </div>
        <div class="item">
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
            posts: []
        }
    },

    methods: {
        getPosts(){

            // alert('new')

             this.axios({
                url: process.env.VUE_APP_URL+'/api/posts',
                method: 'get'
            })
            .then((response)=>{

                this.posts = response.data

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