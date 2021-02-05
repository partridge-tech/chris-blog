/**
 * js/flashbang.js
 * Optional script which allows a user to toggle to light mode for "readability."
 * Personally, I find it blinding. https://www.youtube.com/watch?v=qfxDEZX9K0o
 *
 * Blocking this script, or JavaScript entirely, will not impact site usability.
 * Thanks to Derek Kedziora. https://derekkedziora.com/blog/dark-mode-revisited
 */

document.getElementById("flashbang-button").addEventListener("click", modeSwitcher);

function modeSwitcher() {
    theme = localStorage.getItem('theme');
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById("flashbang-icon").className = "entities-sym-moon";
    } else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById("flashbang-icon").className = "entities-sym-sun";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById("flashbang-icon").className = "entities-sym-moon";
    }
}

let theme = localStorage.getItem('theme');

if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById("flashbang-icon").className = "entities-sym-sun";
} else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    document.getElementById("flashbang-icon").className = "entities-sym-moon";
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById("flashbang-icon").className = "entities-sym-sun";
}
