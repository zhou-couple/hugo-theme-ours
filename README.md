# hugo-theme-ours

以前我用的博客生成软件叫 Jekyll，这个软件有很多问题，所以我换成了另一个简洁强大的软件叫 Hugo. 替换为这个软件后，无论是网站开发，还是内容管理，一切都如此轻松，以至于我认为即使没经验的人也能参与到网站制作过程中。不过因为更换了软件，所以就要重新开发，以前的东西就作废了，这是为了未来发展所必须经历的阵痛。

## Hugo 的安装

Hugo 的安装十分简单，只需要去 [github](https://github.com/gohugoio/hugo/releases) 上下载系统对应的压缩包即可。注意的是，在本主题中，我们需要下载 `extended` 版本。举个例子，目前最新的版本是 0.101.0，那么在 Windows 系统下就下载 [hugo_extended_0.101.0_Windows-64bit.zip](https://github.com/gohugoio/hugo/releases/download/v0.101.0/hugo_extended_0.101.0_Windows-64bit.zip)

下载完成后，解压会得到一个 .exe 文件。把这个文件剪切到本项目的文件夹里，就好啦！

## Hugo 生成网页

要用 Hugo 生成博客也很简单，直接双击 `build.bat` 文件，此时会弹出一个黑框，里面运行着生成博客的程序，所以不能关闭这个黑框。然后在浏览器里打开 <http://localhost:1313/>，就能预览博客页面。

是不是超级简单！

## 项目文件说明

Hugo 的项目结构与 Jekyll 不同，但总的来说，我们主要关心 `content`（内容）文件夹，这里面存放着所有东西，比如文章、图片等等。

另外 Hugo 和 Jekyll 一样，都有一个 `config.yml` 文件，里面存放网站的配置信息。

顺便说一下 `theme` 文件夹里有博客的主题。
