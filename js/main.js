

// loading to init...........

$(document).ready(function () {
    $('#ready').fadeOut(2000, function () {
        $('body').css('overflow', 'visible');
        $('#topBtn').css('display', 'none')
    })
})


// when click event on topbtn & toggle 

$('#topBtn').click(function () {
    $('html , body').animate({ scrollTop: 0 }, 500);
})

$('#btnTopFooter').click(function () {
    $('html , body').animate({ scrollTop: 0 }, 500);
})

$(window).scroll(function () {

    let featuresOffset = $('#features').offset().top;
    let aboutOffset = $('#about').offset().top;

    if ($(window).scrollTop() > featuresOffset && $(window).scrollTop() < aboutOffset) {
        $('#topBtn').fadeIn(500);
    }
    else {
        $('#topBtn').fadeOut(250);
    }
})

// change toggle navbar style

$('.navbar .navbar-toggler').click(() => {
    $('.navbar .navbar-toggler').toggleClass('convert');
})


// add class active to an active link and smooth move.....

$('.navbar-nav .nav-item a').click(function () {
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
    let currentSection = $(this).attr('href');
    let currentOffset = $(currentSection).offset().top;
    $('html , body').animate({ scrollTop: currentOffset }, 500);
});

// select the button

let sel = document.querySelector('.custome .language');
let selText = document.querySelector('.custome .language button').innerHTML;

// for change dir & lang

let active = true;

// for media query when resize

function changeDirLeft() {
    if ($('body').width() > 992) {
        $('.special').css({ 'marginRight': '0px', 'marginLeft': 'auto' });
        $('.special-second').css({ 'marginLeft': '0px', 'marginRight': 'auto' });
    }
    else {
        $('.special').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
        $('.special-second').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
    }
}

function changeDirRight() {
    if ($('body').width() > 992) {
        $('.special').css({ 'marginLeft': '0px', 'marginRight': 'auto' });
        $('.special-second').css({ 'marginRight': '0px', 'marginLeft': 'auto' });
    }
    else {
        $('.special').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
        $('.special-second').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
    }
}

$(window).on('resize', () => {

    if (active === true) {
        changeDirLeft();
    }
    else {
        changeDirRight();
    }
});


// click on button for change lang 

