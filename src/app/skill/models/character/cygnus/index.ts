import { SkillData } from "../../skill-data";
import { flameWizardSkillData } from "./flameWizard";
import { mihileSkillData } from "./mihile";
import { nightWalkerSkillData } from "./nightWalker";
import { soulMasterSkillData } from "./soulMaster";
import { StrikerSkillData } from "./striker";
import { windBreakerSkillData } from "./windBreaker";
const cygnusSkillData:SkillData[]=[
    ...soulMasterSkillData,
    ...mihileSkillData,
    ...flameWizardSkillData,
    ...windBreakerSkillData,
    ...nightWalkerSkillData,
    ...StrikerSkillData
]
export default cygnusSkillData