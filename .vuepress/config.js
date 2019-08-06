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
        { text: 'Home',link: '/' },
        { text: 'Get started', link: '/intro/' },
        { text: 'Appendix', link: '/appendix/vuepress' }
    ],
    sidebar: {
      '/appendix/': [
        ['vuepress', 'Contribute to this tutorial']
        // {
        //   title: 'Appendix',
        //   collapsable: false,
        //   children: [
        //     ['vuepress', 'About this tutorial']
        //   ]
        // }
      ],

      '/': [
        ['intro', 'Preface'],
        'install',
        'workflow',
        'quickstart',
        'basic',
        'simulation',
        'noise',
        'decon',
        'refs',
        ['appendix/vuepress', 'Appendix']
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  },
  title: "Wire-Cell Tutorial",
  description: "Welcome to Wire-Cell"
}
