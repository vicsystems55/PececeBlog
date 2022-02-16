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
        <div class="pageTitle">Social Profile</div>
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

            <!-- profile detail -->
            <div class="profileDetail mt-2">
                <div class="profileBox">
                    <div class="image">
                        <img src="assets/img/sample/avatar6.jpg" alt="avatar" class="avatar">
                    </div>
                    <div class="info">
                        <strong>Diego Esteve</strong>
                        <div class="text-muted">
                            <i class="icon ion-ios-pin"></i>
                            California
                        </div>
                    </div>
                </div>
                <div class="bio">
                    Hi, This is Diego from California. I like travel and taking pictures. Follow me if you like my
                    profile.
                </div>
                <div class="stats">
                    <div class="row">
                        <div class="col-4">
                            Post<strong>598</strong>
                        </div>
                        <div class="col-4">
                            Following<strong>1.2k</strong>
                        </div>
                        <div class="col-4">
                            Followers<strong>55k</strong>
                        </div>
                    </div>
                </div>
                <div class="row pt-2 pb-2">
                    <div class="col-6">
                        <a href="javascript:;" class="btn btn-primary btn-sm btn-block">
                            <i class="icon ion-ios-add"></i>
                            Follow
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="social-chat.html" class="btn btn-dark btn-sm btn-block">
                            <i class="icon ion-ios-mail"></i>
                            Message
                        </a>
                    </div>
                </div>
                <div class="divider mt-0 mb-2"></div>
            </div>
            <!-- * profile detail -->

            <!-- posts -->
            <div class="profilePost row">
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo2.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo3.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo4.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo5.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo6.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo7.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo8.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo9.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo10.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
                <div class="item col-6">
                    <a href="social-post.html">
                        <img src="assets/img/sample/photo11.jpg" alt="img" class="image img-fluid">
                    </a>
                </div>
            </div>
            <!-- * posts -->
        </div>

    </div>
    <!-- appCapsule -->


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
        <div class="item active">
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
</template>