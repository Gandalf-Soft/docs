<script lang="ts">
const shuffleMembers = (members: Member[], pinTheFirstMember = false): void => {
  let offset = pinTheFirstMember ? 1 : 0
  // `i` is between `1` and `length - offset`
  // `j` is between `0` and `length - offset - 1`
  // `offset + i - 1` is between `offset` and `length - 1`
  // `offset + j` is between `offset` and `length - 1`
  let i = members.length - offset
  while (i > 0) {
    const j = Math.floor(Math.random() * i);
    [
      members[offset + i - 1],
      members[offset + j]
    ] = [
      members[offset + j],
      members[offset + i - 1]
    ]
    i--
  }
}
</script>

<script setup lang="ts">
import { VTLink } from '@vue/theme'
import membersCoreData from './members-core.json'
import membersEmeritiData from './members-emeriti.json'
import membersPartnerData from './members-partner.json'
import TeamHero from './TeamHero.vue'
import TeamList from './TeamList.vue'
import type { Member } from './Member'
shuffleMembers(membersCoreData as Member[], true)
shuffleMembers(membersEmeritiData as Member[])
shuffleMembers(membersPartnerData as Member[])
</script>

<template>
  <div class="TeamPage">
    <TeamHero>
      <template #title>Jamoa bilan tanishing</template>
      <template #lead
        >Vue va uning ekotizimining rivojlanishi xalqaro guruh tomonidan boshqariladi, ularning ba'zilari
        <span class="nowrap">quyida namoyish etishni tanladilar.</span></template
      >

      <template #action>
        <VTLink
          href="https://github.com/vuejs/governance/blob/master/Team-Charter.md"
          >Jamoa haqida batafsil</VTLink
        >
      </template>
    </TeamHero>

    <TeamList :members="membersCoreData as Member[]">
      <template #title>Asosiy Jamoa A'zolari</template>
      <template #lead
        >Asosiy guruh a'zolari bir yoki bir nechta asosiy loyihalarni amalga oshirishda
        faol ishtirok etadiganlardir. Ular loyiha va uning foydalanuvchilari muvaffaqiyatiga
        uzoq muddatli sodiqlik bilan Vue ekotizimiga katta hissa qo'shdilar.</template
      >
    </TeamList>

    <TeamList :members="membersEmeritiData as Member[]">
      <template #title>Asosiy Jamoa Emeriti</template>
      <template #lead
        >Bu erda biz o'tmishda qimmatli hissa qo'shgan ba'zi faol bo'lmagan
        asosiy jamoa a'zolarini hurmat qilamiz.</template
      >
    </TeamList>

    <TeamList :members="membersPartnerData as Member[]">
      <template #title>Jamiyat hamkorlari</template>
      <template #lead
        >Vue hamjamiyatining ba'zi a'zolari uni shu qadar boyitdilarki,
        ular alohida e'tiborga loyiqdir. Biz ushbu asosiy sheriklar bilan
        yanada yaqinroq munosabatlarni rivojlantirdik, ko'pincha ular bilan
        kelgusi xususiyatlar va yangiliklar bo'yicha muvofiqlashtirdik.</template
      >
    </TeamList>
  </div>
</template>

<style scoped>
.TeamPage {
  padding-bottom: 16px;
}

@media (min-width: 768px) {
  .TeamPage {
    padding-bottom: 96px;
  }
}

.TeamList + .TeamList {
  padding-top: 64px;
}
</style>
