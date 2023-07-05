interface WhitepaperSection {
  id: string;
  mainTitle: string;
  text1: string | null;
  text2: string | null;
  body: WhitepaperSectionBody[];
}

interface WhitepaperSectionBody {
  id?: string;
  subtitle: string;
  text1: string | null;
  text2: string | null;
  text3: string | null;
  text4: string | null;
  underlist: WhitepaperSectionUnderlist[];
  text5: string | null;
  text6: string | null;
}

interface WhitepaperSectionUnderlist {
  title: string | null;
  a_title: string | null;
  b_title: string | null;
  list: WhitepaperListItem[];
}

interface WhitepaperListItem {
  title: string;
  text: string;
}

const whitepapper: WhitepaperSection[] = [
  {
    id: "section1",
    mainTitle: "wpconst_sec1_title1",
    text1: "wpconst_sec1_text1",
    text2: "wpconst_sec1_text2",
    body: [
      {
        subtitle: "wpconst_sec1_body_subtitle1",
        text1: "wpconst_sec1_body_text1",
        text2: "wpconst_sec1_body_text2",

        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_sec1_body_subtitle2",
        text1: "wpconst_sec1_body_text3",

        text3: null,
        text4: null,
        text2: "wpconst_sec1_body_text4",
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_sec1_body_subtitle3",
        text1: "wpconst_sec1_body_text5",
        text2: "wpconst_sec1_body_text6",

        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
    ],
  },
  {
    id: "section2",
    mainTitle: "wpconst_sec2_title1",
    text1: null,
    text2: null,
    body: [
      {
        subtitle: "wpconst_sec2_body_subtitle1",
        text1: "wpconst_sec2_body_text1",
        text2: "wpconst_sec2_body_text2",

        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_sec2_body_subtitle2",
        text1: "wpconst_sec2_body_text3",
        text2: null,

        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [
              {
                title: "wpconst_sec2_body_title3",
                text: "wpconst_sec2_body_text4",
              },
              {
                title: "wpconst_sec2_body_title4",
                text: "wpconst_sec2_body_text5",
              },
              {
                title: "wpconst_sec2_body_title5",
                text: "wpconst_sec2_body_text6",
              },
              {
                title: "wpconst_sec2_body_title6",
                text: "wpconst_sec2_body_text7",
              },
              {
                title: "wpconst_sec2_body_title7",
                text: "wpconst_sec2_body_text8",
              },
              {
                title: "wpconst_sec2_body_title8",
                text: "wpconst_sec2_body_text9",
              },
            ],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_sec2_body_subtitle3",
        text1: "wpconst_sec2_body_text10",
        text2: null,

        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [
              {
                title: "wpconst_sec2_body_title9",
                text: "wpconst_sec2_body_text11",
              },
              {
                title: "wpconst_sec2_body_title10",
                text: "wpconst_sec2_body_text12",
              },
              {
                title: "wpconst_sec2_body_title11",
                text: "wpconst_sec2_body_text13",
              },
              {
                title: "wpconst_sec2_body_title12",
                text: "wpconst_sec2_body_text14",
              },
              {
                title: "wpconst_sec2_body_title13",
                text: "wpconst_sec2_body_text15",
              },
            ],
          },
        ],
        text5: null,
        text6: null,
      },
    ],
  },
  {
    id: "section3",
    mainTitle: "wpconst_sec3_title1",
    text1: null,
    text2: null,
    body: [
      {
        subtitle: "wpconst_sec3_body_subtitle1",
        text1: "wpconst_sec3_body_text1",
        text2: "wpconst_sec3_body_text2",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_sec3_body_subtitle2",
        text1: "wpconst_sec3_body_text3",
        text2: "wpconst_sec3_body_text4",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_sec3_body_subtitle3",
        text1: "wpconst_sec3_body_text5",
        text2: "",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },

      {
        subtitle: "wpconst_sec3_body_subtitle4",
        text1: "wpconst_sec3_body_text7",
        text2: "wpconst_sec3_body_text8",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_sec3_body_subtitle5",
        text1: "wpconst_sec3_body_text9",
        text2: "wpconst_sec3_body_text10",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
    ],
  },
  {
    id: "section4",
    mainTitle: "wpconst_sec4_title1",
    text1: null,
    text2: null,
    body: [
      {
        subtitle: "wpconst_sec4_body_title1",
        text1: "wpconst_sec4_body_text1",
        text2: "wpconst_sec4_body_text2",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_sec4_body_subtitle2",
        text1: "wpconst_text1",
        text2: "wpconst_text2",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text3",
        text1: "wpconst_text4",
        text2: "wpconst_text5",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text6",
        text1: "wpconst_text7",
        text2: "wpconst_text8",
        text3: "wpconst_text9",
        text4: "wpconst_text10",
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
    ],
  },
  {
    id: "section5",
    mainTitle: "wpconst_text11",
    text1: null,
    text2: null,
    body: [
      {
        subtitle: "wpconst_text12",
        text1: "wpconst_text13",
        text2: "wpconst_text14",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text15",
        text1: "wpconst_text16",
        text2: "wpconst_text17",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
    ],
  },
  {
    id: "section6",
    mainTitle: "wpconst_text18",
    text1: null,
    text2: null,
    body: [
      {
        subtitle: "wpconst_text19",
        text1: "wpconst_text20",
        text2: "wpconst_text21",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text22",
        text1: "wpconst_text23",
        text2: null,
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [
              {
                title: "wpconst_text24",
                text: "wpconst_text25",
              },
              {
                title: "wpconst_text26",
                text: "wpconst_text27",
              },
              {
                title: "wpconst_text28",
                text: "wpconst_text29",
              },
              {
                title: "wpconst_text30",
                text: "wpconst_text31",
              },
              {
                title: "wpconst_text32",
                text: "wpconst_text33",
              },
              {
                title: "wpconst_text34",
                text: "wpconst_text35",
              },
              {
                title: "wpconst_text36",
                text: "wpconst_text37",
              },
              {
                title: "wpconst_text38",
                text: "wpconst_text39",
              },
              {
                title: "wpconst_text40",
                text: "wpconst_text41",
              },
              {
                title: "wpconst_text42",
                text: "wpconst_text43",
              },
              {
                title: "wpconst_text44",
                text: "wpconst_text45",
              },
              {
                title: "wpconst_text46",
                text: "wpconst_text47",
              },
            ],
          },
        ],
        text5: "wpconst_text235",
        text6: null,
      },
      {
        subtitle: "wpconst_text48",
        text1: "wpconst_text49",
        text2: "wpconst_text50",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        id: "tokendist",
        subtitle: "wpconst_text51",
        text1: null,
        text2: null,
        text3: null,
        text4: null,
        underlist: [
          {
            title: "wpconst_text52",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "wpconst_text53",
                text: "wpconst_text54",
              },
              {
                title: "wpconst_text55",
                text: "wpconst_text56",
              },
              {
                title: "wpconst_text57",
                text: "wpconst_text58",
              },
            ],
          },
          {
            title: null,
            a_title: "wpconst_text59",
            b_title: "wpconst_text60",
            list: [
              {
                title: "wpconst_text61",
                text: "wpconst_text62",
              },
              {
                title: "wpconst_text63",
                text: "wpconst_text64",
              },
              {
                title: "wpconst_text65",
                text: "wpconst_text66",
              },
              {
                title: "wpconst_text67",
                text: "wpconst_text68",
              },
              {
                title: "wpconst_text69",
                text: "wpconst_text70",
              },
              {
                title: "wpconst_text71",
                text: "wpconst_text72",
              },
            ],
          },
          {
            title: "wpconst_text73",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "wpconst_text74",
                text: "wpconst_text75",
              },
              {
                title: "wpconst_text76",
                text: "wpconst_text77",
              },
              {
                title: "wpconst_text78",
                text: "wpconst_text79",
              },
            ],
          },
          {
            title: null,
            a_title: "wpconst_text80",
            b_title: "wpconst_text81",
            list: [
              {
                title: "wpconst_text82",
                text: "wpconst_text83",
              },
              {
                title: "wpconst_text84",
                text: "wpconst_text85",
              },
              {
                title: "wpconst_text86",
                text: "wpconst_text87",
              },
            ],
          },
          {
            title: "wpconst_text88",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "wpconst_text89",
                text: "wpconst_text90",
              },
              {
                title: "wpconst_text91",
                text: "wpconst_text92",
              },
              {
                title: "wpconst_text93",
                text: "wpconst_text94",
              },
            ],
          },
          {
            title: null,
            a_title: "wpconst_text95",
            b_title: "wpconst_text96",
            list: [
              {
                title: "wpconst_text97",
                text: "wpconst_text98",
              },
              {
                title: "wpconst_text99",
                text: "wpconst_text100",
              },
              {
                title: "wpconst_text101",
                text: "wpconst_text102",
              },
              {
                title: "wpconst_text103",
                text: "wpconst_text104",
              },
              {
                title: "wpconst_text105",
                text: "wpconst_text106",
              },
            ],
          },
          {
            title: "wpconst_text107",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "wpconst_text108",
                text: "wpconst_text109",
              },
              {
                title: "wpconst_text110",
                text: "wpconst_text111",
              },
              {
                title: "wpconst_text112",
                text: "wpconst_text113",
              },
            ],
          },
          {
            title: "wpconst_text114",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "wpconst_text115",
                text: "wpconst_text116",
              },
              {
                title: "wpconst_text117",
                text: "wpconst_text118",
              },
              {
                title: "wpconst_text119",
                text: "wpconst_text120",
              },
            ],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text121",
        text1: "wpconst_text122",
        text2: null,
        text3: null,
        text4: null,
        underlist: [
          {
            title: "wpconst_text123",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text124",
              },
              {
                title: "",
                text: "wpconst_text125",
              },
              {
                title: "",
                text: "wpconst_text126",
              },
            ],
          },
          {
            title: "wpconst_text127",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text128",
              },
              {
                title: "",
                text: "wpconst_text129",
              },
              {
                title: "",
                text: "wpconst_text130",
              },
            ],
          },
        ],
        text5: "wpconst_text236",
        text6: null,
      },
      {
        subtitle: "wpconst_text131",
        text1: "wpconst_text132",
        text2: "wpconst_text133",
        text3: "wpconst_text134",
        text4: null,
        underlist: [
          {
            title: "wpconst_text135",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text136",
              },
            ],
          },
          {
            title: "wpconst_text137",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text138",
              },
            ],
          },
          {
            title: "wpconst_text139",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text140",
              },
            ],
          },
          {
            title: "wpconst_text141",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text142",
              },
            ],
          },
          {
            title: "wpconst_text143",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text144",
              },
            ],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text145",
        text1: null,
        text2: null,
        text3: null,
        text4: null,
        underlist: [
          {
            title: "wpconst_text146",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text147",
              },
            ],
          },
          {
            title: "wpconst_text148",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text149",
              },
              {
                title: "",
                text: "wpconst_text150",
              },
              {
                title: "",
                text: "wpconst_text151",
              },
            ],
          },
          {
            title: "wpconst_text152",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text153",
              },
            ],
          },
          {
            title: "wpconst_text154",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text155",
              },
            ],
          },
          {
            title: "wpconst_text156",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text157",
              },
            ],
          },
        ],
        text5: "wpconst_text237",
        text6: null,
      },
    ],
  },
  {
    id: "section7",
    mainTitle: "wpconst_text158",
    text1: null,
    text2: null,
    body: [
      {
        subtitle: "wpconst_text159",
        text1: "wpconst_text160",
        text2: "wpconst_text161",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text162",
        text1: "wpconst_text163",
        text2: "wpconst_text164",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text165",
        text1: "wpconst_text166",
        text2: "wpconst_text167",
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
    ],
  },
  {
    id: "section8",
    mainTitle: "wpconst_text168",
    text1: null,
    text2: null,
    body: [
      {
        subtitle: "wpconst_text169",
        text1: "wpconst_text170",
        text2: "wpconst_text171",
        text3: "wpconst_text172",
        text4: null,
        underlist: [
          {
            title: "wpconst_text173",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text174",
              },
            ],
          },
          {
            title: "wpconst_text175",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text176",
              },
            ],
          },
          {
            title: "wpconst_text177",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text178",
              },
            ],
          },
          {
            title: "wpconst_text179",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text180",
              },
            ],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text181",
        text1: "wpconst_text182",
        text2: null,
        text3: "wpconst_text183",
        text4: null,
        underlist: [
          {
            title: "wpconst_text184",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text185",
              },
            ],
          },
          {
            title: "",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "wpconst_text186",
                text: "wpconst_text187",
              },
            ],
          },
          {
            title: "wpconst_text188",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text189",
              },
            ],
          },
          {
            title: "wpconst_text190",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text191",
              },
            ],
          },
          {
            title: "wpconst_text192",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text193",
              },
            ],
          },
        ],
        text5: "wpconst_text238",
        text6: "wpconst_text239",
      },
      {
        subtitle: "wpconst_text194",
        text1: null,
        text2: null,
        text3: "wpconst_text195",
        text4: null,
        underlist: [
          {
            title: "wpconst_text196",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text197",
              },
              {
                title: "",
                text: "wpconst_text198",
              },
              {
                title: "",
                text: "wpconst_text199",
              },
            ],
          },
          {
            title: "wpconst_text200",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text201",
              },
              {
                title: "",
                text: "wpconst_text202",
              },
              {
                title: "",
                text: "wpconst_text203",
              },
            ],
          },
          {
            title: "wpconst_text204",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text205",
              },
              {
                title: "",
                text: "wpconst_text206",
              },
            ],
          },
          {
            title: "wpconst_text207",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text208",
              },
              {
                title: "",
                text: "wpconst_text209",
              },
            ],
          },
          {
            title: "wpconst_text210",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text211",
              },
              {
                title: "",
                text: "wpconst_text212",
              },
            ],
          },
          {
            title: "wpconst_text213",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text214",
              },
              {
                title: "",
                text: "wpconst_text215",
              },
            ],
          },
          {
            title: "wpconst_text216",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text217",
              },
              {
                title: "",
                text: "wpconst_text218",
              },
            ],
          },
          {
            title: "wpconst_text219",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text220",
              },
              {
                title: "",
                text: "wpconst_text221",
              },
            ],
          },
          {
            title: "wpconst_text222",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text223",
              },
              {
                title: "",
                text: "wpconst_text224",
              },
            ],
          },
          {
            title: "wpconst_text225",
            a_title: null,
            b_title: null,
            list: [
              {
                title: "",
                text: "wpconst_text226",
              },
              {
                title: "",
                text: "wpconst_text227",
              },
            ],
          },
        ],
        text5: "wpconst_text240",
        text6: null,
      },
    ],
  },
  {
    id: "section9",
    mainTitle: "wpconst_text228",
    text1: null,
    text2: null,
    body: [
      {
        subtitle: "wpconst_text229",
        text1: "wpconst_text230",
        text2: null,
        text3: null,
        text4: null,
        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text231",
        text1: "wpconst_text232",
        text2: null,
        text3: null,
        text4: null,

        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
      {
        subtitle: "wpconst_text233",
        text1: "wpconst_text234",
        text2: null,
        text3: null,
        text4: null,

        underlist: [
          {
            title: null,
            a_title: null,
            b_title: null,
            list: [],
          },
        ],
        text5: null,
        text6: null,
      },
    ],
  },
];

export default whitepapper;
