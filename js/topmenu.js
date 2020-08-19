let addTopMenu = function(){
    let navheader = document.getElementById('navbar-header');
    let headerContent = '<div class="ualbany-logo-wrapper">'+
                            '<div class = "display-flex">'+
                                '<div class = "col-xl-4 col-lg-4 col-md-4">' +
                                    '<a href="https://www.albany.edu/">'+
                                        '<img class="ualbany-logo" src="assets/images/logo.png" />'+
                                    '</a>'+
                                '</div>'+    
                                '<div class = "col-xl-4 col-lg-4 col-md-4">' +
                                    '<a href="https://www.albany.edu/">'+
                                        '<img class="ualbany-logo" src="assets/images/SUNY-Logo.png" />'+
                                    '</a>'+
                                '</div>'+  
                                '<div class = "col-xl-4 col-lg-4 col-md-4">' +
                                    '<a href="https://www.albany.edu/">'+
                                        '<img class="ualbany-logo" src="assets/images/SUNY-Downstate-Logo.png" />'+
                                    '</a>'+
                                '</div>'+ 
                            '</div>'+     
                        '</div>';
    navheader.innerHTML = headerContent;
}

addTopMenu();