sel.addEventListener('click', () => {
    active = !active;

    if (active === true) {
        $('body').css('fontFamily', 'Roboto');

        // .............................

        $('nav').attr('dir', 'ltr');
        $('.navbar .navbar-toggler').css({ 'marginLeft': '0px', 'marginRight': '15px' });
        $('.collapse .navbar-nav').addClass('me-auto');
        $('.collapse .navbar-nav').removeClass('ms-auto');
        $('.custome').removeClass('me-auto');

        $('a[href = "#home"]').text('Home'); 
        $('a[href = "#features"]').text('Features');
        $('a[href = "#screenshots"]').text('Screenshots');
        $('a[href = "#about"]').text('About Us');
        $('a[href = "#get"]').text('Get Our App');

        /**last update add #contact En nav  */
        $('a[href = "#contact"]').text('Contact Us');
        $('a[href = "#blog"]').text('  Blog');

        // blogsDetailes page handel ar & en 
        $('a[href = "index.html#home"]').text('Home');
        $('a[href = "index.html#features"]').text('Features');
        $('a[href = "index.html#screenshots"]').text('Screenshots');
        $('a[href = "index.html#about"]').text('About Us');
        $('a[href = "index.html#get"]').text('Get Our App');
        $('a[href = "index.html#contact"]').text('Contact Us');
        $('a[href = "index.html#blog"]').text('  Blog');

        $('.custome .language button').text('العربيـة');
        // ...............................

        $('header').attr('dir', 'ltr');
        $('.caption h1').text(`Imports and exports help nations' economies thrive.`)
        $('.caption p').text('To assist Arab countries in progressing and prospering, as well as to spread our Arab products throughout the world, we created this app that will facilitate trade between manufacturer and importer and provide them with a variety of features to assist them in trading and investing in our Arab products.');
        $('.home .vectors .vector').css('marginTop', '0px');
        $('.home .buttons .special-m').html(`<i
            class="fa-solid fa-download me-1"></i> Get App`);
        $('.home .buttons .special-m i').addClass('me-1');
        // $('.home .buttons .special-m').removeClass('ms-3');
        // $('.home .buttons .special-m').addClass('me-3');
        $('.home .buttons .special-m i').removeClass('ms-1');
        $('.home .buttons a').css('fontSize', '18px');
        $('.home .buttons .second-btn').html(`<i
            class="fa-solid fa-circle-play me-1"></i> Watch Video`);
        $('.home .buttons .second-btn i').addClass('me-1');
        $('.home .buttons .second-btn i').removeClass('ms-1');

        // .................................................

        $('.features').attr('dir', 'ltr');

        if ($('body').width() > 992) {
            $('.special').css({ 'marginRight': '0px', 'marginLeft': 'auto' });
            $('.special-second').css({ 'marginLeft': '0px', 'marginRight': 'auto' });
        }
        else {
            $('.special').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
            $('.special-second').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
        }

        $('.feature span').css({ 'marginLeft': '0px', 'marginRight': '14px' })
        $('.features .main-title h5').text('Features');
        $('.features .main-title h2').text('We do this and more');
        $('.feature .one').text('You can add your products and upload photos of them, and also a video explaining your product and how it works. ');
        $('.feature .two').html('You have the option of selling or purchasing products wholesale or retail.');
        $('.feature .three').text('You can specify your own terms for sales and purchases ');
        $('.feature .four').text('We provide full marketing for all of your products throughout the year to assist you in selling your products.');

        $('.feature .five').text('You can enter five free tenders as a seller and one free tender as a buyer, with the option of adding more tenders. ');
        $('.feature .six').text('No commission is taken upon the transaction is completed.');
        $('.feature .seven').text('We provide you with all of the products, resources, raw materials, and goods that you are missing in a variety of types and prices.');
        $('.feature .eight').text('We will help you improve your business and increase your sales by buying or selling products that are not available on your country is market');

        // ................................................

        $('.screenshots h5').text('Application');
        $('.screenshots h2').text('Get the knowledge about the app');

        // ................................................

        $('.about').attr('dir', 'ltr');
        $('.about h5').text('Who We Are?  ');
        $('.about h2').text('About Zari Express');
        $('.about p').text('An application that provides various reservation services for hospitals, salons, restaurants, banks, and others... In Saudi Arabia, Egypt, and soon in the GCC Countries, and you can see all the offers and coupons while you are at home.');

        // .................................................

        $('.get').attr('dir', 'ltr');
        $('.get .main-title h5').text('Get our app');
        $('.get .main-title h2').text('Download the application');
        $('.get .main-title p').text('Our applications are available now on App store & Play store..');
        $('.parag p').css('textAlign', 'start');
        $('.client h4').text('Zari Express (Client App)');
        $('.client i').removeClass('ms-3');
        $('.client i').addClass('me-3');
        $('.client .parag .available').text('Available on the');
        $('.client .parag .get-on').text('Get On');
        $('.manager h4').text('Zari Express (Manager App)');
        $('.manager i').removeClass('ms-3');
        $('.manager i').addClass('me-3');
        $('.manager .available').text('Available on the');
        $('.manager .get-on').text('Get On');

        // ...................................................

        $('.footer').attr('dir', 'ltr')
        $('.logo-footer p').text(` It is an application that improves and facilitates trade between Arab countries by allowing easy import and export.`);
        $('.logo-footer h5').text('Follow us ');
        $('.navigate .first-navigate').text('navigate');
        $('.navigate .contact').text('Contact us');
        $('.navigate .contact2').text('KSA Branches');
        $('.navigate .contact3').text('Egypt Branches');
        $('.navigate div span').removeClass('ms-3');
        $('.navigate div span').addClass('me-3');
        $('.navigate div .ksa').text('7865 King Abdullah Bin - Abdulaziz Road - Jasham - AL-Madina - KSA.');
        $('.navigate div .ksa2').text('Anas Abn Malek Street - Osman Abn Afan - El-Ryad - KSA');
        $('.navigate div .egy').text('9 Street Saeed Zakaria - Nasr City - Cairo - Egypt.');
        $('.phone a').attr('dir', 'ltr');
        $('.phone .first').removeClass('ms-2');
        $('.phone .first').addClass('me-2');
        $('.phone .second').removeClass('me-2');
        $('.phone .second').addClass('ms-2');

        // Contact En
        $('#contact').attr('dir', 'ltr');
        $('.main__title-h2').text('Contact Us');
        $('.label__name').text('Name');
        $('.label__phone').text(' Phone');
        $('.label__email').text('  Email');
        $('.label__company').text('Company Name');
        $('.label__message').text('Message');
        $('.btn__message').text('Send Message');

        // Blog En 
        $('#rowData').attr('dir', 'ltr');
        $('.blog__title-h2').text('Blogging');
        displayBlogEn();
    }
    else {
        $('body').css('fontFamily', 'Tajawal')

        // .............................

        $('nav').attr('dir', 'rtl');
        $('.navbar .navbar-toggler').css({ 'marginLeft': '15px', 'marginRight': '0px' });
        $('.collapse .navbar-nav').addClass('ms-auto');
        $('.collapse .navbar-nav').removeClass('me-auto');
        $('.custome').addClass('me-auto');

        $('a[href = "#home"]').text('الرئيسية');
        $('a[href = "#features"]').text('المميزات'); 
        $('a[href = "#about"]').text('   من نحن');
        $('a[href = "#get"]').text('الحصول على التطبيق');
        $('a[href = "#contact"]').text('تواصل معنا');
        $('a[href = "#blog"]').text('  مقالات');

        /**last update add #contact and blog En nav  */
        $('a[href = "index.html#home"]').text('الرئيسية');
        $('a[href = "index.html#features"]').text('المميزات'); 
        $('a[href = "index.html#about"]').text('   من نحن');
        $('a[href = "index.html#get"]').text('الحصول على التطبيق');
        $('a[href = "index.html#contact"]').text('تواصل معنا');
        $('a[href = "index.html#blog"]').text('  مقالات');


        $('.custome .language button').text('English');
        // ...............................

        $('header').attr('dir', 'rtl');
        $('.caption h1').text('‌يزدهر اقتصاد الدول من خلال الاستيراد والتصدير')
        $('.caption p').text('‌لمساعدة الدول العربيه علي التقدم و الازدهار و لنشر منتجاتنا العربيه في العالم كله، قمنا بصناعة هذا التطبيق الذي سيسهل حركة التجارة بين المُصنع و المستورد و تقديم لهم الكثير من المميزات لتساعدهم علي التجارة و الاستثمار في منتجاتنا العربيه. ');
        $('.home .vectors .vector').css('marginTop', '30px');
        $('.home .buttons .special-m').html(`<i class="fa-solid fa-download me-1"></i> الحصول علي التطبيق`);
        $('.home .buttons .special-m i').removeClass('me-1');
        // $('.home .buttons .special-m').addClass('ms-3');
        $('.home .buttons .special-m i').addClass('ms-1');
        $('.home .buttons a').css('fontSize', '16px');
        $('.home .buttons .second-btn').html(`<i
            class="fa-solid fa-circle-play me-1"></i> شاهد الفيديو`);
        $('.home .buttons .second-btn i').removeClass('me-1');
        $('.home .buttons .second-btn i').addClass('ms-1');

        // .................................................

        $('.features').attr('dir', 'rtl');

        if ($('body').width() > 992) {
            $('.special').css({ 'marginLeft': '0px', 'marginRight': 'auto' });
            $('.special-second').css({ 'marginRight': '0px', 'marginLeft': 'auto' });
        }
        else {
            $('.special').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
            $('.special-second').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
        }

        $('.feature span').css({ 'marginRight': '0px', 'marginLeft': '14px' })
        $('.features .main-title h5').text('المميزات');
        $('.features .main-title h2').text('نسوي كذا وأكثر');
        $('.feature .one').text('إضافة  منتجاتك و رفع صور لها مع عرض فيديو يشرح منتجك و طريقة عملك');
        $('.feature .two').html('اختيار البيع أو الشراء للمنتجات بالجملة أو التجزئة');
        $('.feature .three').text('‌وضع الشروط الخاصة بك في عمليات البيع والشراء');
        $('.feature .four').text('تسويق كامل لجميع منتجاتك طوال السنة لمساعدتك  على بيع منتجاتك');
        $('.feature .five').text('يمكنك عمل مناقصات من خلال التطبيق والدخول في خمس مناقصات مجانيه كبائع و مناقصة واحدة مجانيه كمشتري مع امكانية  اضافة المزيد من المناقصات');
        $('.feature .six').text('‌ لا يتم اخذ اي عموله عند إتمام الصفقة');
        $('.feature .seven').text('نوفر لك جميع المنتجات، الموارد، المواد الخام و السلع التي تنقصك بمختلف الانواع و الاسعار');
        $('.feature .eight').text('سنساعدك على تحسين مشروعك و زيادة مبيعاتك عن طريق شراء  أو بيع  المنتجات الغير متاحة في السوق الخاص بدولتك');

        // ................................................

        $('.screenshots h5').text('التطبيق');
        $('.screenshots h2').text('تعرف على التطبيق');

        // ................................................

        $('.about').attr('dir', 'rtl');
        $('.about h5').text('من نحن ؟');
        $('.about h2').text('عن زاري اكسبرس  ');
        $('.about p').text(`  زاري اكسبريس ، هي إحدى مشروعات شركة زاري وهي شركة مصرية سعودية ، تقدم خدمات تكنولوجية لتنمية القطاع التجاري في مصر والسعودية وقريباً في دول الخليج، و متواجدة منذ عام 2014 و من خلالنا يمكنك بيع و شراء المنتجات و الموارد بدون أي عمولة`);

        // .................................................

        $('.get').attr('dir', 'rtl');
        $('.get .main-title h5').text('الحصول على التطبيق ؟');
        $('.get .main-title h2').text('حمل التطبيق احجز موعدك وريح بالك!');
        $('.get .main-title p').text('التطبيق متاح الآن على App store & Play store');
        $('.parag p').css('textAlign', 'start');
        $('.client h4').text('Zari Express (تطبيق العميل)');
        $('.client i').removeClass('me-3');
        $('.client i').addClass('ms-3');
        $('.client .parag .available').text('متاح علي');
        $('.client .parag .get-on').text('الذهاب لــ');
        $('.manager h4').text('Zari Express  (تطبيق المدير)');
        $('.manager i').removeClass('me-3');
        $('.manager i').addClass('ms-3');
        $('.manager .available').text('متاح علي');
        $('.manager .get-on').text('الذهاب لــ');

        // ...................................................
        $('.footer').attr('dir', 'rtl')
        $('.logo-footer p').text('  هو تطبيق لتحسين وتسهيل التجارة بين البلدان العربية من خلال الاستيراد والتصدير بدون بذل اي مجهود   ');
        $('.logo-footer h5').text('تابعنــــا');
        $('.navigate .first-navigate').text('التنقل');
        $('.navigate .contact').text('تواصل معنــا');
        $('.navigate .contact2').text('فروع السعودية');
        $('.navigate .contact3').text('فروع مصر');
        $('.navigate div span').removeClass('me-3');
        $('.navigate div span').addClass('ms-3');
        $('.navigate div .ksa').text('7865 الملك عبدالله بن عبدالعزيز - جاسم - المدينة المنورة - المملكة العربية السعودية.');
        $('.navigate div .ksa2').text('طريق انس بن مالك تقاطع طريق عثمان بن عفان - الرياض  - المملكة العربية السعودية.');
        $('.navigate div .egy').text('9 شارع سعيد زكريا - مدينة نصر - القاهرة - جمهورية مصر العربية.');
        $('.phone a').attr('dir', 'ltr');
        $('.phone .first').removeClass('me-2');
        $('.phone .first').addClass('ms-2');
        $('.phone .second').removeClass('ms-2');
        $('.phone .second').addClass('me-2');

        // contact Ar
        $('#contact').attr('dir', 'rtl');
        $('.main__title-h2').text('تواصل معنا');
        $('.label__name').text('الاسم');
        $('.label__phone').text('رقم الهاتف');
        $('.label__email').text('البريد الالكتروني');
        $('.label__company').text('اسم الشركه');
        $('.label__message').text('اترك رساله');
        $('.btn__message').text('  ارسلرساله');

        // Blog Ar 
        $('#rowData').attr('dir', 'rtl');
        $('.blog__title-h2').text('مقالات');
        displayBlogAr()

    }
})

