import one from "public/assets/images/one.svg";
import mexa from "public/assets/images/mexa.svg";
import wallet from "public/assets/images/wallet.svg";
import arrow from "public/assets/images/arrow.svg";
import guardian from "public/assets/images/guardian.svg";
import tepi from "public/assets/images/tepi.svg";
import two from "public/assets/images/two.svg";
import three from "public/assets/images/three.svg";
import four from "public/assets/images/four.svg";
import fife from "public/assets/images/fife.svg";
import six from "public/assets/images/six.svg";
import seven from "public/assets/images/seven.svg";
import lock from "public/assets/images/lock.svg";

export interface renderObject {
  topicon: string;
  icon: string;
  title: string;
  description: string;
  text: string;
}
export const whyAqordsList: renderObject[] = [
  {
    topicon: one,
    icon: mexa,
    title: "why_aqords1_title",
    description: "why_aqords1_desc",
    text: "why_aqords1_text",
  },
  {
    topicon: two,
    icon: guardian,
    title: "why_aqords2_title",
    description: "why_aqords2_desc",
    text: "why_aqords2_text",
  },
  {
    topicon: three,
    icon: arrow,
    title: "why_aqords3_title",
    description: "why_aqords3_desc",
    text: "why_aqords3_text",
  },
  {
    topicon: four,
    icon: tepi,
    title: "why_aqords4_title",
    description: "why_aqords4_desc",
    text: "why_aqords4_text",
  },
  {
    topicon: fife,
    icon: wallet,
    title: "why_aqords5_title",
    description: "why_aqords5_desc",
    text: "why_aqords5_text",
  },
];

export const ManifestList: renderObject[] = [
  {
    topicon: one,
    icon: guardian,
    title: "manifest_list1_title",
    description: "manifest_list1_desc",
    text: "manifest_list1_text",
  },
  {
    topicon: two,
    icon: mexa,
    title: "manifest_list2_title",
    description: "manifest_list2_desc",
    text: "manifest_list2_text",
  },
  {
    topicon: three,
    icon: wallet,
    title: "manifest_list3_title",
    description: "manifest_list3_desc",
    text: "manifest_list3_text",
  },
  {
    topicon: four,
    icon: tepi,
    title: "manifest_list4_title",
    description: "manifest_list4_desc",
    text: "manifest_list4_text",
  },
  {
    topicon: fife,
    icon: lock,
    title: "manifest_list5_title",
    description: "manifest_list5_desc",
    text: "manifest_list5_text",
  },
  {
    topicon: six,
    icon: tepi,
    title: "manifest_list6_title",
    description: "manifest_list6_desc",
    text: "manifest_list6_text",
  },
  {
    topicon: seven,
    icon: lock,
    title: "manifest_list7_title",
    description: "manifest_list7_desc",
    text: "manifest_list7_text",
  },
];

export const whyInvestList: renderObject[] = [
  {
    topicon: one,
    icon: guardian,
    title: "why_invest1_title",
    description: "why_invest1_desc",
    text: "why_invest1_text",
  },
  {
    topicon: two,
    icon: mexa,
    title: "why_invest2_title",
    description: "why_invest2_desc",
    text: "why_invest2_text",
  },
  {
    topicon: three,
    icon: wallet,
    title: "why_invest3_title",
    description: "why_invest3_desc",
    text: "why_invest3_text",
  },
];

export const detailInvestList: renderObject[] = [
  {
    topicon: one,
    icon: guardian,
    title: "detail_invest1_title",
    description: "detail_invest1_desc",
    text: "detail_invest1_text",
  },
  {
    topicon: two,
    icon: mexa,
    title: "detail_invest2_title",
    description: "detail_invest2_desc",
    text: "detail_invest2_text",
  },
  {
    topicon: three,
    icon: wallet,
    title: "detail_invest3_title",
    description: "detail_invest3_desc",
    text: "detail_invest3_text",
  },
];
