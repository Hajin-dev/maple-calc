import { SkillData } from "../../skill-data";
const heroSkillData: SkillData[] = [{
    name: '스피릿 블레이드 - 적용 범위',
    location: 'assets/furyNew.png',
    job: '히어로',
    lt: {
      x: -300,
      y: -200,
    },
    rb: {
      x: 300,
      y: 200,
    },
    origin: {
      x: 147,
      y: 350,
    },
  },
  {
    name: '레이징 블로우',
    location: 'assets/ragingblow.png',
    job: '히어로',
    lt: {
      x: -350,
      y: -220,
    },
    rb: {
      x: 20,
      y: 70,
    },
    origin: {
      x: 373,
      y: 281,
    },
  },
  {
    name: '레이징 블로우(강화)',
    location: 'assets/ragingblow_enrage.png',
    job: '히어로',
    lt: {
      x: -360,
      y: -250,
    },
    rb: {
      x: 70,
      y: 100,
    },
    origin: {
      x: 340,
      y: 313,
    },
  },
  {
    name: '인사이징',
    location: 'assets/ensizing.png',
    job: '히어로',
    lt: {
      x: -380,
      y: -310,
    },
    rb: {
      x: 120,
      y: 50,
    },
    origin: {
      x: 744,
      y: 608,
    },
  },
  {
    name: '오라 블레이드',
    location: 'assets/aurablade.png',
    job: '히어로',
    lt: {
      x: -80 - 300 / 2 - 560,
      y: -60 - 300 / 2,
    },
    rb: {
      x: -80 + 300 / 2,
      y: -60 + 300 / 2,
    },
    origin: {
      x: 188 + 80 + 560,
      y: 182 + 60,
    },
  },
  {
    name: '레이지 업라이징',
    location: 'assets/rageuprizing.png',
    job: '히어로',
    lt: {
      x: -420,
      y: -600,
    },
    rb: {
      x: 100,
      y: 20,
    },
    origin: {
      x: 772,
      y: 685,
    },
  },
  {
    name: '소드 오브 버닝 소울',
    location: 'assets/swordofburningsoul.png',
    job: '히어로',
    lt: {
      x: -355,
      y: -195,
    },
    rb: {
      x: 90,
      y: 0,
    },
    origin: {
      x: 379,
      y: 210,
    },
  },
  {
    name: '소드 오브 버닝 소울(인레이지)',
    location: 'assets/swordofburningsoul_enrage.png',
    job: '히어로',
    lt: {
      x: -380,
      y: -210,
    },
    rb: {
      x: 90,
      y: 0,
    },
    origin: {
      x: 379,
      y: 210,
    },
  },
  {
    name: '콤보 데스폴트',
    location: 'assets/combodesfort.png',
    job: '히어로',
    lt: {
      x: -690,
      y: -350,
    },
    rb: {
      x: 520,
      y: 190,
    },
    origin: {
      x: 646,
      y: 268,
    },
  },
  {
    name: '콤보 인스팅트(1)',
    location: 'assets/comboinstinct1.png',
    job: '히어로',
    lt: {
      x: -365,
      y: -260,
    },
    rb: {
      x: -35,
      y: 65,
    },
    origin: {
      x: 457,
      y: 385,
    },
  },
  {
    name: '콤보 인스팅트(2)',
    location: 'assets/comboinstinct2.png',
    job: '히어로',
    lt: {
      x: -400,
      y: -245,
    },
    rb: {
      x: -50,
      y: 90,
    },
    origin: {
      x: 478,
      y: 264,
    },
  },
  {
    name: '콤보 인스팅트(3)',
    location: 'assets/comboinstinct3.png',
    job: '히어로',
    lt: {
      x: -445,
      y: -160,
    },
    rb: {
      x: 130,
      y: 130,
    },
    origin: {
      x: 519,
      y: 232,
    },
  },
  {
    name: '소드 일루전',
    location: 'assets/swordillusion.png',
    job: '히어로',
    lt: {
      x: -600,
      y: -300,
    },
    rb: {
      x: 5,
      y: 50,
    },
    origin: {
      x: 727,
      y: 360,
    },
  },
{
  name: '레이징 블로우 VI',
  location: 'assets/explorers/warrior/6thRaisingBlow.png',
  job: '히어로',
  lt: {
    x: -425,
    y: -250,
  },
  rb: {
    x: 70,
    y: 100,
  },
  origin: {
    x: 571,
    y: 230,
  },
}]
const paladinSkillData: SkillData[]=[
    {
        name: '컴뱃 오더스 - 적용 범위',
        location: 'assets/CombatOrders.png',
        job: '팔라딘',
        lt: {
          x: -400,
          y: -300,
        },
        rb: {
          x: 400,
          y: 300,
        },
        origin: {
          x: 222,
          y: 376,
        }
      },
      {
        name: '블래스트',
        location: 'assets/blast.png',
        job: '팔라딘',
        lt: {
          x: -320,
          y: -160,
        },
        rb: {
          x: 90,
          y: 40,
        },
        origin: {
          x: 457,
          y: 398,
        },
      },
      {
        name: '디바인 차지',
        location: 'assets/divinecharge.png',
        job: '팔라딘',
        lt: {
          x: -430,
          y: -225,
        },
        rb: {
          x: 30,
          y: 50,
        },
        origin: {
          x: 474,
          y: 302,
        },
      },
      {
        name: '디바인 스티그마',
        location: 'assets/divinestigma.png',
        job: '팔라딘',
        lt: {
          x: -445,
          y: -255,
        },
        rb: {
          x: 35,
          y: 135,
        },
        origin: {
          x: 622,
          y: 412,
        },
      },
      {
        name: '디바인 스티그마(성흔 폭발)',
        location: 'assets/divinestigma_explode.png',
        job: '팔라딘',
        lt: {
          x: -150 - 200,
          y: -550,
        },
        rb: {
          x: 150 - 200,
          y: 10,
        },
        origin: {
          x: 262 + 200,
          y: 548,
        },
      },
      {
        name: '생츄어리',
        location: 'assets/sanctuary.png',
        job: '팔라딘',
        lt: {
          x: -500,
          y: -400,
        },
        rb: {
          x: 400,
          y: 250,
        },
        origin: {
          x: 597,
          y: 716,
        },
      },{
        name: '가디언 스피릿 - 부활 범위',
        location: 'assets/guardianSpirit.png',
        job: '팔라딘',
        lt: {
          x: -400,
          y: -350,
        },
        rb: {
          x: 400,
          y: 250,
        },
        origin: {
          x: 202,
          y: 365,
        },
      },
      {
        name: '그랜드 크로스(1)',
        location: 'assets/grandcrosssmall.png',
        job: '팔라딘',
        lt: {
          x: -210,
          y: -100,
        },
        rb: {
          x: 210,
          y: 30,
        },
        lt2: {
          x: -65,
          y: -245,
        },
        rb2: {
          x: 65,
          y: 175,
        },
        origin: {
          x: 194,
          y: 233,
        },
      },
      {
        name: '그랜드 크로스(2)',
        location: 'assets/grandcrossbig.png',
        job: '팔라딘',
        lt: {
          x: -300,
          y: -160,
        },
        rb: {
          x: 300,
          y: 90,
        },
        lt2: {
          x: -125,
          y: -335,
        },
        rb2: {
          x: 125,
          y: 265,
        },
        origin: {
          x: 315,
          y: 363,
        },
      },
      {
        name: '블래스트 VI',
        location: 'assets/explorers/warrior/6thBlast.png',
        job: '팔라딘',
        lt: {
          x: -350,
          y: -210,
        },
        rb: {
          x: 90,
          y: 55,
        },
        origin: {
          x: 562,
          y: 553,
        },
      }
]
const darkKnightSkillData: SkillData[]=[
      {
        name: '다크 임페일',
        location: 'assets/darkimpale.png',
        job: '다크나이트',
        lt: {
          x: -425,
          y: -210,
        },
        rb: {
          x: 30,
          y: 65,
        },
        origin: {
          x: 434,
          y: 248,
        },
      },
      {
        name: '궁니르 디센트',
        location: 'assets/gungnirdescent.png',
        job: '다크나이트',
        lt: {
          x: -400,
          y: -210,
        },
        rb: {
          x: 0,
          y: 0,
        },
        origin: {
          x: 144 + 400,
          y: 473,
        },
      },
      {
        name: '다크 스피어',
        location: 'assets/darkspear.png',
        job: '다크나이트',
        lt: {
          x: -5 - 280 / 2 - 1000,
          y: -63 - 220 / 2,
        },
        rb: {
          x: -5 + 280 / 2,
          y: -63 + 220 / 2,
        },
        origin: {
          x: 140 + 5,
          y: 52 + 63,
        },
      },
      {
        name: '피어스 사이클론',
        location: 'assets/piercecyclone.png',
        job: '다크나이트',
        lt: {
          x: -650,
          y: -400,
        },
        rb: {
          x: 100,
          y: 15,
        },
        origin: {
          x: 640,
          y: 405,
        },
      },
      {
        name: '다크니스 오라',
        location: 'assets/darknessaura.png',
        job: '다크나이트',
        lt: {
          x: -420,
          y: -225,
        },
        rb: {
          x: 420,
          y: 150,
        },
        origin: {
          x: 179,
          y: 168,
        },
      },
      {
        name: '다크니스 오라(막타)',
        location: 'assets/darknessaurafinal.png',
        job: '다크나이트',
        lt: {
          x: -600,
          y: -600,
        },
        rb: {
          x: 600,
          y: 300,
        },
        origin: {
          x: 452,
          y: 644,
        },
      },
      {
        name: '궁니르 디센트VI',
        location: 'assets/explorers/warrior/6thGungnirDescent.png',
        job: '다크나이트',
        lt: {
          x: -410,
          y: -210,
        },
        rb: {
          x: 30,
          y: 50,
        },
        origin: {
          x: 153 + 410,
          y: 571,
        },
      },
]
const warriorCommonSkillData: SkillData[]=[
    {
        name:"블리츠 실드",
        location:'assets/explorers/warrior/blitzShield.png',
        job:"모험가 전사",
        lt:{
            x:-350,
            y:-350,
        },
        rb:{
            x:350,
            y:250
        },
        origin:{
            x:417,
            y:336
        }
      }
]

export const warriorSkillData: SkillData[]=[
    ...heroSkillData,
    ...paladinSkillData,
    ...darkKnightSkillData,
    ...warriorCommonSkillData
]