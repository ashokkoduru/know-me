$(function(){
    $("#profile-card-header").typed({
        strings: ["Web Developer",
            "Python Enthusiast"],
        typeSpeed: 1,
        loop: true
    });
});

jQuery(document).ready(function($) {

    "use strict";

    $('#profile-tabs-content').responsiveTabs({
        startCollapsed: 'accordion'
    });

 });