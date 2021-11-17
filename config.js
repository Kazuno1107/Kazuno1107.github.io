window.MathJax = {
    tex: {
        tags: "ams",
        macros: {
            x: "{\\times}",
            bm: ["{\\boldsymbol{#1}}", 1],
            dd: ["{\\frac{\\partial #1}{\\partial #2}}", 2]
        }
    },
    chtml: {
        scale: 1.0, // 数式環境中の文字スケール
        mtextInheritFont: true
    }
};