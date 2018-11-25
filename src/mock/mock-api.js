/**
 * 获取回收的商品列表信息
 *
 * @returns {Promise<{code: number, msg: string, data: {count: number, hasNextPage: boolean, pageNum: number, list: *[]}}>}
 */
export function getRecycleCommodity() {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            count: 100,
            hasNextPage: true,
            pageNum: 1,
            list: [{
                id: 1,
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 2,
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 3,
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 4,
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 5,
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 6,
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 7,
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 8,
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }]
        }
    });
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
                'https://recycle-thing.oss-cn-hangzhou.aliyuncs.com/RCI1538314414865LF.jpeg',
                'https://recycle-thing.oss-cn-hangzhou.aliyuncs.com/RCI1540226780829YX.jpeg',
                'https://recycle-thing.oss-cn-hangzhou.aliyuncs.com/RCI1538312157273BT.jpeg',
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

export function orderList(openId) {
    console.log(openId);
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            count: 100,
            hasNextPage: true,
            pageNum: 1,
            list: [{
                id: 1,
                orderNo: 'FPHS0010001',
                commodityNo: 'FPHS0010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                orderTime: '2018-08-15 13:58:43',
                stateDesc: '订单未完成',
                state: 1
            }, {
                id: 2,
                orderNo: 'FPHS0010001',
                commodityNo: 'FPHS0010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                orderTime: '2018-08-15 13:58:43',
                stateDesc: '订单完成',
                state: 2
            }]
        }
    })
}

/**
 * 获取商品收集人信息列表
 */
export function getCollectorDetail(collectorNo) {
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
                username: 'test',
                phone: '12345678900',
                sex: 1,
                sexDesc: '男',
                address: 'test',
                avatar: ''
            }, {
                id: 2,
                collectorNo: 'FPHS0010001',
                status: 2,
                statusDesc: '不存在',
                username: 'test.test',
                phone: '12345678900',
                sex: 2,
                sexDesc: '女',
                address: 'test',
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