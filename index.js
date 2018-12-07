var colorBrightness = (function() {
    return {
        getBrightness: function(r, g, b) {
            return Math.sqrt(
                Math.pow(r * 0.299, 2) +
                Math.pow(g * 0.587, 2) +
                Math.pow(b * 0.114, 2)
            );
        }
    }
})();

if (typeof module !== "undefined" && module.exports) {
    module.exports = colorBrightness;
}