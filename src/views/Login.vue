<template>
        <!-- Page loading -->
    <div id="loading d-none">
        <div class="spinner-grow"></div>
    </div>
    <!-- * Page loading -->

    <!-- App Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="icon goBack">
                <i class="icon ion-ios-arrow-back"></i>
            </router-link>
        </div>
        <div class="pageTitle">Login</div>
        <div class="right">
            <router-link to="/register" class="link">Register</router-link>
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


            <div class="sectionTitle text-center mt-3">
                <div class="title">
                    <h1>Welcome Back</h1>
                </div>
                <div class="lead mb-2">Sign in to continue</div>
            </div>

            <form action="index.html">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group row mt-3 mb-3">
                    <div class="col-6">
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheck1">
                            <label class="form-check-label" for="flexCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div class="col-6 text-end">
                        <a href="page-forgot-password.html" class="text-muted">Forgot password?</a>
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary btn-lg btn-block">
                        Sign in
                    </button>
                </div>
            </form>
            <div class="divider mt-3 mb-3"></div>

            <div class="text-muted text-center mb-2">or login with</div>
            <div class="row">
                <div class="col-6">
                    <button type="button" class="btn btn-facebook btn-block">
                        <i class="icon ion-logo-facebook"></i>
                        Facebook
                    </button>
                </div>
                <div class="col-6">
                    <button type="button" class="btn btn-twitter btn-block">
                        <i class="icon ion-logo-twitter"></i>
                        Twitter
                    </button>
                </div>
            </div>


        </div>


    </div>
    <!-- appCapsule -->
</template>