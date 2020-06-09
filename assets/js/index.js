/*
  1. 将需要翻译的DOM节点加上 data-i18n="key"
  2. 在 en.json 和 zh-CN.json 里定义 key-value
  3. DOM节点不支持嵌套,
      例如 <p data-i18n="abc">abc<span>def</span></p>
      应写作 <p><span data-i18n="abc">abc</span><span>def</span></p>
  4. 属性翻译 在DOM节点添加 data-i18n 并在需翻译的属性名前添加 "data-i18n-"
      <input data-i18n data-i18n-placeholder="placeholder">
*/
let currentLang = 'zh-CN';
let langs = {};

// 获取当前语言
function getDefaultLang() {
    const language = localStorage.getItem('language') || navigator.language;
    return language.slice(0, 2) === 'en' ? 'en' : 'zh-CN';
}

// 设置当前语言
async function setLang(lang) {
    if (!langs[lang]) {
        const res = await fetch(`./${lang}.json`);
        langs[lang] = await res.json();
    }
    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const keyName = node.getAttribute('data-i18n');
        const translation = langs[lang][keyName];
        // 设置文本翻译
        if (translation) {
            node.textContent = translation;
        }
        // 设置属性翻译
        node.getAttributeNames().forEach((name) => {
            if (name.startsWith('data-i18n-')) {
                const attr = name.slice(10);
                const keyName = node.getAttribute(name);
                const translation = langs[lang][keyName];
                node.setAttribute(attr, translation);
            }
        });
    });
    currentLang = lang;
    localStorage.setItem('language', lang);
    if (lang === 'zh-CN') lang = "zh"
    localStorage.setItem('lang', lang);
}

// 切换语言
function switchLang() {
    const lang = currentLang === 'en' ? 'zh-CN' : 'en';
    setLang(lang);
}

// 初始化语言
window.onload = function initLang() {
    const defaultLang = getDefaultLang();
    setLang(defaultLang);
};
