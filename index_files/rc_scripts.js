//Equal Heights
$(document).ready(function () {
    var equalHeight = $('.height').equalHeight({wait: true});
    // Browser supports matchMedia
    if (window.matchMedia) {
        // MediaQueryList
        var mql = window.matchMedia("(min-width: 768px)");
        // MediaQueryListListener
        var equalHeightCheck = function (mql) {
            if (mql.matches) {
                equalHeight.start();
            } else {
                equalHeight.stop();
            }
        };
        // Add listener
        mql.addListener(equalHeightCheck);
        // Manually call listener
        equalHeightCheck(mql);
    }
    // Browser doesn't support matchMedia
    else {
        equalHeight.start();
        
    }
});

//Equal Heights
$(document).ready(function () {
    var equalHeight = $('.height-services').equalHeight({wait: true});
    // Browser supports matchMedia
    if (window.matchMedia) {
        // MediaQueryList
        var mql = window.matchMedia("(min-width: 768px)");
        // MediaQueryListListener
        var equalHeightCheck = function (mql) {
            if (mql.matches) {
                equalHeight.start();
            } else {
                equalHeight.stop();
            }
        };
        // Add listener
        mql.addListener(equalHeightCheck);
        // Manually call listener
        equalHeightCheck(mql);
    }
    // Browser doesn't support matchMedia
    else {
        equalHeight.start();
        
    }
});