// click on video button

function toggleTrailer() {
    let trailer = document.querySelector('.trailer');
    let video = document.querySelector('.trailer iframe');

    trailer.classList.toggle('play');
    video.pause();
    video.currentTime = 0;
}

let btn = document.querySelector('.modal-btn');
let closeBtb = document.querySelector('.close');

btn.addEventListener('click', () => {
    toggleTrailer();
});

closeBtb.addEventListener('click', () => {
    toggleTrailer();
});



/** contact us send message */ 
let userName = document.getElementById('label__name');
let phone = document.getElementById('label__phone');
let email = document.getElementById('label__email');
let companyname = document.getElementById('label__company');
let message = document.getElementById('label__message');

async function sendMessage() {
    console.log('test');
    if (usernameValidation()==true && compVali()==true&& phoneVali()==true&& emailVali()==true) {
        let data = {
            UserName: userName.value,
            Phone: phone.value,
            Email: email.value,
            Company: companyname.value,
            Message: message.value,
        } 
        
        let response = await fetch("https://zariexpress.com/api/web/contactus",{
            method: "POST", 
            body: data
            } ).then(res => {
                console.log(res);
            if (res.status==200) {
                alert('The message has been sent successfully!')  
            }else{
                alert('Oops samting wrang!')  
            }
            });
            console.log(response);  
    }else{
        alert(' Please enter all data  ')
    }
 
}
function usernameValidation(){ 
    if ( userName.value!="") 
    {
       return true;
    }
    else
    { 
       return false
    }
}  
function phoneVali(){ 
    if ( phone.value!="") 
    {
       return true;
    }
    else
    { 
       return false
    }
} 
function emailVali(){ 
    if ( email.value!="") 
    {
       return true;
    }
    else
    { 
       return false
    }
} 
function compVali(){ 
    if ( companyname.value!="") 
    {
       return true;
    }
    else
    { 
       return false
    }
} 

