// update background on body tag
// apply style to said bg
// set text font
// update images for each advert
// update alt images for each advert
// profit

function selectThemeRandom(){
    var idx = Math.floor(Math.random() * themes.length)
    var selectedTheme = themes[idx];

    console.log("selected theme " + selectedTheme)

    updateBackground(selectedTheme);
    updateAdvertImages(selectedTheme);
    updateFont(selectedTheme);
}

function updateBackground(theme){
    $('#home-body').css('background-image', 'url(' + theme.bgImg + ')');
    $('#home-body').css(theme.bgStyle);
}

function updateFont(theme){
    $('page-advert').css({"font-family": theme.font, "font-size": theme.fontSize});
}

function updateAdvertImages(theme){
    const images = [
        {
            element: "game-img",
            base: theme.gamesImg,
            alt: theme.gamesAlt
        },
        {
            element: "tool-img",
            base: theme.toolsImg,
            alt: theme.toolsAlt
        },
        {
            element: "resume-img",
            base: theme.resumeImg,
            alt: theme.resumeAlt
        },
        {
            element: "pub-img",
            base: theme.pubImg,
            alt: theme.pubAlt
        },
        {
            element: "blog-img",
            base: theme.blogImg,
            alt: theme.blogAlt
        },
    ]

    images.forEach(item => {
        setImgSources(item.element, item.base, item.alt);
    });

    function setImgSources(element, base, alt){
        $(element).attr("src", base);
        $(element).on("mouseenter", function() {
            $(element).attr("src", alt);
        }).on("mouseleave", function() {
            $(element).attr("src", base)
        })
    }
}

