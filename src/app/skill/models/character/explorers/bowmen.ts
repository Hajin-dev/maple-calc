import { SkillData } from "../../skill-data";
const bowMasterSkillData:SkillData[]=[{
    name: '언카운터블 애로우',
    location: 'assets/uncountablearrow.png',
    job: '보우마스터',
    lt: {
      x: -450,
      y: -200,
    },
    rb: {
      x: 10,
      y: 50,
    },
    origin: {
      x: 583,
      y: 242,
    },
  },
  {
    name: '윈드 오브 프레이',
    location: 'assets/windofpray.png',
    job: '보우마스터',
    lt: {
      x: -400,
      y: -455,
    },
    rb: {
      x: 400,
      y: 45,
    },
    origin: {
      x: 464,
      y: 670,
    },
  },
  {
    name: '애로우 레인',
    location: 'assets/arrowrain.png',
    job: '보우마스터',
    lt: {
      x: -500,
      y: -300,
    },
    rb: {
      x: 30,
      y: 30,
    },
    lt2: {
      x: -500,
      y: -300,
    },
    rb2: {
      x: 150,
      y: 10,
    },
    origin: {
      x: 278,
      y: 510,
    },
  },
  {
    name: '잔영의 시',
    location: 'assets/illusionaryshot.png',
    job: '보우마스터',
    lt: {
      x: -600,
      y: -300,
    },
    rb: {
      x: -10,
      y: 300,
    },
    origin: {
      x: 302,
      y: 206,
    },
  },
  {
    name: '실루엣 미라주',
    location: 'assets/silhouettemirage.png',
    job: '보우마스터',
    lt: {
      x: -650,
      y: -200,
    },
    rb: {
      x: 50,
      y: 200,
    },
    origin: {
      x: 344,
      y: 478,
    },
  },  {
    name: '폭풍의 시 VI: 난사 모드',
    location: 'assets/explorers/bowmen/6thStormArrowLoop.png',
    job: '보우마스터',
    lt: {
      x: -600,
      y: -140,
    },
    rb: {
      x: 10,
      y: 70,
    },
    origin: {
      x: 693,
      y: 261,
    },
  }]
const marksManSkillData:SkillData[]=[{
    name: '피어싱 II',
    location: 'assets/piercing.png',
    job: '신궁',
    lt: {
      x: -600,
      y: -80,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 656,
      y: 174,
    },
  },
  {
    name: '인핸스 피어싱 II',
    location: 'assets/enhancepiercing.png',
    job: '신궁',
    lt: {
      x: 0 - 250 / 2 - 600,
      y: -39 - 175 / 2,
    },
    rb: {
      x: 0 + 250 / 2,
      y: -39 + 175 / 2,
    },
    origin: {
      x: 718,
      y: 205,
    },
  },
  {
    name: '롱 레인지 트루샷',
    location: 'assets/longrangetrueshot.png',
    job: '신궁',
    lt: {
      x: -960,
      y: -210,
    },
    rb: {
      x: 60,
      y: 150,
    },
    origin: {
      x: 954,
      y: 247,
    },
  },
  {
    name: '차지드 애로우 (강화)',
    location: 'assets/chargedarrow_full.png',
    job: '신궁',
    lt: {
      x: -160 - 500 / 2 - 1050,
      y: -45 - 260 / 2,
    },
    rb: {
      x: -160 + 500 / 2,
      y: -45 + 260 / 2,
    },
    origin: {
      x: 741,
      y: 311,
    },
  },
  {
    name: '풀버스트 샷',
    location: 'assets/fullburstshot.png',
    job: '신궁',
    lt: {
      x: -30 - 280 / 2 - 625,
      y: -30 - 150 / 2,
    },
    rb: {
      x: 280 / 2,
      y: 280 / 2,
    },
    origin: {
      x: 740,
      y: 540,
    },
  },]
