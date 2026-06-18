(function () {
    const queries = {
        desktop: window.matchMedia("(min-width: 1280px)"),
        tablet: window.matchMedia("(min-width: 1130px) and (max-width: 1279px)"),
        mid_tablet: window.matchMedia("(min-width: 960px) and (max-width: 1129px)"),
        small_tablet: window.matchMedia("(min-width: 769px) and (max-width: 959px)"),
        mobile: window.matchMedia("(min-width: 580px) and (max-width: 768px)"),
        small_mobile: window.matchMedia("(max-width: 579px)")
    };

    let currentRange = "";

    function getCurrentRange() {
        if (queries.desktop.matches) return "desktop";
        if (queries.tablet.matches) return "tablet";
        if (queries.mid_tablet.matches) return "mid_tablet";
        if (queries.small_tablet.matches) return "small_tablet";
        if (queries.mobile.matches) return "mobile";
        return "small_mobile";
    }

    function runBreakpointCallback() {
        const range = getCurrentRange();

        if (range === currentRange) return;
        currentRange = range;

        if (range === "desktop") {
            onDesktop();
        } else if (range === "tablet") {
            onTablet();
        } else if (range === "mid_tablet") {
            on_mid_Tablet();
        } else if (range === "small_tablet") {
            on_small_Tablet();
        } else if (range === "mobile") {
            onMobile();
        } else {
            on_small_Mobile();
        }
    }

    function handleBreakpointChange() {
        runBreakpointCallback();
    }

    queries.desktop.addEventListener("change", handleBreakpointChange);
    queries.tablet.addEventListener("change", handleBreakpointChange);
    queries.mid_tablet.addEventListener("change", handleBreakpointChange);
    queries.small_tablet.addEventListener("change", handleBreakpointChange);
    queries.mobile.addEventListener("change", handleBreakpointChange);
    queries.small_mobile.addEventListener("change", handleBreakpointChange);

    window.addEventListener("DOMContentLoaded", runBreakpointCallback);

    window.breakpointWatcher = {
        run: runBreakpointCallback,
        getCurrentRange
    };
})();

function onDesktop() {
    maxRowItems = 7;
    renderThumbnails();
}

function onTablet() {
    maxRowItems = 6;
    renderThumbnails();
}

function on_mid_Tablet() {
    maxRowItems = 5;
    renderThumbnails();
}

function on_small_Tablet() {
    maxRowItems = 4;
    renderThumbnails();
}

function onMobile() {
    maxRowItems = 3;
    renderThumbnails();
}

function on_small_Mobile() {
    maxRowItems = 2;
    renderThumbnails();
}