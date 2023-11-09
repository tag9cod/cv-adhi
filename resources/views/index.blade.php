<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title></title>
        @include('css')
        
    <body class="antialiased">
        <!-- ===============  preloader Area Start ====================-->
        <div id="preloader">
            <div class="loader">
                <img src="assets/image/logo/loader.gif" alt="preloader">
            </div>
        </div>
        <!-- ===============  preloader Area End ====================-->
        <div id="app"><app-comp/></div>
        @include('footer')
        <script src="{{ mix('js/app.js') }}"></script>
        @include('js')
    </body>
</html>
