import { commonSkillData } from "./character/common";
import cygnusSkillData from "./character/cygnus";
import etcSkillData from "./character/etc";
import explorersSkillData from "./character/explorers";
import floraSkillData from "./character/flora";
import heroesSkillData from "./character/heroes";
import novaSkillData from "./character/nova";
import resistanceSkillData from "./character/resistance";
import { bossSkillData } from "./monster/monster-skiil-data";

export interface Point {
  x: number;
  y: number;
}

export interface SkillData {
  name: string;
  location: string;
  job: string;
  lt: Point;
  rb: Point;
  lt2?: Point;
  rb2?: Point;
  lt3?: Point;
  rb3?: Point;
  lt4?: Point;
  rb4?: Point;
  hit_lt?: Point;
  hit_rb?: Point;
  offset?: Point;
  origin: Point;
  scale?: number;
}

export const chtrSkillData: SkillData[] = [ 
  
  {
    name: 'Shikigami Haunting 4',
    location: 'assets/shikigami.png',
    job: '칸나',
    lt: {
      x: -475,
      y: -190,
    },
    rb: {
      x: 0,
      y: 30,
    },
    origin: {
      x: 499,
      y: 233,
    },
  },
  {
    name: 'Ghost Yaksha Boss (1)',
    location: 'assets/ghost_yaksha_1.png',
    job: '칸나',
    lt: {
      x: -205,
      y: -325,
    },
    rb: {
      x: 205,
      y: 45,
    },
    origin: {
      x: 260,
      y: 550,
    },
  },
  {
    name: 'Ghost Yaksha Boss (2)',
    location: 'assets/ghost_yaksha_2.png',
    job: '칸나',
    lt: {
      x: -470,
      y: -350,
    },
    rb: {
      x: 180,
      y: 40,
    },
    origin: {
      x: 695,
      y: 582,
    },
  },
  {
    name: 'Ghost Yaksha Boss (3)',
    location: 'assets/ghost_yaksha_3.png',
    job: '칸나',
    lt: {
      x: -600,
      y: -350,
    },
    rb: {
      x: 180,
      y: 20,
    },
    origin: {
      x: 1089,
      y: 697,
    },
  },
  {
    name: 'Ghost Yaksha Boss (4)',
    location: 'assets/ghost_yaksha_4.png',
    job: '칸나',
    lt: {
      x: -665,
      y: -350,
    },
    rb: {
      x: 175,
      y: 45,
    },
    origin: {
      x: 928,
      y: 588,
    },
  },
  {
    name: 'Nine-Tailed Fury',
    location: 'assets/nine_tailed_fury.png',
    job: '칸나',
    lt: {
      x: -600,
      y: -600,
    },
    rb: {
      x: 600,
      y: 400,
    },
    origin: {
      x: 629,
      y: 323,
    },
  },
  {
    name: 'Shikigami Doppleganger',
    location: 'assets/shikigami_doppelganger.png',
    job: '칸나',
    lt: {
      x: -512,
      y: -150,
    },
    rb: {
      x: 512,
      y: 20,
    },
    origin: {
      x: 568,
      y: 282,
    },
  },
  {
    name: 'Orochi Unbound',
    location: 'assets/orochi_unbound.png',
    job: '칸나',
    lt: {
      x: -512,
      y: -350,
    },
    rb: {
      x: 512,
      y: 350,
    },
    origin: {
      x: 555,
      y: 858,
    },
  },
  {
    name: "Vanquisher's Charm",
    location: 'assets/vanquishers_charm.png',
    job: '칸나',
    lt: {
      x: -544,
      y: -235,
    },
    rb: {
      x: 7,
      y: 50,
    },
    origin: {
      x: 582,
      y: 257,
    },
  },
  {
    name: 'Falling Sakura',
    location: 'assets/falling_sakura.png',
    job: '칸나',
    lt: {
      x: -400,
      y: -100,
    },
    rb: {
      x: 0,
      y: 70,
    },
    origin: {
      x: 228 + 400,
      y: 325 - 70,
    },
  },
  {
    name: 'Binding Tempest',
    location: 'assets/binding_tempest.png',
    job: '칸나',
    lt: {
      x: -745,
      y: -290,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 765,
      y: 308,
    },
  },
  {
    name: 'Circle of Suppression',
    location: 'assets/circle_of_suppression.png',
    job: '칸나',
    lt: {
      x: -300,
      y: -150,
    },
    rb: {
      x: 300,
      y: 150,
    },
    origin: {
      x: 72,
      y: 126,
    },
  },
  {
    name: 'Veritable Pandemonium',
    location: 'assets/veritable_pandemonium.png',
    job: '칸나',
    lt: {
      x: -700,
      y: -300,
    },
    rb: {
      x: 700,
      y: 300,
    },
    origin: {
      x: 706,
      y: 743,
    },
  },
  {
    name: 'Yuki-musume Shoukan (1)',
    location: 'assets/yuki_musume_shoukan_1.png',
    job: '칸나',
    lt: {
      x: -320,
      y: -220,
    },
    rb: {
      x: 0,
      y: 30,
    },
    origin: {
      x: 330,
      y: 329,
    },
  },
  {
    name: 'Yuki-musume Shoukan (2)',
    location: 'assets/yuki_musume_shoukan_2.png',
    job: '칸나',
    lt: {
      x: -420,
      y: -200,
    },
    rb: {
      x: 0,
      y: 30,
    },
    origin: {
      x: 564,
      y: 293,
    },
  },
  {
    name: "Ghost Yaksha: Great Oni Lord's Legion",
    location: 'assets/ghost_yaksha_great_oni.png',
    job: '칸나',
    lt: {
      x: -1000,
      y: -700,
    },
    rb: {
      x: 1000,
      y: 700,
    },
    origin: {
      x: 391,
      y: 242,
    },
    scale: 200,
  }, 
 
];

export const skillData = [
  ...chtrSkillData, 
  ...bossSkillData,
  ...commonSkillData,
  ...explorersSkillData,
  ...cygnusSkillData,
  ...resistanceSkillData,
  ...heroesSkillData,
  ...novaSkillData,
  ...floraSkillData,
  ...etcSkillData];

export const skillRecord: Record<string, SkillData> = skillData.reduce(
  (obj, x) => {
    obj[x.name] = x;
    return obj;
  },
  {},
);

export const skillEntries: [string, SkillData[]][] = Object.entries(
  skillData.reduce((obj, x) => {
    if (!obj[x.job]) {
      obj[x.job] = [];
    }
    obj[x.job].push(x);
    return obj;
  }, {}),
);
