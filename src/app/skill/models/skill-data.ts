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
    name: '기가 슬래셔(일반)',
    location: 'assets/gigaslasher.png',
    job: '카이저',
    lt: {
      x: -380,
      y: -150,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 425,
      y: 200,
    },
  },
  {
    name: '기가 슬래셔(변신)',
    location: 'assets/gigaslasher_final.png',
    job: '카이저',
    lt: {
      x: -380,
      y: -150,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 446,
      y: 254,
    },
  },
  {
    name: '드라코 슬래셔(일반)',
    location: 'assets/dracoslasher.png',
    job: '카이저',
    lt: {
      x: -445,
      y: -225,
    },
    rb: {
      x: 20,
      y: 50,
    },
    origin: {
      x: 467,
      y: 213,
    },
  },
  {
    name: '드라코 슬래셔(일반, 투사체)',
    location: 'assets/dracoslasher_shoot.png',
    job: '카이저',
    lt: {
      x: -60 - 400 / 2 - 400,
      y: -68 - 150 / 2,
    },
    rb: {
      x: -60 + 400 / 2,
      y: -68 + 150 / 2,
    },
    origin: {
      x: 222 + 60 + 400,
      y: 134 + 68,
    },
  },
  {
    name: '드라코 슬래셔(변신)',
    location: 'assets/dracoslasher_final.png',
    job: '카이저',
    lt: {
      x: -600,
      y: -340,
    },
    rb: {
      x: 100,
      y: 100,
    },
    origin: {
      x: 567,
      y: 350,
    },
  },
  {
    name: '드라코 슬래셔(변신, 투사체)',
    location: 'assets/dracoslasher_final_shoot.png',
    job: '카이저',
    lt: {
      x: -90 - 500 / 2 - 600,
      y: -80 - 200 / 2,
    },
    rb: {
      x: -90 + 500 / 2,
      y: -80 + 200 / 2,
    },
    origin: {
      x: 272 + 90 + 600,
      y: 180 + 80,
    },
  },
  {
    name: '스트라이크 애로우',
    location: 'assets/strikearrow1.png',
    job: '카인',
    lt: {
      x: -425,
      y: -125,
    },
    rb: {
      x: 10,
      y: 40,
    },
    origin: {
      x: 429,
      y: 90,
    },
  },
  {
    name: '스트라이크 애로우 II',
    location: 'assets/strikearrow2.png',
    job: '카인',
    lt: {
      x: -425,
      y: -125,
    },
    rb: {
      x: 10,
      y: 40,
    },
    origin: {
      x: 450,
      y: 106,
    },
  },
  {
    name: '스트라이크 애로우 III',
    location: 'assets/strikearrow3.png',
    job: '카인',
    lt: {
      x: -425,
      y: -125,
    },
    rb: {
      x: 10,
      y: 40,
    },
    origin: {
      x: 448,
      y: 123,
    },
  },
  {
    name: '[처형] 팬텀 블레이드',
    location: 'assets/phantomblade.png',
    job: '카인',
    lt: {
      x: -280,
      y: -180,
    },
    rb: {
      x: 30,
      y: 20,
    },
    origin: {
      x: 334,
      y: 191,
    },
  },
  {
    name: '[처형] 테어링 나이프',
    location: 'assets/tearingknife.png',
    job: '카인',
    lt: {
      x: -290,
      y: -210,
    },
    rb: {
      x: 20,
      y: 30,
    },
    origin: {
      x: 375,
      y: 351,
    },
  },
  {
    name: '[처형] 체인 시클(1타)',
    location: 'assets/chainsickle1.png',
    job: '카인',
    lt: {
      x: -280,
      y: -125,
    },
    rb: {
      x: 130,
      y: 20,
    },
    origin: {
      x: 456,
      y: 157,
    },
  },
  {
    name: '[처형] 체인 시클(2타)',
    location: 'assets/chainsickle2.png',
    job: '카인',
    lt: {
      x: -290,
      y: -245,
    },
    rb: {
      x: 90,
      y: 20,
    },
    origin: {
      x: 498,
      y: 516,
    },
  },
  {
    name: '[처형] 포이즌 니들(회전)',
    location: 'assets/poisonneedlespin.png',
    job: '카인',
    lt: {
      x: -290,
      y: -210,
    },
    rb: {
      x: 240,
      y: 30,
    },
    origin: {
      x: 328,
      y: 255,
    },
  },
  {
    name: '[처형] 포이즌 니들(사출)',
    location: 'assets/poisonneedleshoot.png',
    job: '카인',
    lt: {
      x: -290,
      y: -235,
    },
    rb: {
      x: 240,
      y: 130,
    },
    origin: {
      x: 275,
      y: 310,
    },
  },
  {
    name: '[발현] 드래곤 버스트',
    location: 'assets/dragonburst.png',
    job: '카인',
    lt: {
      x: -740,
      y: -180,
    },
    rb: {
      x: 30,
      y: 50,
    },
    origin: {
      x: 978,
      y: 293,
    },
  },
  {
    name: '[처형] 페이탈 블리츠',
    location: 'assets/fatalblitz.png',
    job: '카인',
    lt: {
      x: -485,
      y: -220,
    },
    rb: {
      x: 80,
      y: 150,
    },
    origin: {
      x: 492,
      y: 229,
    },
  },
  {
    name: '체인아츠:스트로크(1)',
    location: 'assets/stroke1.png',
    job: '카데나',
    lt: {
      x: -135,
      y: -150,
    },
    rb: {
      x: 135,
      y: 50,
    },
    origin: {
      x: 107,
      y: 120,
    },
  },
  {
    name: '체인아츠:스트로크(2)',
    location: 'assets/stroke2.png',
    job: '카데나',
    lt: {
      x: -465,
      y: -220,
    },
    rb: {
      x: 20,
      y: 25,
    },
    origin: {
      x: 462,
      y: 212,
    },
  },
  {
    name: '서먼 커팅 시미터',
    location: 'assets/scimitar.png',
    job: '카데나',
    lt: {
      x: -450,
      y: -105,
    },
    rb: {
      x: 20,
      y: 5,
    },
    origin: {
      x: 442,
      y: 191,
    },
  },
  {
    name: '서먼 슈팅 샷건',
    location: 'assets/shotgun1.png',
    job: '카데나',
    lt: {
      x: -385,
      y: -220,
    },
    rb: {
      x: -285,
      y: 105,
    },
    lt2: {
      x: -285,
      y: -165,
    },
    rb2: {
      x: -185,
      y: 60,
    },
    lt3: {
      x: -185,
      y: -110,
    },
    rb3: {
      x: -60,
      y: 15,
    },
    origin: {
      x: 375,
      y: 227,
    },
  },
  {
    name: '서먼 슬래싱 나이프',
    location: 'assets/knife.png',
    job: '카데나',
    lt: {
      x: -250,
      y: -345,
    },
    rb: {
      x: 250,
      y: 25,
    },
    origin: {
      x: 227,
      y: 396,
    },
  },
  {
    name: '서먼 릴리싱 봄',
    location: 'assets/bomb.png',
    job: '카데나',
    lt: {
      x: -235,
      y: -300,
    },
    rb: {
      x: 235,
      y: 0,
    },
    origin: {
      x: 234,
      y: 350,
    },
  },
  {
    name: '서먼 스트라이킹 브릭',
    location: 'assets/brick.png',
    job: '카데나',
    lt: {
      x: -360,
      y: -350,
    },
    rb: {
      x: 120,
      y: 110,
    },
    origin: {
      x: 375,
      y: 410,
    },
  },
  {
    name: '서먼 비팅 니들배트(1)',
    location: 'assets/needlebat1.png',
    job: '카데나',
    lt: {
      x: -290,
      y: -200,
    },
    rb: {
      x: 55,
      y: 10,
    },
    origin: {
      x: 249,
      y: 203,
    },
  },
  {
    name: '서먼 비팅 니들배트(2)',
    location: 'assets/needlebat2.png',
    job: '카데나',
    lt: {
      x: -260,
      y: -205,
    },
    rb: {
      x: 95,
      y: 10,
    },
    origin: {
      x: 212,
      y: 217,
    },
  },
  {
    name: '서먼 비팅 니들배트(3)',
    location: 'assets/needlebat3.png',
    job: '카데나',
    lt: {
      x: -345,
      y: -330,
    },
    rb: {
      x: 135,
      y: 10,
    },
    origin: {
      x: 330,
      y: 402,
    },
  },
  {
    name: '웨폰 버라이어티 III',
    location: 'assets/weaponvariety.png',
    job: '카데나',
    lt: {
      x: -250,
      y: -260,
    },
    rb: {
      x: 250,
      y: 150,
    },
    origin: {
      x: 365,
      y: 420,
    },
  },
  {
    name: '체인아츠:크러시',
    location: 'assets/crush.png',
    job: '카데나',
    lt: {
      x: -400,
      y: -550,
    },
    rb: {
      x: 400,
      y: 5,
    },
    origin: {
      x: 529,
      y: 610,
    },
  },
  {
    name: 'A.D 오드넌스(응집)',
    location: 'assets/adordnance.png',
    job: '카데나',
    lt: {
      x: -335,
      y: -250,
    },
    rb: {
      x: -60,
      y: 0,
    },
    origin: {
      x: 331,
      y: 226,
    },
  },
  {
    name: 'A.D 오드넌스(발사)',
    location: 'assets/adordnance_shoot.png',
    job: '카데나',
    lt: {
      x: -194 - 280 / 2 - 800,
      y: -97 - 280 / 2,
    },
    rb: {
      x: -194 + 280 / 2,
      y: -97 + 280 / 2,
    },
    origin: {
      x: 170 + 194 + 800,
      y: 168 + 97,
    },
  },
  {
    name: '체인아츠:메일스트롬',
    location: 'assets/maelstrom.png',
    job: '카데나',
    lt: {
      x: -590,
      y: -265,
    },
    rb: {
      x: 205,
      y: 20,
    },
    origin: {
      x: 679,
      y: 375,
    },
  },
  {
    name: '웨폰 버라이어티 피날레',
    location: 'assets/weaponvarietyfinale.png',
    job: '카데나',
    lt: {
      x: -330,
      y: -390,
    },
    rb: {
      x: 330,
      y: 5,
    },
    origin: {
      x: 462,
      y: 568,
    },
  },
  {
    name: '소울 시커',
    location: 'assets/soulseeker.png',
    job: '엔젤릭버스터',
    lt: {
      x: -500,
      y: -400,
    },
    rb: {
      x: 500,
      y: 10,
    },
    origin: {
      x: 185,
      y: 223,
    },
  },
  {
    name: '프라이멀 로어',
    location: 'assets/primalroar.png',
    job: '엔젤릭버스터',
    lt: {
      x: -450,
      y: -250,
    },
    rb: {
      x: 100,
      y: 30,
    },
    origin: {
      x: 438,
      y: 316,
    },
  },
  {
    name: '트리니티',
    location: 'assets/trinity1.png',
    job: '엔젤릭버스터',
    lt: {
      x: -400,
      y: -250,
    },
    rb: {
      x: 50,
      y: 70,
    },
    origin: {
      x: 420,
      y: 341,
    },
  },
  {
    name: '소울 레조넌스',
    location: 'assets/soulresonance.png',
    job: '엔젤릭버스터',
    lt: {
      x: -320,
      y: -550,
    },
    rb: {
      x: 320,
      y: 30,
    },
    origin: {
      x: 325,
      y: 519,
    },
  },
  {
    name: '피니투라 페투치아',
    location: 'assets/finaleribbon.png',
    job: '엔젤릭버스터',
    lt: {
      x: -430,
      y: -420,
    },
    rb: {
      x: 430,
      y: 40,
    },
    origin: {
      x: 412,
      y: 365,
    },
  },
  {
    name: '슈퍼 노바',
    location: 'assets/supernova.png',
    job: '엔젤릭버스터',
    lt: {
      x: -420,
      y: -500,
    },
    rb: {
      x: 420,
      y: 100,
    },
    origin: {
      x: 452,
      y: 547,
    },
  },
  {
    name: '트리니티 퓨전',
    location: 'assets/trinityfusion.png',
    job: '엔젤릭버스터',
    lt: {
      x: -540,
      y: -450,
    },
    rb: {
      x: 25,
      y: 50,
    },
    origin: {
      x: 674,
      y: 580,
    },
  },
  {
    name: '노빌리티',
    location: 'assets/nobility.png',
    job: '아델',
    lt: {
      x: -320,
      y: -320,
    },
    rb: {
      x: 320,
      y: 30,
    },
    origin: {
      x: 295,
      y: 354,
    },
  },
  {
    name: '오더',
    location: 'assets/order.png',
    job: '아델',
    lt: {
      x: -515,
      y: -265,
    },
    rb: {
      x: 515,
      y: 145,
    },
    origin: {
      x: 36,
      y: 72,
    },
  },
  {
    name: '크리에이션',
    location: 'assets/creation.png',
    job: '아델',
    lt: {
      x: -510,
      y: -215,
    },
    rb: {
      x: 30,
      y: 115,
    },
    origin: {
      x: 672,
      y: 198,
    },
  },
  {
    name: '테리토리',
    location: 'assets/territory.png',
    job: '아델',
    lt: {
      x: -280,
      y: -360,
    },
    rb: {
      x: 280,
      y: 10,
    },
    origin: {
      x: 308,
      y: 416,
    },
  },
  {
    name: '테리토리(막타)',
    location: 'assets/territory_final.png',
    job: '아델',
    lt: {
      x: -300,
      y: -385,
    },
    rb: {
      x: 300,
      y: 20,
    },
    origin: {
      x: 366,
      y: 441,
    },
  },
  {
    name: '블로섬',
    location: 'assets/blossom.png',
    job: '아델',
    lt: {
      x: -185,
      y: -185,
    },
    rb: {
      x: 185,
      y: 185,
    },
    origin: {
      x: 249,
      y: 210,
    },
  },
  {
    name: '디바이드',
    location: 'assets/divide.png',
    job: '아델',
    lt: {
      x: -450,
      y: -205,
    },
    rb: {
      x: 35,
      y: 135,
    },
    origin: {
      x: 495,
      y: 290,
    },
  },
  {
    name: '스콜',
    location: 'assets/squall.png',
    job: '아델',
    lt: {
      x: -500,
      y: -350,
    },
    rb: {
      x: 500,
      y: 50,
    },
    origin: {
      x: 287,
      y: 543,
    },
  },
  {
    name: '루인(1)',
    location: 'assets/ruin1.png',
    job: '아델',
    lt: {
      x: -350,
      y: -580,
    },
    rb: {
      x: 350,
      y: 30,
    },
    origin: {
      x: 531,
      y: 835,
    },
  },
  {
    name: '루인(2)',
    location: 'assets/ruin2.png',
    job: '아델',
    lt: {
      x: -420,
      y: -800,
    },
    rb: {
      x: 420,
      y: 90,
    },
    origin: {
      x: 497,
      y: 903,
    },
  },
  {
    name: '인피니트',
    location: 'assets/infinite.png',
    job: '아델',
    lt: {
      x: -550,
      y: -350,
    },
    rb: {
      x: 550,
      y: 225,
    },
    origin: {
      x: 46,
      y: 122,
    },
  },
  {
    name: '리스토어',
    location: 'assets/restore.png',
    job: '아델',
    lt: {
      x: -350,
      y: -175,
    },
    rb: {
      x: 350,
      y: 150,
    },
    origin: {
      x: 332,
      y: 245,
    },
  },
  {
    name: '스톰',
    location: 'assets/storm.png',
    job: '아델',
    lt: {
      x: -380,
      y: -235,
    },
    rb: {
      x: 380,
      y: 60,
    },
    origin: {
      x: 574,
      y: 440,
    },
  },
  {
    name: '끝나지 않는 악몽',
    location: 'assets/endlessnightmare.png',
    job: '아크',
    lt: {
      x: -425,
      y: -245,
    },
    rb: {
      x: 80,
      y: 25,
    },
    origin: {
      x: 470,
      y: 241,
    },
  },
  {
    name: '끝나지 않는 흉몽',
    location: 'assets/endlessdream.png',
    job: '아크',
    lt: {
      x: -425,
      y: -245,
    },
    rb: {
      x: 80,
      y: 25,
    },
    origin: {
      x: 470,
      y: 241,
    },
  },
  {
    name: '플레인 차지드라이브',
    location: 'assets/plainchargedrive.png',
    job: '아크',
    lt: {
      x: -285,
      y: -150,
    },
    rb: {
      x: 5,
      y: 20,
    },
    origin: {
      x: 270,
      y: 130,
    },
  },
  {
    name: '스칼렛 차지드라이브',
    location: 'assets/scarletchargedrive.png',
    job: '아크',
    lt: {
      x: -350,
      y: -105,
    },
    rb: {
      x: 20,
      y: 35,
    },
    origin: {
      x: 364,
      y: 107,
    },
  },
  {
    name: '지워지지 않는 상처',
    location: 'assets/greviouswound.png',
    job: '아크',
    lt: {
      x: -525,
      y: -155,
    },
    rb: {
      x: 20,
      y: 100,
    },
    origin: {
      x: 519,
      y: 163,
    },
  },
  {
    name: '멈출 수 없는 충동',
    location: 'assets/unstoppableimpulse.png',
    job: '아크',
    lt: {
      x: -425,
      y: -180,
    },
    rb: {
      x: 50,
      y: 80,
    },
    origin: {
      x: 457,
      y: 245,
    },
  },
  {
    name: '멈출 수 없는 본능',
    location: 'assets/tenaciousinstinct.png',
    job: '아크',
    lt: {
      x: -425,
      y: -180,
    },
    rb: {
      x: 50,
      y: 80,
    },
    origin: {
      x: 456,
      y: 245,
    },
  },
  {
    name: '거스트 차지드라이브',
    location: 'assets/gustchargedrive.png',
    job: '아크',
    lt: {
      x: -225,
      y: -250,
    },
    rb: {
      x: 80,
      y: 50,
    },
    origin: {
      x: 192,
      y: 294,
    },
  },
  {
    name: '채워지지 않는 굶주림',
    location: 'assets/insatiablehunger.png',
    job: '아크',
    lt: {
      x: -615,
      y: -360,
    },
    rb: {
      x: 100,
      y: 75,
    },
    origin: {
      x: 694,
      y: 647,
    },
  },
  {
    name: '심연의 공포',
    location: 'assets/abyssterror.png',
    job: '아크',
    lt: {
      x: -420,
      y: -550,
    },
    rb: {
      x: 420,
      y: 30,
    },
    origin: {
      x: 419,
      y: 596,
    },
  },
  {
    name: '어비스 차지드라이브(1)',
    location: 'assets/abysschargedrive1.png',
    job: '아크',
    lt: {
      x: -250,
      y: -320,
    },
    rb: {
      x: 230,
      y: 5,
    },
    origin: {
      x: 429,
      y: 428,
    },
  },
  {
    name: '어비스 차지드라이브(2)',
    location: 'assets/abysschargedrive2.png',
    job: '아크',
    lt: {
      x: -285,
      y: -320,
    },
    rb: {
      x: 275,
      y: 70,
    },
    origin: {
      x: 346,
      y: 537,
    },
  },
  {
    name: '걷잡을 수 없는 혼돈',
    location: 'assets/unbridledchaos.png',
    job: '아크',
    lt: {
      x: -380,
      y: -335,
    },
    rb: {
      x: 350,
      y: 110,
    },
    origin: {
      x: 367,
      y: 339,
    },
  },
  {
    name: '끝없는 고통',
    location: 'assets/endlesspain.png',
    job: '아크',
    lt: {
      x: -770,
      y: -240,
    },
    rb: {
      x: 140,
      y: 60,
    },
    origin: {
      x: 718,
      y: 223,
    },
  },
  {
    name: '심연의 파수꾼',
    location: 'assets/abysschaser.png',
    job: '아크',
    lt: {
      x: -760,
      y: -410,
    },
    rb: {
      x: 320,
      y: 60,
    },
    origin: {
      x: 756,
      y: 435,
    },
  },
  {
    name: '근원의 기억',
    location: 'assets/memoryofroot.png',
    job: '아크',
    lt: {
      x: -700,
      y: -600,
    },
    rb: {
      x: 700,
      y: 200,
    },
    origin: {
      x: 322,
      y: 377,
    },
    scale: 200,
  },
  {
    name: '새어 나오는 악몽',
    location: 'assets/deviousnightmare.png',
    job: '아크',
    lt: {
      x: -680,
      y: -420,
    },
    rb: {
      x: 200,
      y: 40,
    },
    origin: {
      x: 672,
      y: 428,
    },
  },
  {
    name: '새어 나오는 흉몽',
    location: 'assets/deviousdream.png',
    job: '아크',
    lt: {
      x: -680,
      y: -420,
    },
    rb: {
      x: 200,
      y: 40,
    },
    origin: {
      x: 655,
      y: 404,
    },
  },
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
