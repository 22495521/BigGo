<template>
  <div class="d-flex justify-content-center stepCircle-list">
    <div class="justify-content-center d-flex flex-column">
      <div class="stepCircle">1</div>
      <p class="text-center stepCircle-font">確認訂單</p>
    </div>
    <div class="justify-content-center d-flex flex-column">
      <div class="stepCircle">2</div>
      <p class="text-center stepCircle-font">填寫資料</p>
    </div>
    <div class="justify-content-center d-flex flex-column">
      <div class="stepCircle">3</div>
      <p class="text-center stepCircle-font">完成訂單</p>
    </div>
  </div>
</template>

<style>
.stepCircle-font {
  font-size: 32px;
  font-weight: 500;
  white-space: nowrap;
}
.stepCircle-list > div {
  margin: 55px;
}
.stepCircle {
  width: 100px;
  height: 100px;
  background-color: #ffdfa0;
  border-radius: 1000px;
  text-align: center;
  line-height: 100px;
  font-size: 43px;
  font-weight: 700;
  margin: auto;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .stepCircle-font {
    font-size: 17px;
  }
  .stepCircle-list > div {
    margin: 35px;
  }
  .stepCircle {
    width: 54px;
    height: 54px;
    line-height: 54px;
    font-size: 23px;
    margin-bottom: 12px;
  }
}
@media (max-width: 425px) {
  .stepCircle-font {
    font-size: 10px;
  }
  .stepCircle-list > div {
    margin: 20px;
  }
  .stepCircle {
    font-size: 18px;
  }
}
</style>
