/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 *
 * Collections 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Collections，然后在与 Collection 相关的 Markdown 文件中，自动生成 permalink。
 *
 * collection 的  type 为 `post` 时，表示为 文档列表类型（即没有侧边导航栏，有文档列表页）
 * 可用于实现如 博客、专栏 等以文章列表聚合形式的文档集合 （内容相对碎片化的）
 *
 * collection 的 type 为 `doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集合 （内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 Collection 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `collection.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineCollections` 是用于定义 collection 集合的帮助函数
 * - `defineCollection` 是用于定义单个 collection 配置的帮助函数
 *
 * 通过 `defineCollection` 定义的 collection 配置，应该填入 `defineCollections` 中
 */
import { defineCollection, defineCollections } from "vuepress-theme-plume";

/* =================== locale: zh-CN ======================= */

const sidebar = (prefix: string = "") => [
  prefix + "/product/",
  prefix + "/product/taskgroup",
  prefix + "/product/task",
  prefix + "/product/tasklist",
  prefix + "/product/taskanchor",
  prefix + "/product/taskview",
  prefix + "/product/nexttask",
  prefix + "/product/doingwindow",
  prefix + "/product/setting",
];

const zhProductDocs = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: "doc",
  // 文档集合所在目录，相对于 `docs/`
  dir: "product",
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `/` + `linkPrefix` 开头
  // linkPrefix: "/product",
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: "产品文档",
  // 手动配置侧边栏结构
  // sidebar: ["", "foo", "bar"],
  // 根据文件结构自动生成侧边栏
  sidebar: sidebar(),
});

/**
 * 导出所有的 collections
 *  (zhBlog 为博客示例，如果不需要博客功能，请删除)
 *  (zhDemoDoc 为参考示例，如果不需要它，请删除)
 */
export const zhCollections = defineCollections([zhProductDocs]);

/* =================== locale: en-US ======================= */

const enProductDocs = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: "doc",
  // 文档集合所在目录，相对于 `docs/en/`
  dir: "product",
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `/en/` + `linkPrefix` 开头
  // linkPrefix: "/en/product",
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: "Product Documentation",
  // 手动配置侧边栏结构
  // sidebar: ["", "foo", "bar"],
  // 根据文件结构自动生成侧边栏
  // sidebar: sidebar("/en"),
  sidebar: sidebar("/en"),
});

/**
 * 导出所有的 collections
 *  (enBlog 为博客示例，如果不需要博客功能，请删除)
 *  (enDemoDoc 为参考示例，如果不需要它，请删除)
 */
export const enCollections = defineCollections([enProductDocs]);

/* =================== locale: ja ======================= */

const jaProductDocs = defineCollection({
  type: "doc",
  dir: "product",
  title: "製品ドキュメント",
  sidebar: sidebar("/ja"),
});

export const jaCollections = defineCollections([jaProductDocs]);

/* =================== locale: ko ======================= */

const koProductDocs = defineCollection({
  type: "doc",
  dir: "product",
  title: "제품 문서",
  sidebar: sidebar("/ko"),
});

export const koCollections = defineCollections([koProductDocs]);

/* =================== locale: de ======================= */

const deProductDocs = defineCollection({
  type: "doc",
  dir: "product",
  title: "Produktdokumentation",
  sidebar: sidebar("/de"),
});

export const deCollections = defineCollections([deProductDocs]);

/* =================== locale: es ======================= */

const esProductDocs = defineCollection({
  type: "doc",
  dir: "product",
  title: "Documentación del producto",
  sidebar: sidebar("/es"),
});

export const esCollections = defineCollections([esProductDocs]);

/* =================== locale: fr ======================= */

const frProductDocs = defineCollection({
  type: "doc",
  dir: "product",
  title: "Documentation du produit",
  sidebar: sidebar("/fr"),
});

export const frCollections = defineCollections([frProductDocs]);

/* =================== locale: ru ======================= */

const ruProductDocs = defineCollection({
  type: "doc",
  dir: "product",
  title: "Документация продукта",
  sidebar: sidebar("/ru"),
});

export const ruCollections = defineCollections([ruProductDocs]);
