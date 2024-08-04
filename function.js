//曲谱的清单放在https://huangspro.github.io/musicscore.github.io/scores.txt文件中
//排列函数,将文件名按照末尾数字排列
function rank(arr) {
    if (arr.length === 0) {
        return [];
    }

    function extractNumber(filename) {
        const match = filename.split('.').shift().match(/(\d+)$/);
        return match ? parseInt(match[0], 10) : Infinity;
    }
    arr.sort((a, b) => {
        const numA = extractNumber(a);
        const numB = extractNumber(b);
        return numA - numB;
    });
    return arr;
}
//生成曲谱阅读器,用于生成img标签,该函数输入一个url数组和项数,生成一张图片
function makeimg(list, item) {
    $("#ooo").remove();
    $("#kkk").remove();
    $("#pagenumber").append(`<p id="kkk">page ${item+1}/${list.length}</p>`)
    $("#img").append(`<img id="ooo" src="${list[item]}" style="width:100vw"></img>`);
}
//翻到下一页或上一页
function lastpage() {
    if (page != 0) {
        page--;
        makeimg(tem, page);
    }
}

function nextpage() {
    if (page != tem.length - 1) {
        page++;
        makeimg(tem, page);
    }
}