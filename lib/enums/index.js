export const SOCIAL_NETWORK = {
  GITHUB: 'GITHUB',
  LINKEDIN: 'LINKEDIN',
  MEDIUM: 'MEDIUM',
}

export const SOCIAL_NETWORK_LINKS = {
  [SOCIAL_NETWORK.GITHUB]: 'https://github.com/{username}',
  [SOCIAL_NETWORK.LINKEDIN]: 'https://linkedin.com/in/{username}',
  [SOCIAL_NETWORK.MEDIUM]: 'https://medium.com/{username}',
}

export const SOCIAL_NETWORK_ICONS = {
  [SOCIAL_NETWORK.GITHUB]: 'github',
  [SOCIAL_NETWORK.LINKEDIN]: 'linkedin',
  [SOCIAL_NETWORK.MEDIUM]: 'medium',
}

export const RESPONSIVE_SIZES = {
  MOBILE: '30em',
  TABLE: '60em',
}

export const PROFILE = {
  IMAGE: 'https://avatars0.githubusercontent.com/u/31546566?s=400&u=764d99a094f2c8ee578837b5ab629ad55f213d0e&v=4',
  AVATAR:
    'https://avatars0.githubusercontent.com/u/31546566?s=400&u=764d99a094f2c8ee578837b5ab629ad55f213d0e&v=4', // eslint-disable-line max-len
  TITLE: 'Owen Miller',
  INTRODUCTION: 'Your friendly neighborhood Full Stack Developer', // eslint-disable-line max-len
  NAME: 'Owen Miller',
  JOB: 'Full Stack Developer',
  DESCRIPTION: 'Your friendly neighborhood math student and fullstack developer.',
  ABOUT:
    'I love using math to solve problems. I have expereince with **Java**, **Golang**, and **Python**; as well as many interests in **AI**, **Data Engineering**, and **DevOps**.', // eslint-disable-line max-len
  SOCIAL_NETWORKS: {
    [SOCIAL_NETWORK.GITHUB]: 'owencmiller',
    [SOCIAL_NETWORK.LINKEDIN]: 'owen-c-miller',
    [SOCIAL_NETWORK.MEDIUM]: '@owencmiller',
  },
  ACTIONS: [
    // {
    //   icon: 'info-circle',
    //   title: 'View projects',
    //   href: '/Projects',
    //   as: '/projects',
    //   prefetch: true,
    //   text: 'View projects',
    //   inSite: true,
    // },
    {
      icon: 'phone',
      title: '2 x 2089 x 639671',
      href: '',
      text: '2 x 2089 x 639671',
    },
    {
      icon: 'envelope',
      title: 'mail[AT]owenmiller[DOT]me',
      href: '/',
      text: 'mail [AT] owenmiller [DOT] me',
    },
  ],
}

export const SOURCES = {
  STYLES: [
    'https://necolas.github.io/normalize.css/latest/normalize.css',
    'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:100,300,400,700',
  ],
}
