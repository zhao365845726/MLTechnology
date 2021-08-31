var logDebug = true

//输出js日志
function log(title, value, type, isDebugger = false) {
    var url = window.location.href;
    if (url.indexOf('htlx') > -1 || url.indexOf('ccfei') > -1) {
        logDebug = false;
    }
    if (logDebug) {
        if (type == 1) {
            //字符串
            console.log(`${title}----${value}`)
        } else if(type == 2) {
            //对象
            console.log(`${title}----${JSON.stringify(value)}`)
        }

        if (isDebugger) {
            debugger;
        }
    }
}

//获取url参数
function getQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

////格式化Html
//function setViewHtmlFormat(value) {
//    return value.replace(/<[^>]+>/gim, '').replace(/\[(\w+)[^\]]*](.*?)\[\/\1]/g, '$2 ');
//}

//建设中
function construction(that) {
    that.$notify({
        title: "Success",
        message: '正在建设中',
        type: "success",
        duration: 2000
    });
}

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}

//https://www.cnblogs.com/aaronthon/p/10640767.html

function getTime() {
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分

    var clock = year;

    if(month < 10)
        clock += "0";

    clock += month;

    if(day < 10)
        clock += "0";

    clock += day;

    if(hh < 10)
        clock += "0";

    clock += hh;
    if (mm < 10) clock += '0';
    clock += mm;

    clock += randomNum(1000,9999);
    return(clock);
}

function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

function convertTime(date) {
    var json_date = new Date(date).toJSON();
    return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}

function formatVar(val) {
    let text;
    text = val.replace(/&quot;/gi, "\"");
    return text;
}

/**
 * 关闭浏览器兼容安卓及苹果
 */
function CloseBrowser() {
    //判断谷歌火狐安卓和linux关闭当前页面及浏览器
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1) {
        WeixinJSBridge.call('closeWindow');
    } else {
        //针对苹果不能关闭当前页面
        setTimeout(function () {
            WeixinJSBridge.invoke("closeWindow", {}, function (e) { })
        }, 100)
    }
}

