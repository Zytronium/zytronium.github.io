// Redirect from GitHub Pages root, but not from other GitHub Pages projects
if (location.hostname === 'zytronium.github.io' &&
    (location.pathname === '/' || location.pathname === '')) {
    location.replace('https://zytronium.dev/');
}
