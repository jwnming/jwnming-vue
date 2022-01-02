import axios from 'axios';

// 获取物品列表
const loadGoodsList = function loadGoodsList(state: any) {
    let url = '/goods/getAll';
    axios.get(url).then((resp) => {
        state.tableData = resp.data;
    });
}

// 上传商品图片
const fileUpload = function fileUpload(state: any) {
    let url = '/goods/fileUpload';
    axios.get(url).then((resp) => {
        state.tableData = resp.data;
    });
}

// 添加商品
const addGoods = function addGoods(state: any, emit: any, refGoodsForm: any, desEditor: any) {
    let url = '/goods/addGoods';
    // axios.get(url).then((resp) => {
    //     state.tableData = resp.data;
    // });
    const submitAdd = () => {
        // 富文本编辑器校验处理，通过getHTML保留文本的样式标签
        state.goodsForm.goodsDescription = desEditor.value.getText().replace(/(\r\n|\n|\r)/gm, '<br />') != '<br />'
            ? desEditor.value.getHTML() : "";  //
        refGoodsForm.value.validate((valid: any) => { // 表单校验
            // console.log(valid);
            if (valid) {
                const params = {
                    goodsName: state.goodsForm.goodsName,
                    goodsPrice: state.goodsForm.goodsPrice,
                    goodsPicture: state.goodsForm.goodsPicture,
                    goodsDescription: state.goodsForm.goodsDescription,

                }
                // 上传请求
                axios.post('/goods/addGoods', params).then((resp) => {
                    if (resp.data.data.code == 'sucess') {
                        refGoodsForm.value.resetFields();// 重置表单
                        desEditor.value.setText(""); // 富文本编辑器清空
                        emit("onCloseAddGoodsDialog", false); // 关闭添加窗口
                        // 更新分页器，刷新当前页数据
                    }
                });
            }
        })
    }
    return { submitAdd, }
}

// 商品删除
const goodsDelete = function goodsDelete(id: any) {
    let url = '/goods/goodsDelete';
    axios.delete(url, {'id': id}).then((resp) => {
        return resp.data.data.code;
    });

}

// 搜索
const search = function search(state: any) {
    let url = '/goods/search';
    axios.get(url, {'searchKey': state.searchKey}).then((resp) => {
        state.tableData = resp.data;
        state.total = 1;
    });

}

// 根据编号查询
const loadGoodsByNo = function loadGoodsByNo(state: any, desEditor: any) {
    let url = '/goods/loadGoodsByNo';
    axios.get(url).then((resp) => {
        console.log(resp);
        state.goodsForm = resp.data;
        desEditor.value.setHTML(resp.data.goodsDescription);
    });
}

// 加载菜单
const loadMenus = function loadMenus(state: any) {
    let url = '/menu/loadMenus';
    axios.get(url).then((resp) => {
        state.menus = resp.data;
    });
    // 激活菜单
    state.activePath = "'" + window.sessionStorage.getItem('menuActivePath') + "'";
    console.log(state.activePath);
    
}

// 导出给引用放调用
export default { 
    loadGoodsList, 
    fileUpload,
    addGoods,
    goodsDelete,
    search,
    loadGoodsByNo,
    loadMenus,
};