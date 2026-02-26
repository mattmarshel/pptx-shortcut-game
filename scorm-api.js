// SCORM 2004 4th Edition API Wrapper
// Exposes global SCORM object. All methods no-op gracefully when no LMS is detected.
var SCORM = (function () {
    var api = null;
    var terminated = false;
    var startTime = null;

    // Walk parent/opener chain looking for SCORM 2004 API_1484_11
    function findAPI(win) {
        var attempts = 0;
        while (win && attempts < 10) {
            try {
                if (win.API_1484_11) return win.API_1484_11;
            } catch (e) {
                // cross-origin frame, stop searching this chain
                return null;
            }
            attempts++;
            try {
                if (win === win.parent) break;
                win = win.parent;
            } catch (e) {
                break;
            }
        }
        return null;
    }

    function discoverAPI() {
        var found = findAPI(window);
        if (!found) {
            try {
                if (window.opener) found = findAPI(window.opener);
            } catch (e) { /* cross-origin opener */ }
        }
        return found;
    }

    function init() {
        api = discoverAPI();
        if (!api) return false;
        var result = api.Initialize('');
        if (result === 'false' || result === false) {
            api = null;
            return false;
        }
        startTime = new Date();
        api.SetValue('cmi.completion_status', 'incomplete');
        api.Commit('');
        return true;
    }

    function reportProgress(masteredCount, totalCount) {
        if (!api || terminated) return;
        var scaled = totalCount > 0 ? Math.round((masteredCount / totalCount) * 10000) / 10000 : 0;
        api.SetValue('cmi.score.scaled', String(scaled));
        api.SetValue('cmi.score.raw', String(masteredCount));
        api.SetValue('cmi.score.min', '0');
        api.SetValue('cmi.score.max', String(totalCount));
        if (masteredCount >= totalCount && totalCount > 0) {
            api.SetValue('cmi.completion_status', 'completed');
        }
        api.Commit('');
    }

    // Convert milliseconds to ISO 8601 duration PT#H#M#S
    function formatDuration(ms) {
        var totalSec = Math.round(ms / 1000);
        var h = Math.floor(totalSec / 3600);
        var m = Math.floor((totalSec % 3600) / 60);
        var s = totalSec % 60;
        return 'PT' + h + 'H' + m + 'M' + s + 'S';
    }

    function terminate() {
        if (!api || terminated) return;
        terminated = true;
        if (startTime) {
            var duration = formatDuration(new Date() - startTime);
            api.SetValue('cmi.session_time', duration);
        }
        api.SetValue('cmi.exit', '');
        api.Commit('');
        api.Terminate('');
    }

    return {
        init: init,
        reportProgress: reportProgress,
        terminate: terminate
    };
})();
