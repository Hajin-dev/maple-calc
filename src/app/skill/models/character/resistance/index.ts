import { SkillData } from "../../skill-data";
const resistanceCommonSkillData:SkillData[]=[
    {
        name: '레지스탕스 라인 인팬트리',
        location: 'assets/infantry.png',
        job: '공용',
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
    ...resistanceCommonSkillData
];
export default resistanceSkillData;