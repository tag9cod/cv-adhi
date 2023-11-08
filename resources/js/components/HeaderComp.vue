<template>
    <header class="header-menu" id="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3">
                    <div class="logo">
                        <router-link to="/"><img src="assets/image/logo/logo.png" alt="logo"></router-link>
                    </div>
                </div>
                <div class="col-lg-9 d-none d-lg-block">
                    <div class="main-menu">
                        <nav class="nav-menu">
                            <ul id="navigation">
                                <li><router-link to="/">Home</router-link></li>
                                <li><router-link to="/about">About</router-link></li>
                                <li><router-link to="/sertifikasi">Sertifikasi</router-link></li>
                                <li><router-link to="/portofolio">Portofolio</router-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-12 d-block d-lg-none">
                    <div class="mobile_menu"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
      
    };
</script>