// blog get data
(async function () {
    let response = await fetch("https://zariontime.com/api/web/home")
    let responseData = await response.json();
    Blogs = responseData.Blogs;
    displayBlogEn();
    console.log(Blogs);
})();

function displayBlogEn() {
    var cartona = ``;
    for (var i = 0; i < Blogs.length; i++) {
        cartona += `
        <div class="app__blog col-md-4 mb-3 p-2 position-relative ">
            <div   class="w-100 bg-blog rounded-3 overflow-hidden  p-3 ">
            <a target="_blank" href="blogsDetailes.html?id=${Blogs[i].IDBlog}">
                 <img class="blog-img w-100" src="${Blogs[i].BlogImage}">
            </a>
                 <h3 class='mt-3 app__blog-h3'>${Blogs[i].BlogTitleEn}</h3>
                <div class="app__Blog-footer">
                    <div class="app__Blog-footer-right ">
                        <i class="fa fa-user"></i>
                        <span class='mt-3 blogAuthor' >${Blogs[i].BlogAuthorEn}</span>
                    </div>
                    <div class="app__Blog-footer-left">
                        <span>${Blogs[i].BlogDate}</span>
                    </div>
                </div>
            </div>
        </div>
    `
    }
    document.getElementById("rowData").innerHTML = cartona;
}

function displayBlogAr() {
    var cartona = ``;

    for (var i = 0; i < Blogs.length; i++) {
        cartona += `
        <div class="app__blog col-md-4 mb-3 p-2 position-relative ">
            <div class="w-100 bg-blog rounded-3 overflow-hidden  p-3 ">
            <a href="blogsDetailes.html?id=${Blogs[i].IDBlog}" target="_blank">
                 <img class="blog-img w-100" src="${Blogs[i].BlogImage}">
            </a>
                <h3 class='mt-3 app__blog-h3'>${Blogs[i].BlogTitleAr}</h3>
                <div class="app__Blog-footer">
                    <div class="app__Blog-footer-right ">
                        <i class="fa fa-user"></i>
                        <span class='mt-3 blogAuthor' >${Blogs[i].BlogAuthorAr}</span>
                    </div>
                    <div class="app__Blog-footer-left">
                        <span>${Blogs[i].BlogDate}</span>
                    </div>
                </div>
            </div>
        </div>
    `
    }
    document.getElementById("rowData").innerHTML = cartona;
}
