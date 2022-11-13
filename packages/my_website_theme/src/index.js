import Root from './components';

const myWebsiteTheme = {
  name: "my-website-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      }
    },
  },
}

export default myWebsiteTheme;