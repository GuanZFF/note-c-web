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
                commodityPictureUrl: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg?Expires=1534675440&OSSAccessKeyId=TMP.AQFgYeaVzs1R5fxNwsp-gxaOVExdOQj2a6XX7lpk--psIElHpE08HcLal8TjMC4CFQCBQkTwxQ5GxbHPEgJi_gF1NN00hgIVALxr34O4f-Jr6hdx-woB9VxmDMd6&Signature=2z152IUTc2bFsjo3hpLO9DZA%2FM4%3D',
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
                commodityPictureUrl: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg?Expires=1534675380&OSSAccessKeyId=TMP.AQFgYeaVzs1R5fxNwsp-gxaOVExdOQj2a6XX7lpk--psIElHpE08HcLal8TjMC4CFQCBQkTwxQ5GxbHPEgJi_gF1NN00hgIVALxr34O4f-Jr6hdx-woB9VxmDMd6&Signature=l3dG66nE4ZCMvy%2FGF5Yym6eo7uA%3D',
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
 * @returns {Promise<{code: number, msg: string, data: {commodityNo: string, commodityName: string, commodityPictureUrl: string, recycleTime: string, expectSellPrice: string}}>}
 */
export function getcommodtiyDetail(commodityNo) {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            commodityNo: 'SP0010010001',
            commodityName: '液晶电视机27寸',
            commodityPictureUrl: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg?Expires=1534675380&OSSAccessKeyId=TMP.AQFgYeaVzs1R5fxNwsp-gxaOVExdOQj2a6XX7lpk--psIElHpE08HcLal8TjMC4CFQCBQkTwxQ5GxbHPEgJi_gF1NN00hgIVALxr34O4f-Jr6hdx-woB9VxmDMd6&Signature=l3dG66nE4ZCMvy%2FGF5Yym6eo7uA%3D',
            recycleTime: '2018-08-15 13:58:43',
            expectSellPrice: '23.5',
        }
    });
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
