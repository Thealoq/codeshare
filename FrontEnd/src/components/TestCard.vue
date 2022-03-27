<template lang="">
    <div class="card">
        <div class="icon">
            <slot></slot>
        </div>
        <div class="body">
          <h3>{{displayedAmount}}</h3>
          <h5>{{title}}</h5>
        </div>
      </div>
</template>
<script>
export default {
  name: "CodeCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    startAmount: {
      type: Number,
      default: 0,
    },
    endAmount: {
      type: Number,
      default: 0,
      required: true,
    },
    duration: {
      type: Number,
      default: 3,
      validator: (duration) => duration >= 1,
    },
  },
  data() {
    return {
      timestamp: 0,
      startTimestamp: 0,
      currentAmount: 0,
      currentStartAmount: 0,
      currentDuration: 0,
      paused: false,
      remaining: 0,
      animationFrame: 0,
      decimalSeparator: "",
      separator: ".",
    };
  },
  computed: {
    isCountingUp() {
      return this.endAmount > this.startAmount;
    },
    displayedAmount() {
      const regex = /(\d+)(\d{3})/;
      let numberString = this.currentAmount.toFixed(this.decimals);
      numberString += "";
      const numberArray = numberString.split(".");
      let numbers = numberArray[0];
      const decimals =
          numberArray.length > 1 ? this.decimalSeparator + numberArray[1] : "";
      const isNumber = !isNaN(parseFloat(this.separator));
      if (this.separator && !isNumber) {
        while (regex.test(numbers))
          numbers = numbers.replace(regex, "$1" + this.separator + "$2");
      }
      return numbers + decimals;
    },
  },
  mounted() {
    this.currentAmount = this.startAmount;
    this.currentStartAmount = this.startAmount;
    this.currentDuration = this.duration * 1000;
    this.remaining = this.duration * 1000;
    if (this.autoinit) this.start();
    else this.paused = true;
    this.start()
  },

  methods: {
    start() {
      this.cancelAnimation();
      this.currentStartAmount = this.startAmount;
      this.startTimestamp = null;
      this.currentDuration = this.duration * 1000;
      this.paused = false;
      this.animationFrame = window.requestAnimationFrame(this.counting);
    },
    pause() {
      if (this.paused) return;
      this.cancelAnimation();
      this.paused = true;
    },
    resume() {
      if (!this.paused) return;
      this.startTimestamp = null;
      this.currentDuration = +this.remaining;
      this.currentStartAmount = +this.currentAmount;
      this.animationFrame = window.requestAnimationFrame(this.counting);
      this.paused = false;
    },
    reset() {
      this.paused = false;
      this.startTimestamp = null;
      this.cancelAnimation();
      this.currentAmount = this.startAmount;
      if (this.autoinit) this.start();
      else this.paused = true;
    },
    counting(timestamp) {
      this.timestamp = timestamp;
      if (!this.startTimestamp) this.startTimestamp = timestamp;
      const progress = timestamp - this.startTimestamp;
      this.remaining = this.currentDuration - progress;
      if (!this.isCountingUp) {
        this.currentAmount =
            this.currentStartAmount -
            (this.currentStartAmount - this.endAmount) *
            (progress / this.currentDuration);
        this.currentAmount =
            this.currentAmount < this.endAmount
                ? this.endAmount
                : this.currentAmount;
      } else {
        this.currentAmount =
            this.currentStartAmount +
            (this.endAmount - this.currentStartAmount) *
            (progress / this.currentDuration);
        this.currentAmount =
            this.currentAmount > this.endAmount
                ? this.endAmount
                : this.currentAmount;
      }
      if (progress < this.currentDuration)
        this.animationFrame = window.requestAnimationFrame(this.counting);
      else this.$emit("finished");
    },
    cancelAnimation() {
      if (this.animationFrame) window.cancelAnimationFrame(this.animationFrame);
    },
  },
};
</script>
