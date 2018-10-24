import http from '../component/http';

// const basePath = 'http://www.gzhenfeng.cn:8093';
const basePath = 'http://localhost:8083';

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
    return http.get(`${basePath}/web/commodity/getRecycleCommodityPage`, data);
}

/**
 * 商品详情数据
 *
 * @param commodityNo 商品编号
 * @returns {Promise<{code: number, msg: string, data: {commodityNo: string, commodityName: string, commodityPicture: string, recycleTime: string, expectSellPrice: string}}>}
 */
export function getCommodityDetail(commodityNo) {
    const data = {
        'commodityNo': commodityNo
    };
    return http.get(`${basePath}/web/commodity/getRecycleCommodity`, data);
}

export function getRecycleCollector(collectorNo) {
    const data = {
        'collectorNo': collectorNo
    };
    return http.get(`${basePath}/web/collector/getRecycleCollector`, data);
}

/**
 * 获取商品收集人信息列表
 */
export function getCollectorDetail(collectorNo) {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            id: 1,
            collectorNo: 'FPHS0010001',
            status: 1,
            statusDesc: '存在',
            username: 'zhenfeng.guan',
            phone: '18255408516',
            wechatNo: '123232',
            sex: 1,
            sexDesc: '男',
            address: '安徽省阜阳市太和县坟台镇双中乡前冯自然村关楼100号',
            avatar: ''
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