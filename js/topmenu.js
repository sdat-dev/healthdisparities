let addTopMenu = function(){
    let navheader = document.getElementById('navbar-header');
    let headerContent = '<div class="ualbany-logo-wrapper">'+
                            '<div class = "display-flex">'+
                                '<div class = "col-xl-4 col-lg-4 col-md-4 d-flex justify-content-center">' +
                                    '<a href="https://www.suny.edu/">'+
                                        '<img class="sunny-logo" src="assets/images/SUNY-Logo.png" />'+
                                    '</a>'+
                                '</div>'+  
                            '</div>'+     
                        '</div>';
    navheader.innerHTML = headerContent;
}

addTopMenu();