//格式化富文本编辑器html
function cleanwordformat() {
    var text = '';
    var oEditor;
    if (arguments.length == 0) {
        oEditor = FCKeditorAPI.GetInstance("ArticleContent")
        text = oEditor.GetXHTML();
    } else {
        oEditor = CKEDITOR.instances[arguments[0]];
        text = oEditor.getData();
    }

    text = text.replace(/<FONT[^>]*>/gi, "");
    text = text.replace(/<\/FONT>/gi, "");
    text = text.replace(/<U>/gi, "");
    text = text.replace(/<\/U>/gi, "");
    text = text.replace(/<H[^>]*>/gi, "");
    text = text.replace(/<\/H[^>]*>/gi, "");

    //  Change  these  tags.
    //text=text.replace(/<B[^>]*>/gi,"&bold");
    //text=text.replace(/<\/B[^>]*>/gi,"&cbold");
    text = text.replace(/<B>/gi, "&bold");
    text = text.replace(/<\/B>/gi, "&cbold");
    text = text.replace(/<STRONG[^>]*>/gi, "&bold");
    text = text.replace(/<\/STRONG[^>]*>/gi, "&cbold");

    text = text.replace(/<I>/gi, "&ital");
    text = text.replace(/<\/I[^>]*>/gi, "&cital");
    text = text.replace(/<EM[^>]*>/gi, "&ital");
    text = text.replace(/<\/EM[^>]*>/gi, "&cital");

    text = text.replace(/<UL[^>]*>/gi, "&ultag");
    text = text.replace(/<LI[^>]*>/gi, "&litag");
    text = text.replace(/<OL[^>]*>/gi, "&oltag");
    text = text.replace(/<\/OL>/gi, "&olctag");
    text = text.replace(/<\/LI>/gi, "&lictag");
    text = text.replace(/<\/UL>/gi, "&ulctag");

    text = text.replace(/<P[^>]*align=center*>/gi, "<p align=center>");
    //text=text.replace(/<P[^>]*>/gi,"&parag");
    text = text.replace(/<\/P>/gi, "");

    /*
    text=text.replace(/?gi,'\"');
    text=text.replace(/?gi,'\"');
    text=text.replace(/?gi,'\"');
    text=text.replace(/mailto:/gi,'\"');
    text=text.replace(/?g,"&Auml;");
    text=text.replace(/?g,"&Ouml;");
    text=text.replace(/?g,"&Uuml;");
    text=text.replace(/?g,"&auml;");
    text=text.replace(/?g,"&ouml;");
    text=text.replace(/?g,"&uuml;");
    text=text.replace(/?gi,"&szlig;"); 
    */

    text = text.replace(/&lt;[^>]&gt*;/gi, "");
    text = text.replace(/&lt;\/[^>]&gt*;/gi, "  ");
    text = text.replace(/<o:[^>]*>/gi, "");
    text = text.replace(/<\/o:[^>]*>/gi, "");
    text = text.replace(/<\?xml:[^>]*>/gi, "");
    text = text.replace(/<\/?st[^>]*>/gi, "");
    text = text.replace(/<[^>]*</gi, "<");
    text = text.replace(/<SPAN[^>]*>/gi, "");
    text = text.replace(/<SPAN[^class]*>/gi, "");
    //text=text.replace(/<SPAN[^style]*>/gi,"");
    text = text.replace(/<\/SPAN>/gi, "");
    //text=text.replace(/<\/A>/gi,"");

    //  Clear  the  inner  parts  of  other  tags.
    text = text.replace(/style=[^>]*"/g, '  ');
    text = text.replace(/style=[^>]*'/g, "  ");
    text = text.replace(/style=[^>]*>/g, ">");
    text = text.replace(/lang=[^>]*>/g, ">");
    text = text.replace(/name=[^>]*  /g, "");
    text = text.replace(/name=[^>]*>/g, ">");
    text = text.replace(/<A[^>]*>/g, "");

    //text=text.replace(/<p[^>]*>/gi,"<p>");


    //  Put  the  tags  back
    text = text.replace(/&bold/g, "<B>");
    text = text.replace(/&cbold/g, "</B>");

    text = text.replace(/&ital/g, "<EM>");
    text = text.replace(/&cital/g, "</EM>");

    text = text.replace(/&ultag/g, "<UL>");
    text = text.replace(/&litag/g, "<LI>");
    text = text.replace(/&oltag/g, "<OL>");
    text = text.replace(/&olctag/g, "<\/OL>");
    text = text.replace(/&lictag/g, "<\/LI>");
    text = text.replace(/&ulctag/g, "<\/UL>");

    text = text.replace(/vAlign=bottom/g, "");
    text = text.replace(/noWrap/g, "");
    text = text.replace(/border=0/g, "border=1");
    text = text.replace(/class=MsoNormalTable/g, "");
    text = text.replace(/<B><\/B>/gi, '');
    text = text.replace(/<DIV><\/DIV>/gi, '');

    if (arguments.length == 0)
        oEditor.SetHTML(text);
    else
        oEditor.setData(text);
};

//格式化富文本编辑器html
function cleanHtmlFormat(text) {
    text = text.replace(/<FONT[^>]*>/gi, "");
    text = text.replace(/<\/FONT>/gi, "");
    text = text.replace(/<U>/gi, "");
    text = text.replace(/<\/U>/gi, "");
    text = text.replace(/<H[^>]*>/gi, "");
    text = text.replace(/<\/H[^>]*>/gi, "");

    //  Change  these  tags.
    //text=text.replace(/<B[^>]*>/gi,"&bold");
    //text=text.replace(/<\/B[^>]*>/gi,"&cbold");
    text = text.replace(/<B>/gi, "&bold");
    text = text.replace(/<\/B>/gi, "&cbold");
    text = text.replace(/<STRONG[^>]*>/gi, "&bold");
    text = text.replace(/<\/STRONG[^>]*>/gi, "&cbold");

    text = text.replace(/<I>/gi, "&ital");
    text = text.replace(/<\/I[^>]*>/gi, "&cital");
    text = text.replace(/<EM[^>]*>/gi, "&ital");
    text = text.replace(/<\/EM[^>]*>/gi, "&cital");

    text = text.replace(/<UL[^>]*>/gi, "&ultag");
    text = text.replace(/<LI[^>]*>/gi, "&litag");
    text = text.replace(/<OL[^>]*>/gi, "&oltag");
    text = text.replace(/<\/OL>/gi, "&olctag");
    text = text.replace(/<\/LI>/gi, "&lictag");
    text = text.replace(/<\/UL>/gi, "&ulctag");

    text = text.replace(/<P[^>]*align=center*>/gi, "<p align=center>");
    //text=text.replace(/<P[^>]*>/gi,"&parag");
    text = text.replace(/<\/P>/gi, "");

    /*
    text=text.replace(/?gi,'\"');
    text=text.replace(/?gi,'\"');
    text=text.replace(/?gi,'\"');
    text=text.replace(/mailto:/gi,'\"');
    text=text.replace(/?g,"&Auml;");
    text=text.replace(/?g,"&Ouml;");
    text=text.replace(/?g,"&Uuml;");
    text=text.replace(/?g,"&auml;");
    text=text.replace(/?g,"&ouml;");
    text=text.replace(/?g,"&uuml;");
    text=text.replace(/?gi,"&szlig;"); 
    */

    text = text.replace(/&lt;[^>]&gt*;/gi, "");
    text = text.replace(/&lt;\/[^>]&gt*;/gi, "  ");
    text = text.replace(/<o:[^>]*>/gi, "");
    text = text.replace(/<\/o:[^>]*>/gi, "");
    text = text.replace(/<\?xml:[^>]*>/gi, "");
    text = text.replace(/<\/?st[^>]*>/gi, "");
    text = text.replace(/<[^>]*</gi, "<");
    text = text.replace(/<SPAN[^>]*>/gi, "");
    text = text.replace(/<SPAN[^class]*>/gi, "");
    //text=text.replace(/<SPAN[^style]*>/gi,"");
    text = text.replace(/<\/SPAN>/gi, "");
    //text=text.replace(/<\/A>/gi,"");

    //  Clear  the  inner  parts  of  other  tags.
    text = text.replace(/style=[^>]*"/g, '  ');
    text = text.replace(/style=[^>]*'/g, "  ");
    text = text.replace(/style=[^>]*>/g, ">");
    text = text.replace(/lang=[^>]*>/g, ">");
    text = text.replace(/name=[^>]*  /g, "");
    text = text.replace(/name=[^>]*>/g, ">");
    text = text.replace(/<A[^>]*>/g, "");

    //text=text.replace(/<p[^>]*>/gi,"<p>");


    //  Put  the  tags  back
    text = text.replace(/&bold/g, "<B>");
    text = text.replace(/&cbold/g, "</B>");

    text = text.replace(/&ital/g, "<EM>");
    text = text.replace(/&cital/g, "</EM>");

    text = text.replace(/&ultag/g, "<UL>");
    text = text.replace(/&litag/g, "<LI>");
    text = text.replace(/&oltag/g, "<OL>");
    text = text.replace(/&olctag/g, "<\/OL>");
    text = text.replace(/&lictag/g, "<\/LI>");
    text = text.replace(/&ulctag/g, "<\/UL>");

    text = text.replace(/vAlign=bottom/g, "");
    text = text.replace(/noWrap/g, "");
    text = text.replace(/border=0/g, "border=1");
    text = text.replace(/class=MsoNormalTable/g, "");
    text = text.replace(/<B><\/B>/gi, '');
    text = text.replace(/<DIV><\/DIV>/gi, '');
    return text;
};
