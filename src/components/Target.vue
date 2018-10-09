<template>
    <div class="target">
        <div class="row">
            <div class="col-md-1">
                <button type="button" @click.prevent="addGoodPoint" class="btn btn-success">
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                </button>
            </div>
            <div class="col-md-9">
                <label>Target: {{name}}, Point : {{targetPoint}}</label>
            </div>
        </div>

        <div class="progress-main">
            <div class="good-progress">
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar"
                         :style="{ 'width': goodPercent + '%' }" aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <span class="good-point">{{goodPoint}} Good</span>
                </div>
            </div>
            <div class="bad-progress">
                <div class="progress progress-right">
                    <div class="progress-bar bg-danger"
                         role="progressbar" aria-valuenow="50" aria-valuemin="0"
                         aria-valuemax="100" :style="{ 'width': badPercent + '%'}">
                    </div>
                    <span class="bad-point">{{badPoint}} Bad is auto calculate</span>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
  import { TOTAL_WEEK, TOTAL_MONTH, TOTAL_YEAR } from '../constant'
  import { mapState } from 'vuex'

  export default {
    name: "target",
    props: [
      'name',
      'point',
    ],
    data () {
      return {
        goodPoint: 0,
        badPoint: 0,
        targetPoint: 0,
      }
    },
    mounted () {
      switch (this.typeTarget) {
        case 'week':
          this.targetPoint = TOTAL_WEEK
          break
        case 'month':
          this.targetPoint = TOTAL_MONTH
          break
        case 'year':
          this.targetPoint = TOTAL_YEAR
          break
        default:
          this.targetPoint = TOTAL_MONTH
      }
    },
    methods: {
      addGoodPoint () {
        this.goodPoint = this.goodPoint < this.targetPoint ? this.goodPoint + 1 : this.goodPoint
        this.badPoint = this.badPoint > 0 ? this.badPoint - 1 : 0
      },
      addBadPoint () {
        this.goodPoint = this.goodPoint > 0 ? this.goodPoint - 1 : 0
        this.badPoint = this.badPoint < this.targetPoint ? this.badPoint + 1 : this.targetPoint
      }
    },
    computed: {
      ...mapState([
        'typeTarget'
      ]),
      goodPercent () {
        return this.goodPoint / this.targetPoint * 100
      },
      badPercent () {
        return this.badPoint / this.targetPoint * 100
      },
    },
  }
</script>
<style>
    .progress-right {
        transform: rotate(180deg);
    }

    .bad-point {
        transform: rotate(180deg);
    }

    .good-point {
    }

    .good-point, .bad-point {
        color: black;
        margin-left: 10px;
        position: absolute;
    }

    .good-progress, .bad-progress {
        width: 48%;
        display: inline-block;
    }

    .target .btn-success {
        padding: 1px 16px;
        margin-right: 20px;
    }
    .target .btn-bad-point {
        padding: 1px 16px;
        margin-left: 20px;
    }

    .good-progress {
        float: left;
    }

    .bad-progress {
        float: right;
    }

    .target {
        margin-bottom: 30px;
    }
    .progress {
        line-height: 1rem;
    }
    .target .row {
        text-align: left;
    }
</style>
