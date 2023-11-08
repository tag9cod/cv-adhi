<template>
    <section class="about-area" id="about">
        <div class="container">
            <div class="col-lg-6"></div>
            <div class="row">
                <div class="col-lg-6">
                    <h1>About Me</h1>
                </div>
                <div class="col-lg-6">
                    <div class="about-content">
                        <h4>Bachelor of Information Systems</h4>
                        <p>Seorang lulusan sistem informasi dari pergururan tinggi swasta dengan memiliki berbagai macam pengalaman kerja dan projek lainnya.</p>
                    </div>
                    <div class="skill-wrapper">
                        <h4>Biodata Diri</h4>
                        <div class="skill" v-for="biodata, index in pribadi" :key="index">
                            <P>{{ biodata.name }} {{ biodata.sign }} {{ biodata.desc }}</P>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </section>
    <work-comp/>
</template>
<script>
    export default {
        data() {
            return {
                pribadi: [
                    {name: 'Universitas', sign: ':', desc: 'STMIK Insan Pembangunan'},
                    {name: 'Jurusan', sign: ':', desc: 'Sistem Informasi'},
                    {name: 'IPK', sign: ':', desc: '3.19'},
                    {name: 'Tahun', sign: ':', desc: '2015 - 2019'},
                    {name: 'Email', sign: ':', desc: 'tgunawant@gmail.com'},
                    {name: 'Alamat', sign: ':', desc: 'Tangerang - Banten'},
                ],
            };
        },
    };
</script>