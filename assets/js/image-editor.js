const options = {
  includeUI: {
    loadImage: {
      path: 'https://picsum.photos/800/800/',
      name: 'SampleImage',
    },
    // initMenu: 'filter',
    menuBarPosition: 'top',
  },

  cssMaxWidth: 1000, // Component default value: 1000
  cssMaxHeight: 1200, // Component default value: 800
  selectionStyle: {
    cornerSize: 20,
    rotatingPointOffset: 70,
  },

  usageStatistics: false,
};

const imageEditor = new tui.ImageEditor('#tui-image-editor', options);
console.log('test');