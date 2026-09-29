# 薛留堂个人主页

这是可以直接上传 GitHub Pages 的静态网站。无需安装程序、无需编译，也无需购买域名。

## 发布步骤

1. 在 GitHub 新建公开仓库，名称为 `你的用户名.github.io`。
2. 将本文件包解压。上传本目录里的所有文件和文件夹，让 `index.html` 位于仓库最外层。不要直接上传 ZIP，也不要多套一层目录。
3. 进入仓库 Settings → Pages，Source 选择 Deploy from a branch，Branch 选择 main，文件夹选择 /(root)，点击 Save。
4. 等发布完成后，在 Pages 设置页点击网站地址。

## 页面与编辑方法

- `index.html`：主页、研究方向、教学、联系方式。
- `Papers.html`：35 项论文与预印本，保留原编号；注意文件名 P 大写。
- `CV.html`：简历页面与下载入口。
- `assets/style.css`：颜色、字号和布局。
- `assets/site.js`：优先下载后来上传的本地 PDF；无本地 PDF 时打开现有外部链接。
- `assets/xuelt.jpg`：来自北京师范大学教师介绍页的个人照片。
- `publications.json`：论文信息的备份。页面本身是静态 HTML，直接修改此 JSON 不会自动更新网页。
- `FILES_TO_UPLOAD.csv`：全部 PDF 应使用的文件名，及对应公开外部链接。

## 上传简历和论文后直接下载

将最新简历放到 `files/xue_cv.pdf`。
将论文放到 `papers/`，使用 FILES_TO_UPLOAD.csv 中列出的原文件名。
在 GitHub Pages 上，已有的 PDF 链接会自动优先下载这些本地文件，无需逐项修改网页。

当前附件只有 HTML，没有 PDF 文件。旧主页 math0.bnu.edu.cn 的文件无法在本次制作环境中取得。因此，此版本先使用你在北京师范大学教师介绍页公开的百度网盘链接；有 arXiv 的论文直接提供 arXiv PDF。百度链接可能要求登录，或受到网盘自身下载限制。上传本地 PDF 后即可从主页直接下载。
本地双击 index.html 可以查看页面；自动检测本地 PDF 的功能需要在 HTTP 服务上使用，例如 GitHub Pages。若不想使用脚本，也可将网页中对应 a 标签的 href 手动改为本地文件路径。

## 内容说明

论文作者、顺序、题名与发表信息以你上传的 Papers.html 为主，未自行更新论文录用状态。课程保留原文件的 2025 年 9 月至 2026 年 1 月安排，不代表当前学期。
教授职称、研究介绍与照片核对自北京师范大学教师介绍页：
https://math.bnu.edu.cn/jzg/szdw/xy/715f042432404a1d8bb5d728465e90d0.htm
布局参考 https://shunlinshen.github.io/ 的导航与侧栏组织，代码独立编写。
当前交付的是完整上传文件包，尚未发布到你的 GitHub 账号。
