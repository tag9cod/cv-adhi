<template>
    <section class="portfolio-area" id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Portofolio</h2>
                        <p>Please Check</p>
                    </div>
                </div>
            </div>
            <div class="row grid">
                <div class="col-lg-4 col-md-6 grid-item uidesign photography" v-for="polio, ada in port" :key="ada">
                    <div class="port-img">
                        <div v-html="polio.a"></div>
                        <div v-html="polio.b"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="client-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <h2 align="center">SKILLs</h2>
                    <div class="client owl-carousel">
                        <div class="single-client text-center" v-for="hard, ide in skilhard" :key="ide">
                            <div class="client-content">
                                <h5>{{ hard.st }}</h5>
                                <h6>{{ hard.name }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                port: [
                    {
                        a: '<img src="assets/image/portfolio/inosoft_bootcamp.png" alt="portlio-image" class="img-fluid">',
                        b: '<span>Vendor Management - Vue js & Laravel</span>',
                    },
                    {
                        a: '<img src="assets/image/portfolio/landingPage_qwords.png" alt="portlio-image" class="img-fluid">',
                        b: '<span>Landing Page - Laravel & Bootstrap</span>',
                    },
                    {
                        a: '<img src="assets/image/portfolio/DigMar_spesialis.png" alt="portlio-image" class="img-fluid">',
                        b: '<span>Digital Marketing Specialist</span>',
                    },
                    {
                        a: '<img src="assets/image/portfolio/seo_outreach.png" alt="portlio-image" class="img-fluid">',
                        b: '<span>SEO Outreach</span>',
                    },
                    {
                        a: '<img src="assets/image/portfolio/kopkar_delphi.png" alt="portlio-image" class="img-fluid">',
                        b: '<span>Aplikasi Koperasi - Delphi</span>',
                    },
                    {
                        a: '<img src="assets/image/portfolio/perpus_delphi.png" alt="portlio-image" class="img-fluid">',
                        b: '<span>Aplikasi Perpustakaan - Delphi</span>',
                    },
                    {
                        a: '<img src="assets/image/portfolio/siswa_delphi.png" alt="portlio-image" class="img-fluid">',
                        b: '<span>Aplikasi Penerimaan Siswa - Delphi</span>',
                    },
                    {
                        a: '<img src="assets/image/portfolio/skripsi.png" alt="portlio-image" class="img-fluid">',
                        b: '<span>Web Penjualan Motor - PHP</span>',
                    },
                    {
                        a: '<img src="assets/image/portfolio/loker_php.png" alt="portlio-image" class="img-fluid">',
                        b: '<span>Web Penerimaan Karyawan - PHP</span>',
                    },
                ],
                skilhard: [
                    {name: 'Vue js', st: 'Hard Skills'}, 
                    {name: 'Laravel', st: 'Hard Skills'}, 
                    {name: 'Bootstrap', st: 'Hard Skills'}, 
                    {name: 'RDBMS', st: 'Hard Skills'}, 
                    {name: 'Git Control', st: 'Hard Skills'}, 
                    {name: 'Postman', st: 'Hard Skills'}, 
                    {name: 'Ads Tools', st: 'Hard Skills'}, 
                    {name: 'Socmed Ads', st: 'Hard Skills'}, 
                    {name: 'Ms. Office', st: 'Hard Skills'},
                    {name: 'Communication', st: 'Soft Skills'}, 
                    {name: 'Fast Learner', st: 'Soft Skills'}, 
                    {name: 'Team Work', st: 'Soft Skills'}, 
                    {name: 'Problem Solving', st: 'Soft Skills'}, 
                    {name: 'Critical Thinking', st: 'Soft Skills'}, 
                    {name: 'Negotiations', st: 'Soft Skills'}, 
                    {name: 'Leadership', st: 'Soft Skills'}, 
                    {name: 'Interpersonal Skill', st: 'Soft Skills'}, 
                    {name: 'Administrative Servant', st: 'Soft Skills'}, 
                ],
            };
        },

    };
</script>