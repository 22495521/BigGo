<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="pt-5 pb-4">
      <h2>問與答</h2>
    </div>
    <div class="accordion pb-5" id="accordionExample" style="width: 90%">
      <div class="mb-4 accordion-border">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              如何開始上課呢?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
          >
            <div class="accordion-body">
              購買課程後，課程連結傳到您的信箱內，點擊網址就可以開始上課囉!
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 accordion-border">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              購買的課程有觀看次數或有效期限嗎?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
          >
            <div class="accordion-body">課程皆是無限次觀看，無期限。</div>
          </div>
        </div>
      </div>
      <div class="mb-4 accordion-border">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              我的孩子適合哪一門課程呢?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
          >
            <div class="accordion-body">
              課程詳情皆有附上適用程度和課程大綱，若不清楚可連絡專人為您服務。
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 accordion-border">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              購買課程後可以退費嗎?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
          >
            <div class="accordion-body">
              尚未點擊課程者，在七天內皆可聯絡客服全額退費。
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 accordion-border">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              幾歲可以開始學圍棋?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
          >
            <div class="accordion-body">
              建議年滿4歲以上的孩子，這階段正是培養孩子大腦發育最佳時刻。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>

<style>
.accordion-border {
  filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
}
</style>
