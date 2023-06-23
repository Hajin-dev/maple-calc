import { SkillData } from "../../skill-data";

const novaCommonSkillData:SkillData[]=[
  {
    name: '판테온',
    location: 'assets/pantheon.png',
    job: '공용',
    lt: {
      x: -550,
      y: -550,
    },
    rb: {
      x: 550,
      y: 50,
    },
    origin: {
      x: 367,
      y: 765,
    },
  },
]

const novaSkillData:SkillData[]=[
    ...novaCommonSkillData
]
export default novaSkillData;