export interface IFeature {
  title: string
  text: string
}

export const featuresData: {
  main: IFeature
  supplementary: IFeature[]
} = {
  main: {
    title: 'What is GPT-3',
    text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
  },
  supplementary: [
    {
      title: 'Chatbots',
      text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
    },
    {
      title: 'Knowledge Base',
      text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
    },
    {
      title: 'Education',
      text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
    }
  ]
}
