module.exports = {
  base: '/wire-cell-tutorial/',
  markdown: {
    lineNumbers: true,
    // config: md => {
    //   // use more markdown-it plugins!
    //   md.use(require('markdown-it-math'))
    // }
  },
  themeConfig: {
    repo: 'czczc/wire-cell-tutorial',
    repoLabel: 'Contribute!',
    editLinks: true,
    nav: [
        { text: 'Home',link: '/intro' },
        { text: 'Quick starts', link: '/quickstart/' },
        { text: 'Appendix', link: '/appendix/vuepress' }
    ],
    sidebar: {
      '/appendix/': [
        ['vuepress', 'Contribute to this tutorial']
      ],

      '/quickstart/': [
        'explore-data',
        'write-dfp'
      ],

      '/': [
        ['intro', 'Preface'],
        'install',
        'workflow',
        ['quickstart/explore-data', 'Quick Starts'],
        'basic',
        'simulation',
        'noise',
        'decon',
        'refs',
        ['appendix/vuepress', 'Appendix']
      ]
    },
    sidebarDepth: 1,
    lastUpdated: 'Last Updated'
  },
  title: "Wire-Cell Tutorial",
  description: "Welcome to Wire-Cell"
}
