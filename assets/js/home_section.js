$('#home>section>div>button[type="button"]').eq(0).on("click", () => {
    const customerSection = $('#customer');
    const customerSectionTop = customerSection.offset().top;
    $('html, body').animate({

        scrollTop: customerSectionTop
    }); // You can adjust the duration as needed
});
$('#home>section>div>button[type="button"]').eq(1).on("click", () => {
    const customerSection = $('#item');
    const customerSectionTop = customerSection.offset().top;
    $('html, body').animate({

        scrollTop: customerSectionTop
    }); // You can adjust the duration as needed
});
$('#home>section>div>button[type="button"]').eq(2).on("click", () => {
    const customerSection = $('#order');
    const customerSectionTop = customerSection.offset().top;
    $('html, body').animate({

        scrollTop: customerSectionTop
    }); // You can adjust the duration as needed
});