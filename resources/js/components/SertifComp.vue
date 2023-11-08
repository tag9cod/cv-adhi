<template>
    <section class="portfolio-area" id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Pelatihan</h2>
                        <p>Berbagai pelatihan yang telah saya dapatkan dari berbagai sumber lembaga guna meningkatkan pengetahuan dan keterampilan</p>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="blog-details-left">
                        <div class="related-post-content">
                            <div class="related-post">
                                <div class="related-post-single left--13" v-for="latih, ide in kursus" :key="ide">
                                    <div class="zoom">
                                        <div v-html="latih.b"></div>
                                        <div class="post-card">
                                            <h6>{{ latih.a }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-details-left">
                        <div class="related-post-content">
                            <div class="related-post">
                                <div class="related-post-single left--13" v-for="latih1, ide in kursus1" :key="ide">
                                    <div class="zoom">
                                        <div v-html="latih1.b"></div>
                                        <div class="post-card">
                                            <h6>{{ latih1.a }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-details-left">
                        <div class="related-post-content">
                            <div class="related-post">
                                <div class="related-post-single left--13" v-for="latih2, ide in kursus2" :key="ide">
                                    <div class="zoom">
                                        <div v-html="latih2.b"></div>
                                        <div class="post-card">
                                            <h6>{{ latih2.a }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-details-left">
                        <div class="related-post-content">
                            <div class="related-post">
                                <div class="related-post-single left--13" v-for="latih3, ide in kursus3" :key="ide">
                                    <div class="zoom">
                                        <div v-html="latih3.b"></div>
                                        <div class="post-card">
                                            <h6>{{ latih3.a }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                kursus: [
                    { 
                        a: 'Memahami Siklus Audit', 
                        b: '<img src="assets/image/blog/audit_atlas.png" alt="resent-post">', 
                    },
                    { 
                        a: 'Data Scientist', 
                        b: '<img src="assets/image/blog/data_science.png" alt="resent-post">', 
                    },
                    { 
                        a: 'Front End Development', 
                        b: '<img src="assets/image/blog/bangalore.png" alt="resent-post">', 
                    },
                ],
                kursus2: [
                    { 
                        a: 'Scrum Methodology', 
                        b: '<img src="assets/image/blog/scrum.png" alt="resent-post">', 
                    },
                    { 
                        a: 'Telesales', 
                        b: '<img src="assets/image/blog/telesales.png" alt="resent-post">', 
                    },
                    { 
                        a: 'Lean Methodology', 
                        b: '<img src="assets/image/blog/lean.png" alt="resent-post">', 
                    },
                ],
                kursus1: [
                    { 
                        a: 'Belajar Dasar AWS Cloud', 
                        b: '<img src="assets/image/blog/dicoding1.png" alt="resent-post">', 
                    },
                    { 
                        a: 'Belajar Dasar DevOps', 
                        b: '<img src="assets/image/blog/dicoding2.png" alt="resent-post">', 
                    },
                    { 
                        a: 'Belajar Dasar Javascript', 
                        b: '<img src="assets/image/blog/dicoding3.png" alt="resent-post">', 
                    },
                ],
                kursus3: [
                    { 
                        a: 'Intro to Data Analytics', 
                        b: '<img src="assets/image/blog/analis.png" alt="resent-post">', 
                    },
                    { 
                        a: 'Intro to Digital Marketing', 
                        b: '<img src="assets/image/blog/digmar2.png" alt="resent-post">', 
                    },
                    { 
                        a: 'Mentor - Learning HTML & CSS', 
                        b: '<img src="assets/image/blog/html.png" alt="resent-post">', 
                    },
                ],
            };
        },
    };
</script>