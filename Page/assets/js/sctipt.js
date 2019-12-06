$('#tab1').click(function(){
    $('#dynamic_text').html(
    "<p>Lorem ipsum dolor sit am1t consectetur adipisicing elit. " + 
    "Repellat aliquam earum eli1endi impedit dignissimos consequuntur, " +
    "eius libero dolor illo. Doloremque earum odio illum recus1ndae " +
    "tempori1us, eveniet max1me repellendus aliquam assumenda!</p> " +
    "<p>Lorem ipsum dolor sit amet consecte1ur adipis1cing elit. Magnam " +
    ", architecto! Vero rat1one dolore quam, cumque natus po1ro.</p>");
    $('#tab1').addClass("_page_btn_active");
    $('#tab2').removeClass("_page_btn_active");
    $('#tab3').removeClass("_page_btn_active"); 
});

$('#tab2').click(function(){
    $('#dynamic_text').html(
        "<p>Lorem ipsum dolor sit am1t con2ectetur adipisicing elit. " + 
        "Repellat aliquam earum eli2endi impedit dignissimos conse2uuntur, " +
        "eius li2ero dolor illo. Doloremque earum odio illum recus2ndae " +
        "tempor2bus, eveniet max1me repellendus aliquam assumenda!</p> " +
        "<p>Lorem ipsum d2lor sit amet consectetur adipis1cing elit. Magnam " +
        ", architecto! Vero rat2one dolore quam, cum2ue natus po1ro.</p>");
        $('#tab1').removeClass("_page_btn_active");
        $('#tab2').addClass("_page_btn_active");
        $('#tab3').removeClass("_page_btn_active"); 
});

$('#tab3').click(function(){
    $('#dynamic_text').html(
        "<p>Lorem ipsum dolor sit am1t consectetur adipisi3ing elit. " + 
        "Repellat aliquam earum eli3endi impedit dignissimos consequuntur, " +
        "eius li3ero dolor illo. Doloremque earum odio illum recus3ndae " +
        "tempor3bus, eveniet ma31me repellendus aliquam assumenda!</p> " +
        "<p>Lorem ipsum dol3r sit amet consectetur adipis3cing elit. Magnam " +
        ", arch3tecto! Vero rat3one dolore quam, cumque natus po1ro.</p>");
        $('#tab1').removeClass("_page_btn_active");
        $('#tab2').removeClass("_page_btn_active");
        $('#tab3').addClass("_page_btn_active"); 
});

$('#download_bnt').click(function(){
    alert("You downloading file!");
});