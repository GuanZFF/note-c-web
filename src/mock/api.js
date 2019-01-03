import http from '../component/http';
import constant from '../constant/constant';

const basePath = constant.httpUrl;

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
    return http.get(`${basePath}/commodity/getRecycleCommodityPage`, data);
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
    return http.get(`${basePath}/commodity/getRecycleCommodity`, data);
}

/**
 * 获取收集人信息
 *
 * @param collectorNo 收集人单号
 * @returns {*|Promise}
 */
export function getRecycleCollector(collectorNo) {
    const data = {
        'collectorNo': collectorNo
    };
    return http.get(`${basePath}/collector/getRecycleCollector`, data);
}

/**
 * 获取订单信息
 *
 * @param openId 微信唯一ID
 * @param pageNum
 * @param pageSize
 * @returns {*|Promise}
 */
export function orderList(openId, pageNum, pageSize = 10) {
    const data = {
        'uid': openId,
        'pageNum': pageNum,
        'pageSize': pageSize
    };
    return http.get(`${basePath}/order/getRecycleOrderPage`, data);
}

/**
 * 获取反向订单
 *
 * @param openId 微信唯一ID
 * @param pageNum 第几页
 * @param pageSize 页大小
 * @returns {*|Promise}
 */
export function reverseOrderList(openId, pageNum, pageSize = 10) {
    const data = {
        'uid': openId,
        'pageNum': pageNum,
        'pageSize': pageSize
    };
    return http.get(`${basePath}/reverse/getReverseOrderPage`, data);
}

/**
 * 生成订单
 *
 * @param uid
 * @param phone
 * @param address
 * @param remark
 * @returns {*|Promise}
 */
export function insertOrder(uid, phone, address, remark) {
    const data = {
        'uid': uid,
        'phone': phone,
        'address': address,
        'remark': remark
    };
    return http.post(`${basePath}/order/insert`, data);
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
