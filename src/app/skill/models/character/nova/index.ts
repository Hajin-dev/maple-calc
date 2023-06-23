import { SkillData } from "../../skill-data";
import { angelicBusterSkillData } from "./angelicBuster";
import { cardenaSkillData } from "./cardena";
import { kainSkillData } from "./kain";

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
    ...novaCommonSkillData,
    ...kainSkillData,
    ...kainSkillData,
    ...cardenaSkillData,
    ...angelicBusterSkillData
]
export default novaSkillData;