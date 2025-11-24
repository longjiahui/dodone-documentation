/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export const zhNavbar = defineNavbarConfig([
  {
    text: "产品文档",
    link: "/product/",
  },
]);

export const enNavbar = defineNavbarConfig([
  {
    text: "Product Documentation",
    link: "/en/product/README.md",
  },
]);

export const jaNavbar = defineNavbarConfig([
  {
    text: "製品ドキュメント",
    link: "/ja/product/",
  },
]);

export const koNavbar = defineNavbarConfig([
  {
    text: "제품 문서",
    link: "/ko/product/",
  },
]);

export const deNavbar = defineNavbarConfig([
  {
    text: "Produktdokumentation",
    link: "/de/product/",
  },
]);

export const esNavbar = defineNavbarConfig([
  {
    text: "Documentación del producto",
    link: "/es/product/",
  },
]);

export const frNavbar = defineNavbarConfig([
  {
    text: "Documentation du produit",
    link: "/fr/product/",
  },
]);

export const ruNavbar = defineNavbarConfig([
  {
    text: "Документация продукта",
    link: "/ru/product/",
  },
]);
