# hugo-theme-ours

以前我用的博客生成软件叫 Jekyll，这个软件有很多问题，所以我换成了另一个简洁强大的软件叫 Hugo. 替换为这个软件后，无论是网站开发，还是内容管理，一切都如此轻松。不过因为更换了软件，所以就要重新开发，以前的东西就作废了，这是为了未来发展所必须经历的短痛。

这个博客主题的宗旨是创建一个属于我们的虚拟空间，我们可以共同建设它。因此我希望门槛越低越好，只需要一点点的网页开发知识，就能参与到其中。因此，我采用了如下工具：

- Hugo：用来生成网页的软件
- Tailwind CSS：用来设计网页的外观
- Alpine.js：用来给网页加上一点动态

## Hugo

### Hugo 的安装

Hugo 的安装十分简单，只需要去 [github](https://github.com/gohugoio/hugo/releases) 上下载系统对应的压缩包即可。注意的是，在本主题中，我们需要下载 `extended` 版本。举个例子，目前最新的版本是 0.101.0，那么在 Windows 系统下就下载 [hugo_extended_0.101.0_Windows-64bit.zip](https://github.com/gohugoio/hugo/releases/download/v0.101.0/hugo_extended_0.101.0_Windows-64bit.zip)。下载完成后，解压会得到一个 .exe 文件。把这个文件剪切到本项目的文件夹里，就好啦！

### Hugo 生成网页

要用 Hugo 生成博客也很简单，直接双击 `build.bat` 文件，此时会弹出一个黑框，里面运行着生成博客的程序，所以不能关闭这个黑框。然后在浏览器里打开 <http://localhost:1313/>，就能预览博客页面。

浏览器的博客页面会实时刷新，也就是说你只要更新了文件，那么你就能看到新的页面，无需重复运行 `build.bat`。

### Hugo 文件说明

Hugo 的项目结构与 Jekyll 不同，但我们只需要关心下面几个东西：

- `content` 文件夹，这里面存放着所有东西，比如文章、图片等等；
- `config.yml` 文件，里面存放网站的配置信息；
- `theme` 文件夹，里有博客的主题。

### Hugo 的主题开发

Hugo 会根据主题中设定的规则，将我们所写的内容拼装成一个网页。我们开发主题就是要定义这个规则。下面是一个典型的规则：

```html
<h1>{{ .Title }}</h1>
<h2>{{ .Date }}</h2>
{{ .Content }}
```

从名字上就可以猜出，第一行放的是 Title，第二行放的是 Date，第三行放的是 Content. 至于 `<h1>`、`<h2>`，这是 HTML 中的标签，它们规定了外观，类似于 Markdown 中的 `#`、`##`.

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) 可以定义网页的外观，它也有 [中文版的网站](https://www.tailwindcss.cn/)。它用起来很方便，举个例子：

```html
<h1 class="text-lg">{{ .Title }}</h1>
```

我们引入了一个`class`，它等于 `text-lg`，从字面上理解就是 text large（大字体）。如果觉得不够大，那就换成：

```html
<h1 class="text-xl">{{ .Title }}</h1>
```

`text-xl` 就是 text extra large（加大字体）。还不够大？没事，我们还有 `text-2xl`、`text-3xl` 等等。这一部分对应文档中 [字体大小](https://www.tailwindcss.cn/docs/font-size)。

Tailwind CSS 已通过 `<script>` 得到方式引入，换言之，我们不需要安装就可以直接使用！
