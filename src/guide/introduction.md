---
footer: false
---

# Kirish {#introduction}

:::info Siz Vue 3 uchun hujjatlarni o'qiyapsiz!

- Vue 2 qo'llab-quvvatlash dekabr kuni nihoyasiga etadi 31, 2023. [Vue 2 Kengaytirilgan LTS](https://v2.vuejs.org/lts/) haqida ko'proq bilib oling. 
- Vue 2 hujjatlari ko'chirildi [v2.vuejs.org](https://v2.vuejs.org/).
- Vue 2 dan yangilanyapsizmi? [Migratsiya qoʻllanmasi](https://v3-migration.vuejs.org/)ni koʻrib chiqing.
:::

<style src="@theme/styles/vue-mastery.css"></style>
<div class="vue-mastery-link">
  <a href="https://www.vuemastery.com/courses/" target="_blank">
    <div class="banner-wrapper">
      <img class="banner" alt="Vue Mastery banner" width="96px" height="56px" src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vuemastery-graphical-link-96x56.png" />
    </div>
    <p class="description"><span>VueMastery.com</span> saytidagi video darsliklar bilan Vue-ni o'rganing</p>
    <div class="logo-wrapper">
        <img alt="Vue Mastery Logo" width="25px" src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vue-mastery-logo.png" />
    </div>
  </a>
</div>

## Vue ozi nima? {#what-is-vue}

Vue (talaffuzi /vjuː/, **ko'rinish** kabi) foydalanuvchi interfeyslarini yaratish uchun JavaScript freymvorki. U standart HTML, CSS va JavaScript-ga asoslanadi va oddiy yoki murakkab bo'lishidan qat'i nazar, foydalanuvchi interfeyslarini samarali rivojlantirishga yordam beradigan deklarativ va komponentlarga asoslangan dasturlash modelini taqdim etadi.

Mana minimal misol:

<div class="options-api">

```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```

</div>
<div class="composition-api">

```js
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
```

</div>


```vue-html
<div id="app">
  <button @click="count++">
    Hisoblash: {{ count }}
  </button>
</div>
```
**Natija**

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<div class="demo">
  <button @click="count++">
    Hisoblash: {{ count }}
  </button>
</div>

Yuqoridagi misolda Vue-ning ikkita asosiy xususiyatini namoyish etadi:

- **Deklarativ ko'rsatish**: Vue standart HTMLni shablon sintaksisi bilan kengaytiradi, bu bizga JavaScript holatiga asoslangan HTML chiqishini deklarativ tarzda tavsiflash imkonini beradi.

- **Reaktivlik**: Vue avtomatik ravishda JavaScript holati o'zgarishlarini kuzatib boradi va o'zgarishlar sodir bo'lganda DOMni samarali yangilaydi.

Sizda allaqachon savollar bo'lishi mumkin - tashvishlanmang. Qolgan hujjatlarda biz har bir kichik tafsilotni ko'rib chiqamiz. Hozircha, iltimos, Vue taklif qilayotgan narsalarni yuqori darajada tushunishingiz uchun o'qing.

:::tip Old shartlar
Hujjatlarning qolgan qismi HTML, CSS va JavaScript bilan asosiy tanishishni nazarda tutadi. Agar siz frontendni ishlab chiqishda mutlaqo yangi bo'lsangiz, birinchi qadam sifatida to'g'ridan-to'g'ri fretmvorkga o'tish eng yaxshi g'oya bo'lmasligi mumkin - asoslarni tushunib oling va keyin qaytib keling! [ushbu JavaScript asosi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) bilan bilim darajangizni tekshirishingiz mumkin. Boshqa freymvorklar bilan oldingi tajriba yordam beradii, lekin talab qilinmaydi.
:::

## Progressiv Freymvork {#the-progressive-framework}

Vue - bu frontend ishlab chiqishda zarur bo'lgan umumiy xususiyatlarning ko'pini qamrab oluvchi freymvork va ekotizim. Ammo veb juda xilma-xildir - biz Internetda yaratadigan narsalar shakl va miqyosda keskin farq qilishi mumkin. Shuni yodda tutgan holda, Vue moslashuvchan va asta-sekin qabul qilinadigan bo'lishi uchun yaratilgan. Foydalanish holatlaringizga qarab, Vue turli yo'llar bilan ishlatilishi mumkin:

- Qurilish bosqichisiz statik HTML-ni kuchaytirish
- Har qanday sahifaga veb-komponentlar sifatida joylashtirish
- Yagona sahifali dastur (SPA)
- Fullstack / Server Tomonida renfirlash (STR)
- Jamstack / Statik Sayt Generatsiyas (SSG)
- Maqsadli ish stoli, mobil, WebGL va hatto terminal

Agar siz ushbu tushunchalarni qo'rqitadigan deb bilsangiz, tashvishlanmang! Oquv qo'llanma va qo'llanma faqat HTML va JavaScript-ning asosiy bilimlarini talab qiladi va siz ularning hech birida mutaxassis bo'lmasdan kuzatib borishingiz kerak.

Agar siz tajribali dasturchi bo'lsangiz, Vue-ni o'zingizning stekingizga qanday qilib eng yaxshi integratsiya qilish bilan qiziqsangiz yoki bu atamalar nimani anglatishini bilmoqchi bo'lsangiz, biz ularni [Vue-dan foydalanish](/guide/extras/ways-of-using-vue) usullarida batafsilroq muhokama qilamiz.

Moslashuvchanligiga qaramay, Vue qanday ishlashi haqidagi asosiy ma'lumotlar ushbu foydalanish holatlarining barchasida taqsimlanadi. Agar siz hozir yangi boshlovchi bo'lsangiz ham, kelajakda yanada ulug'vor maqsadlarga erishish uchun o'sib ulg'ayganingizda, yo'lda olingan bilim foydali bo'lib qoladi. Agar siz faxriy bo'lsangiz, siz hal qilmoqchi bo'lgan muammolarga asoslanib, bir xil samaradorlikni saqlab qolgan holda Vue-dan foydalanishning optimal usulini tanlashingiz mumkin. Shuning uchun biz Vue-ni "Progressive Freymvork" deb ataymiz: bu siz bilan birga rivojlana oladigan va ehtiyojlaringizga moslasha oladigan freymvork.

## Yagona-Fayl Komponentlarini {#single-file-components}

Ko'pgina qurilish asboblari yoqilgan Vue loyihalarida biz Vue komponentlarini **Yagona fayl komponenti** (shuningdek, `*.vue` fayllari sifatida ham tanilgan, **SFC** nomi bilan qisqartirilgan) deb nomlangan HTML-ga o'xshash fayl formatidan foydalangan holda mualliflik qilamiz. Vue SFC, nomidan ko'rinib turibdiki, komponentning mantig'ini (JavaScript), shablonni (HTML) va uslublarni (CSS) bitta faylga qamrab oladi. SFC formatida yozilgan oldingi misol:

<div class="options-api">

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Hisoblash: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

</div>
<div class="composition-api">

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Hisoblash: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

</div>

SFC Vue-ning o'ziga xos xususiyati bo'lib, agar sizning foydalanish holatingiz qurilishni sozlashni talab qilsa, Vue komponentlarini yaratishning tavsiya etilgan usuli hisoblanadi. Siz [SFC qanday va nima uchunligi](/guide/scaling-up/sfc) haqida uning maxsus bo'limida ko'proq bilib olishingiz mumkin - ammo hozircha shuni bilingki, Vue siz uchun barcha qurish vositalarini sozlash bilan shug'ullanadi.

## API Uslublari {#api-styles}

Vue komponentlarini ikki xil API uslubida yozish mumkin: **Options API** va **Composition API**.

### Options API {#options-api}

Options API yordamida biz `data`, `methods` va `mounted`. kabi parametrlar obyekti yordamida komponent mantigʻini aniqlaymiz. Variantlar bilan aniqlangan xususiyatlar komponent misoliga ishora qiluvchi "this" ichki funksiyalarida ochiladi:

```vue
<script>
export default {
  // data() dan qaytarilgan xususiyatlar reaktiv holatga aylanadi
  // va "this" da ko'rsatiladi.
  data() {
    return {
      count: 0
    }
  },

  // Methods - bu holatni o'zgartiruvchi va yangilanishlarni ishga tushiruvchi funksiyalar.
  // Ular shablonlarda hodisa ishlov beruvchilari sifatida bog'lanishi mumkin.
  methods: {
    increment() {
      this.count++
    }
  },

  // Hayot sikli ilgaklari turli bosqichlarda chaqiriladi
  // komponentning hayot aylanishi.
  // Komponent o'rnatilganda bu funksiya chaqiriladi.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Hisoblash: {{ count }}</button>
</template>
```

[Uni Playgroundda sinab ko'ring](https://play.vuejs.org/#eNp9Uk1v2zAM/SuEsEOLFvaA3gKv2FeBbYdt2HbUoYrM2KplyZOoLEHg/z7Krp0e2gIGLJKPj49POokPw1DsE4qNqKIOZqBb6fAw+EBQ404lS3CSDqAsIaDqyOyh9VZRztWK1MXlXAcuUwpuiQC0T4428HaOx/wbr6V7JJtInIE+kaJojgr+Gqtq0ygHewVH5RqOnYmtVYFxfGgUUIqtCY+wXXLd1MqIzNojtb6Om0WCcTpgj47OGgGoNbGYpF1dvaBMHT0BE3fWQKeczvxmGpDbsD7Tae+it1hY31zcf1aRrNp2BniE31oVW3hzOs8bi/vLaZR0/FXlajcHhP3AfiBHANU2EXkH77U1unsnxbqIFLdfFm5e8zR7DONYlXMP91flSiauBUXWuDNN8RC940uehEuhfT8Yi+HHQIZ3kGI1TQplrf/3bcpRSMjGzHndou6eyT/EQ85J8TNgxLBHKdYaqdAgy87lu9/f8cDntdj7OllGv1L8hexvyhpn2Mfkapb9BDep/drnB2tc8yfeHQhdXJbKQpfrzWh+6Z9eWf0s96a4We5KjP8BygwPQQ==)

### Composition API {#composition-api}

Composition API bilan biz import qilingan API funksiyalaridan foydalanib komponent mantiqini aniqlaymiz. SFClarda Composition API odatda [`<script setup>`](/api/sfc-script-setup) bilan ishlatiladi. `setup` atributi Vue-ni kompilyatsiya vaqtini o'zgartirishni amalga oshirishga yordam beradigan maslahat bo'lib, bizga kompozitsion API-dan kamroq foydalanish imkoniyatini beradi. Masalan, `<script setup>` da e'lon qilingan importlar va yuqori darajadagi o'zgaruvchilar/funksiyalar shablonda bevosita ishlatilishi mumkin.

Mana bir xil komponent, aynan bir xil shablonli, lekin uning o‘rniga Composition API va `<script setup>` dan foydalaniladi:

```vue
<script setup>
import { ref, onMounted } from 'vue'

// reaktiv holat
const count = ref(0)

// holatni o'zgartiruvchi va yangilanishlarni ishga tushiruvchi funksiyalar
function increment() {
  count.value++
}

// hayot aylanish ilgaklari
onMounted(() => {
  console.log(`Dastlabki hisob ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Hisoblash: {{ count }}</button>
</template>
```

[Try it in the Playground](https://play.vuejs.org/#eNp9Uk1v2zAM/SuEMCApGjgDeiuSYF8FtgH7wLajDlUUxVYtU4ZEeckM//dRTu32UPQgQOR7fHyk1Iv3bVt0yYhbsYk62JYgGkrtTqJtWh8IegjmuAKP33xCMgcY4Bh8AwuuWkiUuF4zQ9VkO6i8UyRRe4wEOvNhm8uXb68emSMDLfjFv1IFsiF1urLQKTgrLK1TaGPlVGAKX0oFlGI1sY4J62jPinGJHGiyHsGiDqYxSMsr6CXCpXHRKZfM9bXEYWqtzp5AnS89wLpS1axkJc6zLVliu5tUMHpnCufL5f0nFcmpfW2hstHv4U3/rMlQ3PN4A5/N+rJD3h4HZJqWpzUcAWz2iYjdvtPO6norxWxbit3nLOpUrG6h7x8XNwyb9aWG6zfrWUysBEU2d7Rl8RA98suNfqXQvmmtM+FHm/cSpWC1jGRMOef/fh1zFJJZTXldGV2/kH+Ip5yT4mcw0YTOSDFjpEJp2HaG735/Nye+z2DjD8kx+xXwl+HFpuzxQvuQ8MC2n/FGt1/G/2ex/BPvTmQwTkNlo5k5jHwp+CN+fGX0J7s3xc1Yx48lhv8g1Qg1)

### Which to Choose? {#which-to-choose}

Ikkala API uslubi ham umumiy foydalanish holatlarini qamrab olishga qodir. Ular bir xil asosiy tizim tomonidan quvvatlanadigan turli xil interfeyslardir. Aslida, Options API Composition API-ning tepasida amalga oshiriladi! Vue haqidagi asosiy tushunchalar va bilimlar ikki uslubda bo'linadi.

Options API "komponent namunasi" (misolda ko'rsatilganidek, "bu") tushunchasi atrofida joylashgan bo'lib, u odatda OOP tilidan kelgan foydalanuvchilar uchun sinfga asoslangan aqliy model bilan yaxshiroq moslashadi. Bundan tashqari, reaktivlik tafsilotlarini mavhumlashtirish va opsiya guruhlari orqali kodni tashkil qilishni amalga oshirish orqali yangi boshlanuvchilar uchun qulayroqdir.

Composition API markazida reaktiv holat oʻzgaruvchilarini toʻgʻridan-toʻgʻri funksiya doirasida eʼlon qilish va murakkablikni hal qilish uchun bir nechta funksiyalardan holatni tuzishga qaratilgan. U yanada erkin shaklga ega va samarali foydalanish uchun Vue-da reaktivlik qanday ishlashini tushunishni talab qiladi. Buning evaziga uning moslashuvchanligi mantiqni tartibga solish va qayta ishlatish uchun yanada kuchliroq naqshlarni yaratishga imkon beradi.

Ikki uslub oʻrtasidagi taqqoslash va Composition API ning potentsial afzalliklari haqida koʻproq maʼlumotni [Composition API TSS](/guide/extras/composition-api-faq) boʻlimida bilib olishingiz mumkin.

Agar siz Vue-da yangi bo'lsangiz, bizning umumiy tavsiyamiz:

- O'rganish maqsadida sizga tushunarli ko'rinadigan uslubdan foydalaning. Shunga qaramay, asosiy tushunchalarning aksariyati ikkita uslub o'rtasida taqsimlanadi. Siz har doim boshqa uslubni keyinroq tanlashingiz mumkin.

- Ishlab chiqarishda foydalanish uchun:

  - Agar siz qurish vositalaridan foydalanmasangiz yoki Vue-ni asosan past murakkablikdagi stsenariylarda ishlatishni rejalashtirsangiz, Options API-dan foydalaning, masalan. progressiv takomillashtirish.

  - Agar siz Vue bilan to'liq ilovalar yaratishni rejalashtirmoqchi bo'lsangiz, Composition API + Yagona-Fayl Components ga o'ting.

O'rganish bosqichida faqat bitta uslubga rioya qilishingiz shart emas. Hujjatlarning qolgan qismi ikkala uslubda kod namunalarini taqdim etadi va ularni istalgan vaqtda chap yon panelning yuqori qismidagi **API Afzaligi** yordamida almashtirishingiz mumkin.

## Hali ham savollaringiz bormi? {#still-got-questions}

[TSS](/about/faq) bilan tanishing.

## Ta'lim yo'lingizni tanlang {#pick-your-learning-path}

Turli dasturchilar turli xil o'rganish uslublariga ega. Iloji bo'lsa, barcha tarkibni ko'rib chiqishni tavsiya qilsak ham, o'z xohishingizga mos o'rganish yo'lini tanlang!

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/tutorial/">
    <p class="next-steps-link">O'quv qo'llanmani sinab ko'ring</p>
    <p class="next-steps-caption">Biror narsani qo'lda o'rganishni afzal ko'rganlar uchun.</p>
  </a>
  <a class="vt-box" href="/guide/quick-start.html">
    <p class="next-steps-link">Qo‘llanmani o‘qing</p>
    <p class="next-steps-caption">Qo'llanma sizga freymvorkning har bir tomonini to'liq batafsil yoritadi.</p>
  </a>
  <a class="vt-box" href="/examples/">
    <p class="next-steps-link">Misollarni ko'rib chiqing</p>
    <p class="next-steps-caption">Asosiy xususiyatlar va umumiy UI vazifalari misollarini o'rganing.</p>
  </a>
</div>
