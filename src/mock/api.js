import http from '../component/http';

/**
 * 获取回收的商品列表信息
 *
 * @returns {Promise<{code: number, msg: string, data: {count: number, hasNextPage: boolean, pageNum: number, list: *[]}}>}
 */
export function getRecycleCommodity(pageNum, pageSize = 10) {
    const data = {
        'pageNum': pageNum,
        'pageSize': pageSize
    };
    return http.get('http://localhost:8083/web/commodity/getRecycleCommodityPage', data)
}

/**
 * 商品详情数据
 *
 * @param commodityNo 商品编号
 * @returns {Promise<{code: number, msg: string, data: {commodityNo: string, commodityName: string, commodityPicture: string, recycleTime: string, expectSellPrice: string}}>}
 */
export function getCommodityDetail(commodityNo) {
    const commodityDetail = {
        code: 200,
        msg: '',
        data: {
            commodityNo: 'SP0010010001',
            commodityName: '液晶电视机27寸',
            commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
            recycleTime: '2018-08-15 13:58:43',
            expectSellPrice: '23.5',
            imgUrl: [
                'http://static.bootcss.com/www/assets/img/opencdn.png',
                'http://static.bootcss.com/www/assets/img/gulpjs.png',
                'http://static.bootcss.com/www/assets/img/flat-ui.png',
            ]
        }
    };
    return new Promise((resolve) => {
        resolve(commodityDetail);
    })
}

/**
 * 获取商品收集人信息列表
 */
export function getCommodityCollector() {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            count: 100,
            hasNextPage: 1,
            pageNum: 1,
            list: [{
                id: 1,
                collectorNo: 'FPHS0010001',
                status: 1,
                statusDesc: '存在',
                username: 'zhenfeng.guan',
                phone: '18255408516',
                sex: 1,
                sexDesc: '男',
                address: '安徽省阜阳市太和县坟台镇双中乡前冯自然村关楼100号',
                avatar: ''
            }, {
                id: 2,
                collectorNo: 'FPHS0010001',
                status: 2,
                statusDesc: '不存在',
                username: 'zhenfeng.guan',
                phone: '18255408516',
                sex: 2,
                sexDesc: '女',
                address: '安徽省阜阳市太和县坟台镇双中乡前冯自然村关楼100号',
                avatar: ''
            }]
        }
    })
}


function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}