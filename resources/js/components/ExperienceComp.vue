<template>
    <section class="work-area" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Work Experience</h2>
                    </div>
                </div>
                <div class="col-lg-6" v-for="gawe, ide in kerja" :key="ide">
                    <div class="container-fluid">
                        <div class="work-experience ml-20 ">
                            <h4>{{ gawe.kantor }}</h4>
                            <h5>{{ gawe.jabatan }} - {{ gawe.posisi }}</h5>
                            <h6>{{ gawe.tahun }}</h6>
                            <p>{{ gawe.desc }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Project Based</h2>
                    </div>
                </div>
                <div class="col-lg-6" v-for="base, ide in project" :key="ide">
                    <div class="container-fluid">
                        <div class="work-experience ml-20 ">
                            <h4>{{ base.kantor }}</h4>
                            <h6>{{ base.durasi }}</h6>
                            <h5>{{ base.name }} - {{ base.posisi }}</h5>
                            <p>{{ base.desc }} </p>
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
                kerja: [
                    {
                        kantor: 'PT Lippo Karawaci tbk', 
                        posisi: 'Magang', 
                        jabatan: 'Admin Internal Audit', 
                        tahun: 'Agustus - Oktober 2023', 
                        desc: 'Merekap atau mengecek data audit, Membuat laporan audit'
                    },
                    {
                        kantor: 'PT Surya Toto Indonesia tbk', 
                        posisi: 'Karyawan', 
                        jabatan: 'Staff Produksi', 
                        tahun: 'Februari 2013 - Januari 2023', 
                        desc: 'Membantu proses produksi, Merekap data produksi dan Membuat laporan hasil produksi'
                    },
                ],
                project: [
                    {
                        name: 'Front End Web', 
                        kantor: 'PT Sinergi Peta Sejahtera', 
                        posisi: 'Bootcamp', 
                        status: 'Online', 
                        durasi: 'Maret - Juni 2023', 
                        desc: 'Membuat desain web vendor management dengan Vue js',
                    },
                    {
                        name: 'Digital Marketing Specialist', 
                        kantor: 'PT Qwords Company International', 
                        posisi: 'Virtual Internship', 
                        status: 'Online', 
                        durasi: 'Mei - Juni 2023', 
                        desc: 'Melakukan market plan di Fb Ads dan Google Ads dan Riset keyword',
                    },
                    {
                        name: 'Fullstack Developer Web', 
                        kantor: 'PT Qwords Company International', 
                        posisi: 'Virtual Internship', 
                        status: 'Online', 
                        durasi: 'Februari - Maret 2023', 
                        desc: 'Membuat situs Qwords.com dengan dengan laravel dan Bootstrap',
                    },
                    {
                        name: 'SEO Outreach', 
                        kantor: 'PT Niagahoster', 
                        posisi: 'Virtual Internship', 
                        status: 'Online', 
                        durasi: 'Desember 2022 - Januari 2023', 
                        desc: 'Melakukan riset keyword, Audit SEO, Negative Backlink dan Strategi SEO',
                    },
                ],
            };
        },
    };
</script>