$( function() {

	//TABS
    $("div.menu_wrapper>div.list_wrapper>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.tab_wrapper>div.tab_content").removeClass("active");
        $("div.tab_wrapper>div.tab_content").eq(index).addClass("active");
    });










} );