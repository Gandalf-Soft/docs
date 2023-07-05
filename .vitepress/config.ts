import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

const nav: ThemeConfig['nav'] = [
  {
    text: 'Hujjatlar',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Qo\'llanma', link: '/guide/introduction' },
      { text: 'Oʻquv qoʻllanma', link: '/tutorial/' },
      { text: 'Namuna', link: '/examples/' },
      { text: 'Tez boshlash', link: '/guide/quick-start' },
      // { text: 'Style Guide', link: '/style-guide/' },
      { text: 'Lug\'at', link: '/glossary/' },
      {
        text: 'Vue 2 Docs',
        link: 'https://v2.vuejs.org'
      },
      {
        text: 'Vue 2 dan migratsiya',
        link: 'https://v3-migration.vuejs.org/'
      }
    ]
  },
  {
    text: 'API',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: 'O\'yin maydonchasi',
    link: 'https://play.vuejs.org'
  },
  {
    text: 'Ekotizim',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: 'Resurslar',
        items: [
          { text: 'Hamkorlar', link: '/partners/' },
          { text: 'Mavzular', link: '/ecosystem/themes' },
          {
            text: 'Sertifikatlash',
            link: 'https://certification.vuejs.org/?ref=vuejs-nav'
          },
          { text: 'Ishlar', link: 'https://vuejobs.com/?ref=vuejs' },
          { text: 'Futbolkalar do\'koni', link: 'https://vue.threadless.com/' }
        ]
      },
      {
        text: 'Rasmiy kutubxonalar',
        items: [
          { text: 'Vue Router', link: 'https://router.vuejs.org/' },
          { text: 'Pinia', link: 'https://pinia.vuejs.org/' },
          { text: 'Asboblar bo\'yicha qo\'llanma', link: '/guide/scaling-up/tooling.html' }
        ]
      },
      {
        text: 'Video Kurslari',
        items: [
          {
            text: 'Vue Mahorati',
            link: 'https://www.vuemastery.com/courses/'
          },
          {
            text: 'Vue School',
            link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown'
          }
        ]
      },
      {
        text: 'Yordam',
        items: [
          {
            text: 'Discord Chat',
            link: 'https://discord.com/invite/HBherRA'
          },
          {
              text: 'GitHub Munozaralar',
            link: 'https://github.com/vuejs/core/discussions'
          },
          { text: 'DEV Jamiyat', link: 'https://dev.to/t/vue' }
        ]
      },
      {
        text: 'Yangiliklar',
        items: [
          { text: 'Blog', link: 'https://blog.vuejs.org/' },
          { text: 'Twitter', link: 'https://twitter.com/vuejs' },
          { text: 'Tadbirlar', link: 'https://events.vuejs.org/' },
          { text: 'Xabarnomalar', link: '/ecosystem/newsletters' }
        ]
      }
    ]
  },
  {
    text: 'Biz haqimizda',
    activeMatch: `^/about/`,
    items: [
      { text: 'TSS', link: '/about/faq' },
      { text: 'Jamoa', link: '/about/team' },
      { text: 'Relizlar', link: '/about/releases' },
      {
        text: 'Hamjamiyat uchun qoʻllanma',
        link: '/about/community-guide'
      },
      { text: 'Axloq kodeksi', link: '/about/coc' },
      {
        text: 'Hujjatli Film',
        link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'
      }
    ]
  },
  {
    text: 'Homiy',
    link: '/sponsor/'
  },
  {
    text: 'Hamkorlar',
    link: '/partners/',
    activeMatch: `^/partners/`
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: 'Boshlash',
      items: [
        { text: 'Kirish', link: '/guide/introduction' },
        {
          text: 'Tez Boshlash',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: 'Muhim narsalar',
      items: [
        {
          text: 'Dastur yaratish',
          link: '/guide/essentials/application'
        },
        {
          text: 'Andoza sintaksisi',
          link: '/guide/essentials/template-syntax'
        },
        {
          text: 'Reaktivlik Asoslari',
          link: '/guide/essentials/reactivity-fundamentals'
        },
        {
          text: 'Hisoblangan Xususiyatlar',
          link: '/guide/essentials/computed'
        },
        {
          text: 'Sinf va uslubni bog\'lash',
          link: '/guide/essentials/class-and-style'
        },
        {
          text: 'Shartli Renderlash',
          link: '/guide/essentials/conditional'
        },
        { text: 'Ro\'yxatni Renderlash', link: '/guide/essentials/list' },
        {
          text: 'Voqealar Bilan Ishlash',
          link: '/guide/essentials/event-handling'
        },
        { text: 'Shakl Kiritish Bog\'lamalari', link: '/guide/essentials/forms' },
        {
          text: 'Hayotiy aylanish ilgaklari',
          link: '/guide/essentials/lifecycle'
        },
        { text: 'Kuzatuvchilar', link: '/guide/essentials/watchers' },
        { text: 'Template Refs', link: '/guide/essentials/template-refs' },
        {
          text: 'Komponentlar Asoslari',
          link: '/guide/essentials/component-basics'
        }
      ]
    },
    {
      text: 'Komponentlar batafsil',
      items: [
        {
          text: 'Roʻyxatdan oʻtish',
          link: '/guide/components/registration'
        },
        { text: 'Rekvizitlar', link: '/guide/components/props' },
        { text: 'Voqealar', link: '/guide/components/events' },
        { text: 'Komponent v-model', link: '/guide/components/v-model' },
        {
          text: 'Fallthrough atributlari',
          link: '/guide/components/attrs'
        },
        { text: 'Slotlar', link: '/guide/components/slots' },
        {
          text: 'Ta\'minlash / kiritish',
          link: '/guide/components/provide-inject'
        },
        {
          text: 'Asinxron komponentlar',
          link: '/guide/components/async'
        }
      ]
    },
    {
      text: 'Qayta foydalanish',
      items: [
        {
          text: 'Murakkab moddalar',
          link: '/guide/reusability/composables'
        },
        {
          text: 'Maxsus direktivalar',
          link: '/guide/reusability/custom-directives'
        },
        { text: 'Plaginlar', link: '/guide/reusability/plugins' }
      ]
    },
    {
      text: 'O\'rnatilgan komponentlar',
      items: [
        { text: 'Transition', link: '/guide/built-ins/transition' },
        {
          text: 'TransitionGroup',
          link: '/guide/built-ins/transition-group'
        },
        { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
        { text: 'Teleport', link: '/guide/built-ins/teleport' },
        { text: 'Suspense', link: '/guide/built-ins/suspense' }
      ]
    },
    {
      text: 'Kattalashtirish',
      items: [
        { text: 'Yagona faylli komponentlar', link: '/guide/scaling-up/sfc' },
        { text: 'Asboblar', link: '/guide/scaling-up/tooling' },
        { text: 'Marshrutlash', link: '/guide/scaling-up/routing' },
        {
          text: 'Holat Boshqaruvi',
          link: '/guide/scaling-up/state-management'
        },
        { text: 'Sinov', link: '/guide/scaling-up/testing' },
        {
          text: 'Server Tomonida Renderlash (SSR)',
          link: '/guide/scaling-up/ssr'
        }
      ]
    },
    {
      text: 'Eng yaxshi amaliyotlar',
      items: [
        {
          text: 'Dasturni joylashtirish',
          link: '/guide/best-practices/production-deployment'
        },
        {
          text: 'Ishlash',
          link: '/guide/best-practices/performance'
        },
        {
          text: 'Kirish imkoniyati',
          link: '/guide/best-practices/accessibility'
        },
        {
          text: 'Xavfsizlik',
          link: '/guide/best-practices/security'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'Umumiy ma\'lumot', link: '/guide/typescript/overview' },
        {
          text: 'TS Composition API bilan',
          link: '/guide/typescript/composition-api'
        },
        {
          text: 'TS Options API bilan',
          link: '/guide/typescript/options-api'
        }
      ]
    },
    {
      text: 'Qo\'shimcha mavzular',
      items: [
        {
          text: 'Vue-dan foydalanish usullari',
          link: '/guide/extras/ways-of-using-vue'
        },
        {
          text: 'Composition API TSS',
          link: '/guide/extras/composition-api-faq'
        },
        {
          text: 'Chuqurlikdagi reaktivlik',
          link: '/guide/extras/reactivity-in-depth'
        },
        {
          text: 'Renderlash Mexanizmi',
          link: '/guide/extras/rendering-mechanism'
        },
        {
          text: 'Render funktsiyalari va JSX',
          link: '/guide/extras/render-function'
        },
        {
          text: 'Vue va veb-komponentlar',
          link: '/guide/extras/web-components'
        },
        {
          text: 'Animatsiya Texnikasi',
          link: '/guide/extras/animation'
        }
        // {
        //   text: 'Vue uchun Kutubxona qurish',
        //   link: '/guide/extras/building-a-library'
        // },
        // {
        //   text: 'React Davs uchun Vue',
        //   link: '/guide/extras/vue-for-react-devs'
        // }
      ]
    }
  ],
  '/api/': [
    {
      text: 'Global API',
      items: [
        { text: 'Dastur', link: '/api/application' },
        {
          text: 'Umumiy',
          link: '/api/general'
        }
      ]
    },
    {
      text: 'Composition API',
      items: [
        { text: 'setup()', link: '/api/composition-api-setup' },
        {
          text: 'Reaktivlik: Yadro',
          link: '/api/reactivity-core'
        },
        {
          text: 'Reaktivlik: Utilitalar',
          link: '/api/reactivity-utilities'
        },
        {
          text: 'Reaktivlik: Rivojlangan',
          link: '/api/reactivity-advanced'
        },
        {
          text: 'Lifecycle Hooks',
          link: '/api/composition-api-lifecycle'
        },
        {
          text: 'Dependency Injection',
          link: '/api/composition-api-dependency-injection'
        }
      ]
    },
    {
      text: 'Options API',
      items: [
        { text: 'Options: Holat', link: '/api/options-state' },
        { text: 'Options: Renderlash', link: '/api/options-rendering' },
        {
          text: 'Options: Hayot sikli',
          link: '/api/options-lifecycle'
        },
        {
          text: 'Options: Composition',
          link: '/api/options-composition'
        },
        { text: 'Options: Misc', link: '/api/options-misc' },
        {
          text: 'Komponent Misol',
          link: '/api/component-instance'
        }
      ]
    },
    {
      text: 'O\'rnatilgan',
      items: [
        { text: 'Direktivalar', link: '/api/built-in-directives' },
        { text: 'Componentlar', link: '/api/built-in-components' },
        {
          text: 'Maxsus Elementlar',
          link: '/api/built-in-special-elements'
        },
        {
          text: 'Maxsus Atributlar',
          link: '/api/built-in-special-attributes'
        }
      ]
    },
    {
      text: 'Yagona-Fayl Komponent',
      items: [
        { text: 'Sintaksis Spetsifikatsiyasi', link: '/api/sfc-spec' },
        { text: '<script setup>', link: '/api/sfc-script-setup' },
        { text: 'CSS xususiyatlari', link: '/api/sfc-css-features' }
      ]
    },
    {
      text: 'Kengaytirilgan API-Lar',
      items: [
        { text: 'Render Funktsiyasi', link: '/api/render-function' },
        { text: 'Server Tomonida Renderlash', link: '/api/ssr' },
        { text: 'TypeScript Yordam Dasturi Turlari', link: '/api/utility-types' },
        { text: 'Maxsus Renderer', link: '/api/custom-renderer' }
      ]
    }
  ],
  '/examples/': [
    {
      text: 'Asosiy',
      items: [
        {
          text: 'Salom Dunyo',
          link: '/examples/#hello-world'
        },
        {
          text: 'Foydalanuvchi kiritishini boshqarish',
          link: '/examples/#handling-input'
        },
        {
          text: 'Atributlarni Bog\'lash',
          link: '/examples/#attribute-bindings'
        },
        {
          text: 'Shartlar va Sikllar',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: 'Shakllarni Bog\'lash',
          link: '/examples/#form-bindings'
        },
        {
          text: 'Oddiy Komponent',
          link: '/examples/#simple-component'
        }
      ]
    },
    {
      text: 'Amaliy',
      items: [
        {
          text: 'Markdown Muharriri',
          link: '/examples/#markdown'
        },
        {
          text: 'Ma\'lumotlarni Olish',
          link: '/examples/#fetching-data'
        },
        {
          text: 'Saralash va filtr bilan Grid',
          link: '/examples/#grid'
        },
        {
          text: 'Daraxt Ko\'rinishi',
          link: '/examples/#tree'
        },
        {
          text: 'SVG Graph',
          link: '/examples/#svg'
        },
        {
          text: 'Modal O\'tishlar bilan',
          link: '/examples/#modal'
        },
        {
          text: 'Roʻyxat O\'tishlar bilan',
          link: '/examples/#list-transition'
        },
        {
          text: 'TodoMVC',
          link: '/examples/#todomvc'
        }
      ]
    },
    {
      // https://eugenkiss.github.io/7guis/
      text: '7 GUIs',
      items: [
        {
          text: 'Hisoblagich',
          link: '/examples/#counter'
        },
        {
          text: 'Harorat Konvertori',
          link: '/examples/#temperature-converter'
        },
        {
          text: 'Parvoz Kitob',
          link: '/examples/#flight-booker'
        },
        {
          text: 'Taymer',
          link: '/examples/#timer'
        },
        {
          text: 'CRUD',
          link: '/examples/#crud'
        },
        {
          text: 'Circle Drawer',
          link: '/examples/#circle-drawer'
        },
        {
          text: 'Cells',
          link: '/examples/#cells'
        }
      ]
    }
  ],
  '/style-guide/': [
    {
      text: 'Uslub Qo\'llanmasi',
      items: [
        {
          text: 'Umumiy ma\'lumot',
          link: '/style-guide/'
        },
        {
          text: 'A - Muhim',
          link: '/style-guide/rules-essential'
        },
        {
          text: 'B - Kuchli Tavsiya',
          link: '/style-guide/rules-strongly-recommended'
        },
        {
          text: 'C - Tavsiya etilgan',
          link: '/style-guide/rules-recommended'
        },
        {
          text: 'D - Ehtiyotkorlik bilan foydalaning',
          link: '/style-guide/rules-use-with-caution'
        }
      ]
    }
  ]
}

// Placeholder of the i18n config for @vuejs-translations.
const i18n: ThemeConfig['i18n'] = {
  footerLicense: {
    after: ' ostida chiqarilgan.',
    before: '',
  },
  appearance: 'Ko\'rinish',
  locales: 'Tillar',
  returnToTop: 'Yuqoriga qaytish',
  ariaMainNav: 'Asosiy navigatsiya',
  search: 'Qidirish',
  menu: 'Menyu',
  next: 'Keyingisi',
  previous: 'Oldingisi',
  ariaSidebarNav: 'Bo\'limlar',
  toc: 'Ushbu sahifada',
  joinTranslation: 'Tarjima qilishga qo\'shiling',
  pageNotFound: 'Sahifa topilmadi'
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'uz-UZ',
  title: 'Vue.js',
  description: 'Vue.js - O\'tkazuvchi JavaScript kutubxonasi',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://sponsors.vuejs.org'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
        async: 'true'
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    i18n,

    localeLinks: [
      {
        link: 'https://cn.vuejs.org',
        text: '简体中文',
        repo: 'https://github.com/vuejs-translations/docs-zh-cn'
      },
      {
        link: 'https://ja.vuejs.org',
        text: '日本語',
        repo: 'https://github.com/vuejs-translations/docs-ja'
      },
      {
        link: 'https://ua.vuejs.org',
        text: 'Українська',
        repo: 'https://github.com/vuejs-translations/docs-uk'
      },
      {
        link: 'https://fr.vuejs.org',
        text: 'Français',
        repo: 'https://github.com/vuejs-translations/docs-fr'
      },
      {
        link: 'https://vuejs.alphacom.uz',
        text: 'Uzbek',
        repo: 'https://github.com/gandalf-soft/docs'
      },
      {
        link: '/translations/',
        text: 'Tarjima Qilishga Yordam Bering!',
        isTranslationsDesc: true
      }
    ],

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    editLink: {
      repo: 'gandalf-soft/docs',
      text: 'Bu sahifani GitHub\'da tahrirlash'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Mualliflik Huquqi © 2014-${new Date().getFullYear()} Evan You`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
        // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
})
