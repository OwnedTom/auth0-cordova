function WindowFrame() {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.window = null;
    this.currentUrl = '';
}

WindowFrame.prototype.open = function(url, callback) {
    if (
        this.window === null
        || this.window.closed) {
        this.window = window.open(url)
    } else if (url !== this.currentUrl) {
        this.window = window.open(url);
        this.window.focus();
    } else {
        this.window.focus();
    }
    this.window.onload = () => callback(null, {});
}

WindowFrame.prototype.close = function() {
    this.window.close();
}

module.exports = WindowFrame;