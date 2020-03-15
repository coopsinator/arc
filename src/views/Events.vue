<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>Item</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  export default {
    name: 'Events',
    data: () => ({
      groups: [
        {
            name: 'Compassionate PDX (Fur Free PDX)',
            description: '"Compassionate PDX is a grass-roots group of volunteers dedicated to creating political change in favor of non-human animals. Our local chapter is affilliated with Compassionate Cities, along with several other cities including Berkeley, San Diego, and Toronto."',
            type: 'organization',
            phone: '',
            address: '',
            email: 'compassionateportland@gmail.com',
            urls: [
                'http://furfreepdx.org/',
                'https://www.facebook.com/compassionatepdx/',
                'https://www.instagram.com/compassionatepdx/'
            ]
        },{
            name: 'Try Vegan PDX',
            description: '"Try Vegan PDX offers education and resources, events and support, and activism opportunities in Portland, Oregon and beyond. We champion for the animals, those interested in a compassionate lifestyle, and the larger vegan community."',
            type: 'organization',
            phone: '(808) 854-7414',
            address: '2222 NE Pacific St #J Portland, OR 97232',
            email: 'info@tryveganpdx.com',
            urls: [
                'https://tryveganpdx.org/'
            ]
        },{
            name: 'Voices for the Animals',
            description: '"Voices for the Animals is a monthly half hour  program that tackles the issues around animal rights, with interviews of front-line activists who are working to make a difference in the lives of animals around the world. With hosts Noah Bristol, Julianne Schwartz, and Michele Coppola."'
        }
      ]
    }),
  }
</script>
