# 加入咕链

## 要求

您的文章应满足下述所有要求。

### 原则要求

您愿意为开放的网络做出贡献，例：乐于分享知识经验。

### 用户要求

当**提交 Issue 时**，您的文章对应的洛谷账号应已**绿名**及以上或有**钩或气球**，如果后续因包括但不限于 AFO、作弊被棕等原因不满足以上要求，只要**文章无不良性质删改**，文章仍然加入咕链。  
特别的，如果这篇文章是你的小号发布的且你的小号不满足以上要求，而大号满足要求，请使用你的大号发布。

### 文章更新、内容和质量

您的文章应有 $200$ 字以上或已经**公开发表在洛谷文章区**（即无需 luogu.me 访问），并且文章不包含以下内容：

* 违法违规的内容，如：涉政敏感、色情、暴力、血腥；
* 影响访问体验的内容，如：侵入式广告；
* 非**原创**作者或**大量**使用 AI 生成且未注明；
* 其它维护组认为的不适宜的内容。
* LATEX 不得杂乱，例：可视度低、可能瞎眼睛的 LATEX 和一长段使用 LATEX“美化”的文字，如：$在来来往往的文章中发现你$；

::: warning 警告
如果明知文章不满足以上 $5$ 点仍然提交申请，将被视为扰乱咕链社区秩序、拖慢审批速度，一律加入黑名单，**永远不得再次申请加入**。
:::

咕链不反对使用 AI 润色文章。使用 AI 辅助写作（润色、查找资料等），**必须**注明使用 AIGC 技术辅助写作。维护组审核加入申请时由维护组成员人工判断是否为 AIGC，申请人可以依据运维规定要求维护组重审。

::: info 对于 LATEX 文章和网址收集文章

若您的文章类型是 LATEX 文章或网址收集文章。

单页面的 LATEX 文章有很大可能会因为内容单一、且大多数 LATEX 都是搬运他人文章被驳回，建议添加一些非 LATEX 内容或证明自己为原创者；网址收集文章视具体情况而定。若它们链接了**您的**其他文章，则您的其他文章需要符合[上述 $5$ 点的要求](#文章更新、内容和质量)。

:::

### 文章访问情况

您的文章须可正常访问，以巡查机器人是否可访问和人工巡查时文章是否被删除为准。

### 文章已放置咕链外链

您的文章须将开往的外链 `https://gugo.luogu.qd.je/go.html` 及图片放置在一个**打开您的文章就能看到的地方**，例如顶部、中间。对于已经**公开发表在洛谷文章区**（即无需 luogu.me 访问）的**专栏**，您仅需要让访客找得到咕链外链即可。

* 如需使用 Emoji，推荐使用与齿轮相关的 Emoji，推荐 `⚙`；
* 图片有以下几种供选择，可查阅 [剪贴板](https://www.luogu.me/paste/mo2c1hfh)：
  + `https://cdn.luogu.com.cn/upload/image_hosting/30d69jj1.png?x-oss-process=image/resize,m_fixed,h_80,w_0`
  + `https://cdn.luogu.com.cn/upload/image_hosting/08cr7ii8.png?x-oss-process=image/resize,m_fixed,h_30,w_0`
  + `https://cdn.luogu.com.cn/upload/image_hosting/zob8v1xc.png?x-oss-process=image/resize,m_fixed,h_30,w_0`
* 💡 参考代码：
  ```markdown
  [本文已加入⚙咕链，**咕链——在来来往往的文章中找到你**](https://gugo.luogu.qd.je)

  ![此处是你喜欢的图片（在列表中选择一张）](https://cdn.luogu.com.cn/upload/image_hosting/30d69jj1.png?x-oss-process=image/resize,m_fixed,h_80,w_0)
  ```

::: info 示例

若您不清楚要在文章的哪个位置放置开往外链，可参考如下示例。
![例子（顶部、中间）](/assets/image/where.png)

:::

::: warning

开往维护组对加入规则有制定、修改与解释以上内容的权利。若以上内容有修改，则按照最新版本的内容执行，内容修改后恕不另行通知。

:::

## 申请

请前往开往的 [GitHub Issues 页面提起一个新的 Issue](https://github.com/ru-sin/gugo/issues/new) ，并选择「申请收录」的 Issue 模板。

我们会在空闲时间内审核您的文章。若您的加入申请超过 $1$ 个月还未审核，可以在洛谷帖子下 @ 我，或通过其它我已经公示的联系渠道联系。

您的申请可能会因为一些原因被驳回。并且，若您在 $15$ 天内未跟进回复，我们会**关闭**您的 Issue，届时需要您重新申请。

## 参与项目

如果你对我们跳转页的样式不满意，欢迎你在 `public` 文件夹中提交新的样式，只需几步，即可自定义你的样式!

> 1. 涉及到的所有的图片必须为 SVG
> 2. 必须为单页 html，如有 css 可以写入 html 头，JS 库请使用外部公共 CDN
> 3. 底部包含开往备案号 和 指向 [开往偏好设置](https://www.travellings.cn/preference) 的链接
> 4. 嵌入 `https://www.travellings.cn/assets/js/go.js` 可直接实现跳转逻辑，并自动使用用户的偏好设置
> 5. 设计精美/有创意
> 6. 请一并修改 [其他页面一览](/docs/pages)，加入你的页面描述和截图
> 7. 请一并修改 **开往偏好设置** （位于 `.vitepress/theme/components/Preferences.vue` ），将你的自定义页面加入到设置菜单中（位于第 `34` 行）
> 8. 提个 Pull Request，并 @ 最近活跃的开往维护组成员

:::tip

如果你是新手，可以在原有跳转页的基础上进行修改~

:::

::: warning

如果你是以默认的 `go.html` 为基础进行修改的，请**务必先删除** `<head>` 中的以下代码：

```html
<script>
    const customPage = localStorage.getItem("t_preference_page");
    if (customPage) {
        location.href = "./" + customPage;
    }
</script>
```

以上代码用于实现从默认页跳转到用户设置的自定义页，如果页面本身就是自定义页便会造成**循环跳转**。

:::
