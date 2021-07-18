export default () => ({
  dark:
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches),

  toggle() {
    this.dark = !this.dark;

    if (this.dark) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  },
});
