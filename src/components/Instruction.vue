<template>
  <section id="instruction">
    <v-container>
      <the-block title="Кандидатам" :data="candidate"></the-block>
      <the-block title="Инструкция" :data="instruction"></the-block>
    </v-container>
  </section>
</template>

<script>
import TheBlock from "@/components/TheModels/TheBlock";
export default {
  components: {
    TheBlock,
  },
  name: "Instruction",
  data:() => ({
    candidate: [{
      img: require('../assets/beeline/Candidate.png'),
      data: [
        {
          title: 'Мы ожидаем увидеть в Вас:',
          lists: [
            {text: 'Удовольствие от общения с людьми\n'} ,
            {text: 'Коммуникабельность, ответственность, дружелюбность\n'} ,
            {text: 'Грамотную и письменую речь на русском и кыргызском языках\n'} ,
            {text: 'Готовность работать с большим объёмом информации\n'} ,
            {text: 'Умение находить подход к разным клиентам\n'} ,
            {text: 'Владение ПК (пользователь MS Office)'},
          ]
        },
        {
          title: 'Немного о задачах нашего контакт-центра:',
          lists: [
            {text: 'Помощь в решении разной сложности вопросов'} ,
            {text: 'Коммуникабельность, ответственность, дружелюбность\n'} ,
            {text: 'Ценить наших клиентов и оказывать лучший сервиc'} ,
            {text: 'Развиваться и расти вместе с Beeline'} ,
          ]
        }
      ]
    }],
    instruction: [
        {
          img: require('../assets/beeline/Instruction.png'),
          data: [
            {
              title: 'Инструкция по прохождению тестирования',
              lists: [
                {
                  title: 'Оденьтесь так, как если бы вы пришли в офис',
                  text: 'Растянутая одежда и растрепанная прическа могут оставить неверное впечатление',
                },
                {
                  title: 'Проверьте технику заранее',
                  text: 'Наушники заряжены и работают, компьютер/ телефон подключен к сети',
                },
                {
                  title: 'И соединение сетью',
                  text: 'Интернет должен быть достаточно стабилен, чтобы поддерживать видео связь',
                },
                {
                  title: 'Предупредить домашних',
                  text: 'Просим предупредить домашних о вашем собеседовании заранее',
                },
              ]
            },
          ]
        },
      {
        img: require('../assets/beeline/Instruction2.png'),
        data: [
          {
            title: 'Инструкция по прохождению видео интервью',
            lists: [
              {
                title: 'Оденьтесь так, как если бы вы пришли в офис',
                text: 'Растянутая одежда и растрепанная прическа могут оставить неверное впечатление',
              },
              {
                title: 'Проверьте технику заранее',
                text: 'Наушники заряжены и работают, компьютер/ телефон подключен к сети',
              },
              {
                title: 'И соединение сетью',
                text: 'Интернет должен быть достаточно стабилен, чтобы поддерживать видео связь',
              },
              {
                title: 'Предупредить домашних',
                text: 'Просим предупредить домашних о вашем собеседовании заранее',
              },
            ]
          },
        ]
      },
    ]
  })
}
</script>

<style scoped>
#instruction {
  background: #f5f5f5;
}
</style>