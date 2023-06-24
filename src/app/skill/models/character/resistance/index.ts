import { SkillData } from "../../skill-data";
import { battleMageSkillData } from "./battleMage";
import { blasterSkillData } from "./blaster";
import { demonAvengerSkillData } from "./demonAvenger";
import { demonSlayerSkillData } from "./demonSlyaer";
import { mechanicSkillData } from "./mechanic";
import { wildHunterSkillData } from "./wildHunter";
import { xenonSkillData } from "./xenon";
const resistanceCommonSkillData:SkillData[]=[
    {
        name: '레지스탕스 라인 인팬트리',
        location: 'assets/infantry.png',
        job: '레지스탕스 공용',
        lt: {
          x: -450,
          y: -200,
        },
        rb: {
          x: 10,
          y: 100,
        },
        origin: {
          x: 212,
          y: 137,
        },
      },
]
const resistanceSkillData:SkillData[]=[
    ...resistanceCommonSkillData,
    ...blasterSkillData,
    ...demonSlayerSkillData,
    ...demonAvengerSkillData,
    ...battleMageSkillData,
    ...wildHunterSkillData,
    ...mechanicSkillData,
    ...xenonSkillData
  ];
export default resistanceSkillData;