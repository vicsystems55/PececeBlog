<template>
        <!-- Page loading -->
    <div id="loading d-none">
        <div class="spinner-grow"></div>
    </div>
    <!-- * Page loading -->

    <!-- App Header -->
    <div class="appHeader">
        <div class="left">
            <a href="javascript:;" class="icon goBack">
                <i class="icon ion-ios-arrow-back"></i>
            </a>
        </div>
        <div class="pageTitle">Register</div>
        <div class="right">
            <a href="page-login.html" class="link">Login</a>
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
    <div id="appCapsule" class="pb-2">

        <div class="appContent pb-0">

            <img src="assets/img/sample/draw-2.png" alt="img" class="img-fluid mt-3 mb-3">

            <div class="sectionTitle text-center">
                <div class="title">
                    <h1>Join Us Now!</h1>
                </div>
                <div class="lead mb-3">Sign up to join</div>
            </div>

            <form action="index.html">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password">
                </div>
                <div>
                    <button type="submit" class="btn btn-primary btn-lg btn-block">
                        Sign up
                    </button>
                </div>
            </form>

        </div>


    </div>
    <!-- appCapsule -->
</template>