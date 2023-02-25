<template>
  <div
    id="CourseModal"
    ref="CourseModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="CourseModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="CourseModalLabel" class="modal-title">
            <span v-if="subcontorl">課程編輯</span>
            <span v-else>新增課程</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body mt-5">
          <div class="row">
            <div class="d-flex justify-content-around mb-5">
              <div style="width: 45%">
                <img :src="AlertData.data.imageUrl" class="img-fluid" alt="" />
              </div>
              <div class="mt-auto ms-1" style="width: 45%">
                <label for="fileInput" class="fs-5 mb-3">上傳圖片</label>
                <input
                  type="file"
                  id="fileInput"
                  class="form-control border-1 border border-dark"
                  ref="fileInput"
                  @change="uploadFile"
                />
              </div>
            </div>
            <div class="d-flex justify-content-around">
              <div style="width: 45%">
                <label for="category" class="form-label fs-5">課程類別</label>
                <select
                  id="category"
                  class="form-select form-select-lg mb-3 fs-6 border-1 border border-dark"
                  aria-label=".form-select-lg example"
                  v-model="AlertData.data.category"
                >
                  <option value="免費課程">免費課程</option>
                  <option value="啟蒙班">啟蒙班</option>
                  <option value="初級班">初級班</option>
                  <option value="中級班">中級班</option>
                  <option value="高級班">高級班</option>
                  <option value="段位班">段位班</option>
                </select>
              </div>
              <div style="width: 45%">
                <label for="coursename" class="form-label fs-5">課程名稱</label>
                <input
                  type="text"
                  class="form-control border-1 border border-dark"
                  id="coursename"
                  placeholder="請輸入課程名稱"
                  v-model="AlertData.data.title"
                />
              </div>
            </div>
            <div class="d-flex justify-content-around mb-3">
              <div style="width: 45%">
                <label for="courselv" class="form-label fs-5">課程級數</label>
                <input
                  type="text"
                  class="form-control border-1 border border-dark"
                  id="courselv"
                  placeholder="請輸入適用級數"
                  v-model="AlertData.data.unit"
                />
              </div>
              <div style="width: 45%"></div>
            </div>
            <div class="d-flex justify-content-around mb-3">
              <div style="width: 45%">
                <label for="oldprice" class="form-label fs-5">原價</label>
                <input
                  type="number"
                  class="form-control border-1 border border-dark"
                  id="oldprice"
                  placeholder="請輸入課程原價"
                  v-model="AlertData.data.origin_price"
                />
              </div>
              <div style="width: 45%">
                <label for="price" class="form-label fs-5">售價</label>
                <input
                  type="number"
                  class="form-control border-1 border border-dark"
                  id="price"
                  placeholder="請輸入課程售價"
                  v-model="AlertData.data.price"
                />
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-3">
            <div style="width: 95%">
              <label for="FormControlTextarea" class="form-label fs-5"
                >課程介紹</label
              >
              <textarea
                class="form-control border-1 border border-dark"
                id="FormControlTextarea"
                rows="3"
                placeholder="請輸入課程介紹"
                v-model="AlertData.data.description"
              ></textarea>
            </div>
          </div>
          <div>
            <div
              class="d-flex justify-content-center"
              style="margin-bottom: 0.5rem"
            >
              <div style="width: 90%">
                <label for="" class="fs-5">課程大綱</label>
              </div>
            </div>
            <div class="d-flex justify-content-around mb-2">
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >01.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[0]"
                />
              </div>
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >06.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[5]"
                />
              </div>
            </div>
            <div class="d-flex justify-content-around mb-2">
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >02.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[1]"
                />
              </div>
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >07.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[6]"
                />
              </div>
            </div>
            <div class="d-flex justify-content-around mb-2">
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >03.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[2]"
                />
              </div>
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >08.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[7]"
                />
              </div>
            </div>
            <div class="d-flex justify-content-around mb-2">
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >04.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[3]"
                />
              </div>
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >09.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[8]"
                />
              </div>
            </div>
            <div class="d-flex justify-content-around mb-3">
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >05.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[4]"
                />
              </div>
              <div class="input-group" style="width: 45%">
                <span
                  class="input-group-text border-end-0 border-top border-bottom border-start border-1 border-dark bg-secondary"
                  id="basic-addon1"
                  >10.</span
                >
                <input
                  type="text"
                  class="form-control border-top border-start-0 border-bottom border-end border-1 border-dark"
                  placeholder="輕輸入課程大綱"
                  v-model="AlertData.data.content[9]"
                />
              </div>
            </div>
            <div class="form-check text-center mt-1 mb-1">
              <input
                id="is_enabled"
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="AlertData.data.is_enabled"
                style="
                  float: none;
                  margin-left: 0;
                  margin-right: 8px;
                  width: 20px;
                  height: 20px;
                "
              />
              <label class="form-check-label fs-5" for="is_enabled"
                >是否啟用</label
              >
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center py-3">
          <button
            type="button"
            class="btn btn-lg btn-darklight"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn-lg btn btn-success" @click="submit">
            完成
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
export default {
  data() {
    return {
      url: "",
      path: "",
      myModal: null,
      ModalData: {},
      subcontorl: 0,
      AlertData: null,
    };
  },
  methods: {
    openModal() {
      this.myModal.show();
    },
    uploadFile() {
      const file = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", file);
      const url = `${this.url}/api/${this.path}/admin/upload`;
      this.$http
        .post(url, formData)
        .then((res) => {
          this.AlertData.data.imageUrl = res.data.imageUrl;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    isaddCourse() {
      this.subcontorl = 0;
    },
    iseditCourse() {
      this.subcontorl = 1;
    },
    submit() {
      //此為編輯
      if (this.subcontorl == 1) {
        console.log(1);
        this.$http
          .put(
            `${this.url}/api/${this.path}/admin/product/${this.AlertData.data.id}`,
            this.AlertData
          )
          .then(() => {
            this.myModal.hide();
            this.$emit("getData");
            console.log(this.AlertData);
            this.$refs.fileInput.value = null;
            this.cleartAlert();
          })
          .catch((error) => {
            alert(error.data.message);
          });
      }
      //此為新增
      if (this.subcontorl == 0) {
        console.log(0);
        this.$http
          .post(`${this.url}/api/${this.path}/admin/product`, this.AlertData)
          .then(() => {
            this.myModal.hide();
            this.cleartAlert();
            this.$refs.fileInput.value = null;
            this.$emit("getData");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    //清空彈跳視窗
    cleartAlert() {
      this.AlertData = {
        data: {
          title: null,
          category: "免費課程",
          origin_price: 0,
          price: 0,
          unit: null,
          description: null,
          content: ["", "", "", "", "", "", "", "", "", ""],
          is_enabled: 1,
          imageUrl: null,
        },
      };
    },
  },
  created() {
    this.url = import.meta.env.VITE_API;
    this.path = import.meta.env.VITE_APIPATH;
    this.cleartAlert();
  },
  mounted() {
    const myModal = new Modal(this.$refs.CourseModal);
    this.myModal = myModal;
  },
};
</script>

<style>
.form-control {
  border-radius: 2px solid black;
}
</style>