const pathFinderSkillData:SkillData[]=[{
    name: '카디널 디스차지',
    location: 'assets/cardinaldischarge.png',
    job: '패스파인더',
    lt: {
      x: -470,
      y: -150,
    },
    rb: {
      x: 30,
      y: 80,
    },
    origin: {
      x: 313,
      y: 205,
    },
  },
  {
    name: '카디널 블래스트',
    location: 'assets/cardinalblast.png',
    job: '패스파인더',
    lt: {
      x: 50 - 140 - 400,
      y: -30 - 215,
    },
    rb: {
      x: 50 + 140 - 400,
      y: -30 + 195,
    },
    origin: {
      x: 233 - 50 + 400,
      y: 358 + 30,
    },
  },
  {
    name: '카디널 트랜지션',
    location: 'assets/cardinaltransition.png',
    job: '패스파인더',
    lt: {
      x: -300,
      y: -130,
    },
    rb: {
      x: 300,
      y: 50,
    },
    origin: {
      x: 377,
      y: 255,
    },
  },
  {
    name: '엣지 오브 레조넌스',
    location: 'assets/edgeofresonance.png',
    job: '패스파인더',
    lt: {
      x: -300,
      y: -300,
    },
    rb: {
      x: 300,
      y: 250,
    },
    origin: {
      x: 272,
      y: 300,
    },
  },
  {
    name: '콤보 어썰트(활대)',
    location: 'assets/comboassult_discharge_bow.png',
    job: '패스파인더',
    lt: {
      x: -200,
      y: -220,
    },
    rb: {
      x: 200,
      y: 100,
    },
    origin: {
      x: 299,
      y: 379,
    },
  },
  {
    name: '콤보 어썰트(디스차지, 화살)',
    location: 'assets/comboassult_discharge_arrow.png',
    job: '패스파인더',
    lt: {
      x: -450,
      y: -450,
    },
    rb: {
      x: 450,
      y: 250,
    },
    origin: {
      x: 665,
      y: 642,
    },
  },
  {
    name: '콤보 어썰트(블래스트, 화살)',
    location: 'assets/comboassult_blast_arrow.png',
    job: '패스파인더',
    lt: {
      x: -400,
      y: -400,
    },
    rb: {
      x: 400,
      y: 200,
    },
    origin: {
      x: 499,
      y: 557,
    },
  },
  {
    name: '콤보 어썰트(트랜지션, 화살)',
    location: 'assets/comboassult_transition_arrow.png',
    job: '패스파인더',
    lt: {
      x: -400,
      y: -400,
    },
    rb: {
      x: 400,
      y: 200,
    },
    origin: {
      x: 499,
      y: 557,
    },
  },
  {
    name: '에인션트 아스트라(디스차지)',
    location: 'assets/ancientastra_discharge.png',
    job: '패스파인더',
    lt: {
      x: -650,
      y: -160,
    },
    rb: {
      x: 10,
      y: 90,
    },
    origin: {
      x: 658,
      y: 236,
    },
  },
  {
    name: '에인션트 아스트라(트랜지션)',
    location: 'assets/ancientastra_transition.png',
    job: '패스파인더',
    lt: {
      x: -650,
      y: -160,
    },
    rb: {
      x: 10,
      y: 90,
    },
    origin: {
      x: 710,
      y: 236,
    },
  },{
    name: '옵시디언 배리어(디스차지) - 부여 가능 범위',
    location: 'assets/5thObsidianBarrier.png',
    job: '패스파인더',
    lt: {
      x: -400,
      y: -300,
    },
    rb: {
      x: 300,
      y: 300,
    },
    origin: {
      x: 63,
      y: 171,
    },
  },{
    name: '옵시디언 배리어(디스차지)',
    location: 'assets/5thObsidianBarrier1.png',
    job: '패스파인더',
    lt: {
      x: -200,
      y: -200,
    },
    rb: {
      x: 200,
      y: 10,
    },
    origin: {
      x: 242,
      y: 316,
    },
  },{
    name: '옵시디언 배리어(블래스트)',
    location: 'assets/5thObsidianBarrier2.png',
    job: '패스파인더',
    lt: {
      x: -300,
      y: -300,
    },
    rb: {
      x: 300,
      y: 10,
    },
    origin: {
      x: 598,
      y: 790,
    },
  },{
    name: '옵시디언 배리어(트랜지션)',
    location: 'assets/5thObsidianBarrier3.png',
    job: '패스파인더',
    lt: {
      x: -200,
      y: -200,
    },
    rb: {
      x: 200,
      y: 10,
    },
    origin: {
      x: 325,
      y: 392,
    },
  },
  {
    name: '카디널 블라스트 VI - 폭발',
    location: 'assets/explorers/bowmen/6thCardinalBlastBomb.png',
    job: '패스파인더',
    lt: {
      x: -170,
      y: -215,
    },
    rb: {
      x: 170,
      y: 195,
    },
    origin: {
      x: 107,
      y: 137,
    },
    },  
    {
        name: '포세이큰 렐릭 - 고대의 분노',
        location: 'assets/explorers/bowmen/6thForsakenRelicAncientRageEditional.png',
        job: '패스파인더',
        lt: {
          x: -200,
          y: -200,
        },
        rb: {
          x: 200,
          y: 200,
        },
        lt2: {
            x: -500,
            y: -500,
          },
        rb2: {
            x: 500,
            y: 500,
          },
        lt3:{
            x:-150,
            y:-150
        },
        rb3:{
            x:150,
            y:150
        },
        origin: {
          x: 181,
          y: 194,
        },
        },]
const bowmenCommonSkillData:SkillData[]=[{
    name: '샤프 아이즈 - 적용 범위',
    location: 'assets/sharpEyes.png',
    job: '공용',
    lt: {
      x: -400,
      y: -300,
    },
    rb: {
      x: 400,
      y: 300,
    },
    origin: {
      x: 113,
      y: 245,
    },
  },{
    name: '피닉스/프리저/레이븐',
    location: 'assets/phoenix.png',
    job: '공용',
    lt: {
      x: -280,
      y: -100,
    },
    rb: {
      x: 100,
      y: 30,
    },
    origin: {
      x: 250,
      y: 248,
    },
  },]

export const bowmenSkillData:SkillData[]=[
    ...bowMasterSkillData,
    ...marksManSkillData,
    ...pathFinderSkillData,
    ...bowmenCommonSkillData
]