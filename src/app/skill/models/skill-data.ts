import { commonSkillData } from "./character/common";
import explorersSkillData from "./character/explorers";
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
    name: '여의선 : 인(부채)',
    location: 'assets/yeouisun.png',
    job: '호영',
    lt: {
      x: -200,
      y: -180,
    },
    rb: {
      x: 70,
      y: 70,
    },
    origin: {
      x: 195,
      y: 187,
    },
  },
  {
    name: '여의선 : 인(바람)',
    location: 'assets/yeouisun_wind.png',
    job: '호영',
    lt: {
      x: -390,
      y: -120,
    },
    rb: {
      x: -201,
      y: 45,
    },
    origin: {
      x: 406,
      y: 156,
    },
  },
  {
    name: '마봉 호로부',
    location: 'assets/mabong.png',
    job: '호영',
    lt: {
      x: -700,
      y: -185,
    },
    rb: {
      x: 1,
      y: 110,
    },
    origin: {
      x: 723,
      y: 168,
    },
  },
  {
    name: '토파류 : 지',
    location: 'assets/topa.png',
    job: '호영',
    lt: {
      x: -530,
      y: -120,
    },
    rb: {
      x: 1,
      y: 1,
    },
    origin: {
      x: 678,
      y: 227,
    },
  },
  {
    name: '지진쇄 : 지',
    location: 'assets/earthquake.png',
    job: '호영',
    lt: {
      x: -400,
      y: -310,
    },
    rb: {
      x: 400,
      y: 20,
    },
    origin: {
      x: 486,
      y: 366,
    },
  },
  {
    name: '지진쇄 : 허/실',
    location: 'assets/earthquake2.png',
    job: '호영',
    lt: {
      x: -425,
      y: -300,
    },
    rb: {
      x: 425,
      y: 30,
    },
    origin: {
      x: 462,
      y: 450,
    },
  },
  {
    name: '멸화염 : 천',
    location: 'assets/flame.png',
    job: '호영',
    lt: {
      x: -360,
      y: -160,
    },
    rb: {
      x: 360,
      y: 105,
    },
    origin: {
      x: 565,
      y: 284,
    },
  },
  {
    name: '멸화염 : 허/실',
    location: 'assets/flame2.png',
    job: '호영',
    lt: {
      x: -300,
      y: -460,
    },
    rb: {
      x: 300,
      y: 50,
    },
    origin: {
      x: 476,
      y: 571,
    },
  },
  {
    name: '금고봉 : 인(1)',
    location: 'assets/bong1.png',
    job: '호영',
    lt: {
      x: -545,
      y: -230,
    },
    rb: {
      x: 40,
      y: 50,
    },
    origin: {
      x: 581,
      y: 262,
    },
  },
  {
    name: '금고봉 : 인(2)',
    location: 'assets/bong2.png',
    job: '호영',
    lt: {
      x: -570,
      y: -230,
    },
    rb: {
      x: 150,
      y: 80,
    },
    origin: {
      x: 678,
      y: 274,
    },
  },
  {
    name: '권술 : 흡성와류',
    location: 'assets/waryu.png',
    job: '호영',
    lt: {
      x: -480,
      y: -220,
    },
    rb: {
      x: 480,
      y: 35,
    },
    origin: {
      x: 390,
      y: 223,
    },
  },
  {
    name: '선기 : 분신 둔갑 태을선인',
    location: 'assets/clonesunin.png',
    job: '호영',
    lt: {
      x: -470,
      y: -350,
    },
    rb: {
      x: 430,
      y: 350,
    },
    origin: {
      x: 491,
      y: 385,
    },
  },
  {
    name: '권술 : 산령소환(일반)',
    location: 'assets/tiger1.png',
    job: '호영',
    lt: {
      x: -500,
      y: -450,
    },
    rb: {
      x: 400,
      y: 15,
    },
    origin: {
      x: 614,
      y: 664,
    },
  },
  {
    name: '권술 : 산령소환(포효)',
    location: 'assets/tiger2.png',
    job: '호영',
    lt: {
      x: -700,
      y: -550,
    },
    rb: {
      x: 480,
      y: 15,
    },
    origin: {
      x: 772,
      y: 673,
    },
  },
  {
    name: '문 스트라이크',
    location: 'assets/moonstrike.png',
    job: '제로',
    lt: {
      x: -320,
      y: -100,
    },
    rb: {
      x: 140,
      y: 10,
    },
    origin: {
      x: 322,
      y: 73,
    },
  },
  {
    name: '피어스 쓰러스트',
    location: 'assets/piercethrust.png',
    job: '제로',
    lt: {
      x: -315,
      y: -100,
    },
    rb: {
      x: 0,
      y: 10,
    },
    origin: {
      x: 303,
      y: 102,
    },
  },
  {
    name: '쉐도우 스트라이크',
    location: 'assets/shadowstrike.png',
    job: '제로',
    lt: {
      x: -355,
      y: -100,
    },
    rb: {
      x: -20,
      y: 35,
    },
    origin: {
      x: 359,
      y: 88,
    },
  },
  {
    name: '플래시 어썰터',
    location: 'assets/flashassulter.png',
    job: '제로',
    lt: {
      x: -460,
      y: -90,
    },
    rb: {
      x: 20,
      y: 20,
    },
    origin: {
      x: 462,
      y: 132,
    },
  },
  {
    name: '어드밴스드 스핀 커터',
    location: 'assets/advancedspincutter.png',
    job: '제로',
    lt: {
      x: -245,
      y: -95,
    },
    rb: {
      x: 245,
      y: 50,
    },
    origin: {
      x: 297,
      y: 185,
    },
  },
  {
    name: '어드밴스드 롤링 커브',
    location: 'assets/advancedrollingcurve.png',
    job: '제로',
    lt: {
      x: -430,
      y: -300,
    },
    rb: {
      x: 120,
      y: 140,
    },
    origin: {
      x: 146,
      y: 118,
    },
  },
  {
    name: '어드밴스드 롤링 어썰터',
    location: 'assets/advancedrollingassulter.png',
    job: '제로',
    lt: {
      x: -440,
      y: -140,
    },
    rb: {
      x: 210,
      y: 60,
    },
    origin: {
      x: 230,
      y: 146,
    },
  },
  {
    name: '윈드 커터',
    location: 'assets/windcutter.png',
    job: '제로',
    lt: {
      x: -315,
      y: -160,
    },
    rb: {
      x: 115,
      y: 15,
    },
    origin: {
      x: 300,
      y: 160,
    },
  },
  {
    name: '윈드 스트라이크',
    location: 'assets/windstrike.png',
    job: '제로',
    lt: {
      x: -435,
      y: -160,
    },
    rb: {
      x: 115,
      y: 25,
    },
    origin: {
      x: 453,
      y: 155,
    },
  },
  {
    name: '어드밴스드 스톰 브레이크',
    location: 'assets/advancedstormbreak.png',
    job: '제로',
    lt: {
      x: -465,
      y: -205,
    },
    rb: {
      x: 65,
      y: 55,
    },
    origin: {
      x: 457,
      y: 295,
    },
  },
  {
    name: '어퍼 슬래시',
    location: 'assets/upperslash.png',
    job: '제로',
    lt: {
      x: -235,
      y: -145,
    },
    rb: {
      x: 25,
      y: 65,
    },
    origin: {
      x: 236,
      y: 231,
    },
  },
  {
    name: '어드밴스드 파워 스텀프',
    location: 'assets/advancedpowerstomp.png',
    job: '제로',
    lt: {
      x: -230,
      y: -200,
    },
    rb: {
      x: 10,
      y: 10,
    },
    origin: {
      x: 251,
      y: 219,
    },
  },
  {
    name: '어드밴스드 파워 스텀프(충격파)',
    location: 'assets/advancedpowerstomp_shockwave.png',
    job: '제로',
    lt: {
      x: -125 - 300,
      y: -300,
    },
    rb: {
      x: 120 - 300,
      y: 10,
    },
    origin: {
      x: 142 + 300,
      y: 399,
    },
  },
  {
    name: '프론트 슬래시',
    location: 'assets/frontslash.png',
    job: '제로',
    lt: {
      x: -340,
      y: -130,
    },
    rb: {
      x: 20,
      y: 35,
    },
    origin: {
      x: 371,
      y: 120,
    },
  },
  {
    name: '터닝 드라이브',
    location: 'assets/turningdrive.png',
    job: '제로',
    lt: {
      x: -240,
      y: -100,
    },
    rb: {
      x: 240,
      y: 50,
    },
    origin: {
      x: 296,
      y: 150,
    },
  },
  {
    name: '어드밴스드 휠 윈드',
    location: 'assets/advancedwheelwind.png',
    job: '제로',
    lt: {
      x: -200,
      y: -125,
    },
    rb: {
      x: 210,
      y: 25,
    },
    origin: {
      x: 287,
      y: 140,
    },
  },
  {
    name: '기가 크래시',
    location: 'assets/gigacrash.png',
    job: '제로',
    lt: {
      x: -250,
      y: -200,
    },
    rb: {
      x: 0,
      y: 10,
    },
    origin: {
      x: 299,
      y: 265,
    },
  },
  {
    name: '점핑 크래시',
    location: 'assets/jumpingcrash.png',
    job: '제로',
    lt: {
      x: -320,
      y: -240,
    },
    rb: {
      x: -20,
      y: 10,
    },
    origin: {
      x: 412,
      y: 290,
    },
  },
  {
    name: '점핑 크래시(충격파)',
    location: 'assets/jumpingcrash_shockwave.png',
    job: '제로',
    lt: {
      x: -280,
      y: -320,
    },
    rb: {
      x: -30,
      y: 10,
    },
    origin: {
      x: 365,
      y: 439,
    },
  },
  {
    name: '어드밴스드 어스 브레이크',
    location: 'assets/advancedearthbreak.png',
    job: '제로',
    lt: {
      x: -350,
      y: -400,
    },
    rb: {
      x: 90,
      y: 35,
    },
    origin: {
      x: 409,
      y: 468,
    },
  },
  {
    name: '어드밴스드 어스 브레이크(충격파)',
    location: 'assets/advancedearthbreak_shockwave.png',
    job: '제로',
    lt: {
      x: -280,
      y: -490,
    },
    rb: {
      x: 0,
      y: 10,
    },
    origin: {
      x: 380,
      y: 655,
    },
  },
  {
    name: '조인트 어택(알파 1타)',
    location: 'assets/jointattack_alpha_1.png',
    job: '제로',
    lt: {
      x: -460,
      y: -90,
    },
    rb: {
      x: 20,
      y: 20,
    },
    origin: {
      x: 462,
      y: 132,
    },
  },
  {
    name: '조인트 어택(알파 2타)',
    location: 'assets/jointattack_alpha_2.png',
    job: '제로',
    lt: {
      x: -620,
      y: -260,
    },
    rb: {
      x: -60,
      y: 60,
    },
    origin: {
      x: 624,
      y: 232,
    },
  },
  {
    name: '조인트 어택(알파 3타)',
    location: 'assets/jointattack_alpha_3.png',
    job: '제로',
    lt: {
      x: -820,
      y: -240,
    },
    rb: {
      x: -220,
      y: 80,
    },
    origin: {
      x: 791,
      y: 295,
    },
  },
  {
    name: '조인트 어택(베타 1타)',
    location: 'assets/jointattack_beta_1.png',
    job: '제로',
    lt: {
      x: -300,
      y: -200,
    },
    rb: {
      x: 90,
      y: 85,
    },
    origin: {
      x: 236,
      y: 231,
    },
  },
  {
    name: '조인트 어택(베타 2타)',
    location: 'assets/jointattack_beta_2.png',
    job: '제로',
    lt: {
      x: -580,
      y: -210,
    },
    rb: {
      x: 30,
      y: 80,
    },
    origin: {
      x: 560,
      y: 153,
    },
  },
  {
    name: '조인트 어택(베타 3타)',
    location: 'assets/jointattack_beta_3.png',
    job: '제로',
    lt: {
      x: -790,
      y: -300,
    },
    rb: {
      x: -100,
      y: 130,
    },
    origin: {
      x: 748,
      y: 298,
    },
  },
  {
    name: '조인트 어택(협력 공격)',
    location: 'assets/jointattack_final.png',
    job: '제로',
    lt: {
      x: -1140,
      y: -1150,
    },
    rb: {
      x: 30,
      y: 100,
    },
    origin: {
      x: 1094,
      y: 1175,
    },
  },{
    name: '타임 디스토션',
    location: 'assets/timeDistotion.png',
    job: '제로',
    lt: {
      x: -310,
      y: -200,
    },
    rb: {
      x: 300,
      y: 10,
    },
    origin: {
      x: 355,
      y: 251,
    },
  },{
    name: '디바인 포스/스위프트',
    location: 'assets/divineForce.png',
    job: '제로',
    lt: {
      x: -300,
      y: -125,
    },
    rb: {
      x: 300,
      y: 125,
    },
    origin: {
      x: 52,
      y: 42,
    },
  },
  {
    name: '얼티메이트-메테리얼',
    location: 'assets/ultimate_material.png',
    job: '키네시스',
    lt: {
      x: -150 - 300,
      y: -540,
    },
    rb: {
      x: 150 - 300,
      y: 10,
    },
    origin: {
      x: 225 + 300,
      y: 335,
    },
  },
  {
    name: '싸이킥 스매싱2',
    location: 'assets/psychicsmashing2.png',
    job: '키네시스',
    lt: {
      x: -466,
      y: -165,
    },
    rb: {
      x: -65,
      y: 35,
    },
    origin: {
      x: 440,
      y: 301,
    },
  },
  {
    name: '싸이킥 그라운드2',
    location: 'assets/psychicground2.png',
    job: '키네시스',
    lt: {
      x: -220,
      y: -52,
    },
    rb: {
      x: 189,
      y: 18,
    },
    origin: {
      x: 228,
      y: 113,
    },
  },
  {
    name: '싸이코 브레이크',
    location: 'assets/psychobreak.png',
    job: '키네시스',
    lt: {
      x: -375,
      y: -140,
    },
    rb: {
      x: 375,
      y: 20,
    },
    origin: {
      x: 245,
      y: 113,
    },
  },
  {
    name: '얼티메이트-B.P.M',
    location: 'assets/ultimate_bpm.png',
    job: '키네시스',
    lt: {
      x: -348,
      y: -110,
    },
    rb: {
      x: 8,
      y: 18,
    },
    origin: {
      x: 359,
      y: 184,
    },
  },
  {
    name: '싸이코 메트리',
    location: 'assets/psychometry.png',
    job: '키네시스',
    lt: {
      x: -274,
      y: -292,
    },
    rb: {
      x: 292,
      y: 212,
    },
    origin: {
      x: 226,
      y: 269,
    },
  },
  {
    name: '싸이킥 토네이도',
    location: 'assets/psychictornado.png',
    job: '키네시스',
    lt: {
      x: -360,
      y: -600,
    },
    rb: {
      x: 360,
      y: 80,
    },
    origin: {
      x: 326,
      y: 592,
    },
  },
  {
    name: '얼티메이트-싸이킥 불릿',
    location: 'assets/ultimate_psychicbullet.png',
    job: '키네시스',
    lt: {
      x: -820,
      y: -225,
    },
    rb: {
      x: 100,
      y: 150,
    },
    origin: {
      x: 1119,
      y: 505,
    },
  },
  {
    name: '마이크로 블랙홀',
    location: 'assets/microblackhole.png',
    job: '키네시스',
    lt: {
      x: -900,
      y: -160,
    },
    rb: {
      x: -630,
      y: 110,
    },
    origin: {
      x: 1327,
      y: 441,
    },
  },
  {
    name: '마이크로 블랙홀',
    location: 'assets/microblackhole.png',
    job: '키네시스',
    lt: {
      x: -900,
      y: -160,
    },
    rb: {
      x: -630,
      y: 110,
    },
    origin: {
      x: 1327,
      y: 441,
    },
  },{
    name: '정기 뿌리기',
    location: 'assets/AMbasicAttack2.png',
    job: '라라',
    lt: {
      x: -400,
      y: -210,
    },
    rb: {
      x: 5,
      y: 70,
    },
    lt2: {
      x: -410,
      y: -180,
    },
    rb2: {
      x: -30,
      y: 50,
    },
    origin: {
      x: 536,
      y: 255,
    },
  },{
    name: '분출-인식?',
    location: 'assets/AMeruption1.png',
    job: '라라',
    lt: {
      x: -350,
      y: -180,
    },
    rb: {
      x: 80,
      y: 150,
    },
    origin: {
      x: 92,
      y: 180,
    },
  },{
    name: '분출: 너울이는 강',
    location: 'assets/AMeruptionRiver.png',
    job: '라라',
    lt: {
      x: -370,
      y: -370,
    },
    rb: {
      x: 370,
      y: 100,
    },
    lt2: {
      x: -465,
      y: -410,
    },
    rb2: {
      x: 430,
      y: 100,
    },
    origin: {
      x: 316,
      y: 326,
    },
  },{
    name: '분출: 돌개바람',
    location: 'assets/AMeruptionWind2.png',
    job: '라라',
    lt: {
      x: -500,
      y: -600,
    },
    rb: {
      x: 500,
      y: 30,
    },
    lt2: {
      x: -330,
      y: -440,
    },
    rb2: {
      x: 330,
      y: 10,
    },
    origin: {
      x: 394,
      y: 758,
    },
  },{
    name: '분출: 해돋이 우물',
    location: 'assets/AMeruptionSun2.png',
    job: '라라',
    lt: {
      x: -350,
      y: -430,
    },
    rb: {
      x: 350,
      y: 30,
    },
    lt2: {
      x: -360,
      y: -430,
    },
    rb2: {
      x: 360,
      y: 30,
    },
    origin: {
      x: 422,
      y: 485,
    },
  },{
    name: '땅 꼬마',
    location: 'assets/AMplanting.png',
    job: '라라',
    lt: {
      x: -200,
      y: -135,
    },
    rb: {
      x: 200,
      y: 5,
    },
    origin: {
      x: 61,
      y: 105,
    },
  },{
    name: '발현: 바람 그네',
    location: 'assets/AMexpressionWind.png',
    job: '라라',
    lt: {
      x: -235,
      y: -460,
    },
    rb: {
      x: 235,
      y: 20,
    },lt2: {
      x: -235,
      y: -400,
    },
    rb2: {
      x: 235,
      y: -5,
    },
    origin: {
      x: 283,
      y: 513,
    },
  },{
    name: '발현: 햇살 가득 안은 터',
    location: 'assets/AMexpressionSun.png',
    job: '라라',
    lt: {
      x: -300,
      y: -150,
    },
    rb: {
      x: 300,
      y: 150,
    },lt2: {
      x: -350,
      y: -180,
    },
    rb2: {
      x: 80,
      y: 150,
    },
    origin: {
      x: 313,
      y: 488,
    },
  },{
    name: '잠 깨우기',
    location: 'assets/AMroughEruption.png',
    job: '라라',
    lt: {
      x: -350,
      y: -180,
    },
    rb: {
      x: 80,
      y: 150,
    },lt2: {
      x: -160,
      y: -450,
    },
    rb3: {
      x: -400,
      y: -400,
    },lt3: {
      x: 400,
      y: 300,
    },
    rb2: {
      x: 160,
      y: -110,
    },
    origin: {
      x: 271,
      y: 306,
    },
  },{
    name: '아름드리 나무',
    location: 'assets/AMhomeOfSpirits.png',
    job: '라라',
    lt: {
      x: -295,
      y: -415,
    },
    rb: {
      x: 295,
      y: 1,
    },
    origin: {
      x: 448,
      y: 493,
    },
  },{
    name: '큰 기지개',
    location: 'assets/AMEruptionEarthVeinAll.png',
    job: '라라',
    lt: {
      x: -700,
      y: -600,
    },
    rb: {
      x: 700,
      y: 600,
    },
    origin: {
      x: 355,
      y: 605,
    },lt2: {
      x: -500,
      y: -450,
    },
    rb2: {
      x: 500,
      y: 450,
    },
  },{
    name: '해 강 산 바람',
    location: 'assets/AMCombinationBlow.png',
    job: '라라',
    lt: {
      x: -1122,
      y: -680,
    },
    rb: {
      x: 192,
      y: -4,
    },
    origin: {
      x: 664,
      y: 466,
    },
  },{
    name: '용솟음치는 정기',
    location: 'assets/AMAdvancedBasicAttack.png',
    job: '라라',
    lt: {
      x: -700,
      y: -385,
    },
    rb: {
      x: 30,
      y: 2,
    },
    origin: {
      x: 1057,
      y: 554,
    },
  },{
    name: '산등성 굽이굽이',
    location: 'assets/AMBurstUp.png',
    job: '라라',
    lt: {
      x: -180,
      y: -230,
    },
    rb: {
      x: 130,
      y: 5,
    },
    origin: {
      x: 171,
      y: 218,
    },
  },
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
    name: 'Ghost Yaksha: Great Oni Lord\'s Legion',
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
  ...resistanceSkillData];

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
