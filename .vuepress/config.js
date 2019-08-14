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
    repoLabel: 'GitHub',
    editLinks: true,
    nav: [
        { text: 'Book',link: '/intro' },
        { text: 'Quick starts', link: '/quickstart/explore-data' },
        { text: 'Appendix', link: '/appendix/vuepress' }
    ],
    sidebar: {
      '/appendix/': [
        ['vuepress', 'Contribute to this tutorial']
      ],

      '/quickstart/': [
        'explore-data',
        'examine-graph',
        'write-dfp',
        'sim-track'
      ],

      '/': [
        ['intro', 'Preface'],
        'install',
        'workflow',
        ['quickstart/explore-data', 'Quick Starts'],
        'basic',
        // 'simulation',
        // 'noise',
        // 'decon',
        'refs',
        ['appendix/vuepress', 'Appendix']
      ]
    },
    sidebarDepth: 1,
    lastUpdated: 'Last Updated'
  },
  title: "Learning Wire-Cell",
  description: "Welcome to Wire-Cell"
}
