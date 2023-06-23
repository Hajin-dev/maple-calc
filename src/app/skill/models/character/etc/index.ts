import { SkillData } from "../../skill-data";
import { kinesisSkillData } from "./kinesis";
import { zeroSkillData } from "./zero";
const etcSkillData:SkillData[]=[
    ...zeroSkillData,
    ...kinesisSkillData
]
export default etcSkillData