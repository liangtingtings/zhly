<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <!--el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item-->
      <el-form-item label="新建按钮">
        <el-input v-model="form.btnInfo" type="textarea" :rows="13" />
      </el-form-item>


      <el-form-item label="添加字段">
        <el-input v-model="form.field" type="textarea" :rows="4" />
      </el-form-item>

      <el-form-item label="添加页面">
        <el-input v-model="form.page" type="textarea" :rows="9" />
      </el-form-item>




      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>






      
    </el-form>
  </div>
</template>

<script>
import { addBtn } from '@/api/fwq'
export default {
  data() {
    return {
      form: {
        page:`{
            "columnsCount": 2,
            "createBy": 1,
            "enableFlag": true,
            "pageName": "用户列表页面",
            "pageRenderer": "list  |  form",
            "pageTitle": "user-list",
            "remark": ""
        }`,
        field:`{
                  "fieldName": "用户名",
                  "resourceId": "xxxxx"
                }`,
        btnInfo:`{
                  "btnAction": "patch",
                  "btnIcon": "iconfont icon-RectangleCopy1",
                  "btnKey": "save",
                  "btnName": "自定义树",
                  "btnPopup": "",
                  "btnPosition": "standalone",
                  "btnUrl": "/orgMdmCustomizedTree/updateTreeList",
                  "createBy": 1,
                  "enableFlag": true,
                  "remark": 1,
                  "sort": 1
                }`,
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      let data = JSON.parse(this.form.btnInfo);
      addBtn(data).then(response => {
       
      }).catch(error => {
        reject(error)
      })
      //this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

