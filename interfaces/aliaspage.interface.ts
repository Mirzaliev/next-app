export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}

export interface AliasPageAdvantage {
    _id: string;
    title: string;
    description: string;
  }

export interface HhData {
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
  }

export interface AliasPageModel {
    tags: string[];
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: TopLevelCategory;
    advantages: AliasPageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    hh: HhData;
    qas: any[];
    addresses: any[];
    categoryOn: string;
  }



