// 防抖全局计时器
let TT = null; // 用来控制事件的触发

// 防抖函数: fn -> 逻辑, time -> 防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT); // 如果有正在运行的计时器，先清除
    TT = setTimeout(fn, time); // 设置新的计时器
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "哎嘿！复制成功🍬",
                    message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        });
    }, 300); // 300ms 的防抖时间
});
