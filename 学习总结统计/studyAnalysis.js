﻿(function ($) {
    var senders = {},
    unSenders = [],
    memebers = ['粟维胜', '姚亚虎', '魏壮志', '余毓芳', '叶添兰', '张焕林', '罗伟欣', '黄惠梅', '焦红英', '陈盈盈', '冼国辉', '何永鹭', '梁益荣', '黄东涛', '梁秀芳', '杨伟胜', '张丽方', '李琳君', '黄晓敏', '曾和', '吴国良', '李永辉', '卢海生', '彭斌', '陈巍巍', '曾繁林', '王艳红', '李想', '陈树超', '黄琰', '何亮明', '崔冠玲', '肖银', '李小丽', '杜林霞', '李广明', '崔见芳', '郑振仲', '黄瑞炎', '冷桂花', '王志城', '何建文', '范燕妃', '刘锦江', '张莉', '刘美香', '卢景滔', '张绽蕾', '何邵新', '罗仁聪', '刘志', '郭龙', '黄进珠', '陈绿雄', '李宁宁', '李振', '甘竞', '陈思明', '关海明', '徐培龙', '王芳', '聂培华', '谢志弘', '郑利', '翟岩', '蒋湘英', '陈豪东', '陈刚领', '肖红伟', '徐叶荣', '吴声校', '吴年斌', '陈利叶', '卢毅东', '刘玉兰', '杨乐', '欧华山', '朱观林', '罗泗', '黄晓敏', '陈杰良', '黄顺新', '杨建武', '卢丽思', '余明松', '李叶辉', '颉朋荣', '熊巍巍', '杨功庆', '李芳芳', '韩彩燕', '麦武彬', '陈丹萍', '陈沛光', '冯规华', '欧保', '李想', '董凤雷', '林国云', '蒋冰洋', '谈力', '游诗立', '叶桂冲', '卓文静', '王文桦', '毕继津', '陈雪强', '王芳', '李兆满', '刘洋', '雷晓通', '张利明', '谷畅', '刘嘉仪', '谭洪梅', '李栋', '吴慧慧',
        '莫雨宏', '吴纯串', '蒋江波', '赵昊亮', '杨丛滨', '秦凯', '戴培任', '徐晓斌',,'何春芳', '黄杰鑫', '张朝凌', '刘远镇', '覃柳琳', '冯云霞', '许梓星', '梁秀妹', '韦金采', '王仲兵', '郭俊生'];

    getSenders();

    findUnSenders();

    displayResult(unSenders, '未发学习总结:');

    displayResult(findOverSenders(), '超时发布');


    function getMonth() {
        var title = $('title').text();
        return title.split('月')[0].substring(5)
    }

    function getSenders() {
        var m = Number(getMonth()),
        year = new Date().getFullYear(),
        date = new Date(year, m, 4);


        function compareDate(target) {
            return date < target;
        }

        $('ul.li05 li>a').each(function (i, n) {
            var title = $(n).text(),
            month = title.match(/\d+/),
            name = title.split(month)[0];
            senders[name] = { name: name, overdate: compareDate(new Date('2015-' + $(this).prev().text().substring(1, 6))) };
        });
    }

    function findUnSenders() {

        for (var i = memebers.length - 1; i >= 0; i--) {
            var member = memebers[i];
            if (!senders[member]) {
                unSenders.push(member);
            }
        }
        ;
    }

    function findOverSenders() {
        var overs = [];
        for (var sender in senders) {
            if (senders.hasOwnProperty(sender) && senders[sender].overdate) {
                overs.push(sender);
            }
        }

        return overs;
    }



    function displayResult(result, title) {

        var $ul = $('<ul></ul>'),
        inner = '';

        for (var i = result.length - 1; i >= 0; i--) {
            var item = result[i];

            inner += '<li>' + item + '</li>';

        }
        if (inner) {
            $ul.append($(inner));
            $('#txt00').prepend($ul);

            $('#txt00').prepend($('<h3></h3>').text(title));
        }

    }


})(jQuery);
// JavaScript source code
