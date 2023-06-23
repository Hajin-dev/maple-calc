import { SkillData } from "../../skill-data";
import { aranSkillData } from "./aran";
import { eunwolSkillData } from "./eunwol";
import { evanSkillData } from "./evan";
import { luminouseSkillData } from "./luminous";
import { mercedesSkillData } from "./mercedes";
import { phantomSkillData } from "./phantom";

const heroesSkillData:SkillData[]=[
    ...aranSkillData,
    ...evanSkillData,
    ...luminouseSkillData,
    ...mercedesSkillData,
    ...phantomSkillData,
    ...eunwolSkillData
]
export default heroesSkillData;