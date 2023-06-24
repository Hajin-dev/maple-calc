import { SkillData } from "../../skill-data";
import { adeleSkillData } from "./adele";
import { arkSkillData } from "./ark";
import { illiumSkillData } from "./illium";
import { khaliSkillData } from "./khali";

const floraCommonSkillData:SkillData[]=[
  {
        name: '매직 서킷 풀드라이브',
        location: 'assets/fulldrive.png',
        job: '레프 공용',
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
    ...floraCommonSkillData,
    ...adeleSkillData,
    ...illiumSkillData,
    ...khaliSkillData,
    ...arkSkillData
]
export default floraSkillData;