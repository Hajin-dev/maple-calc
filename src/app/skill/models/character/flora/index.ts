import { SkillData } from "../../skill-data";

const floraCommonSkillData:SkillData[]=[
  {
        name: '매직 서킷 풀드라이브',
        location: 'assets/fulldrive.png',
        job: '공용',
        lt: {
          x: -700,
          y: -500,
        },
        rb: {
          x: 400,
          y: 400,
        },
        origin: {
          x: 405,
          y: 248,
        },
      },
]

const floraSkillData:SkillData[]=[
    ...floraCommonSkillData
]
export default floraSkillData;