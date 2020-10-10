<template>

  <div>
    <NavBar/>
        <main class="container1">
                <!-- Left Column  -->
                <div class="left-column">
                    <!--This will be replaced with the Shop photo-->
                    <img class="active" src="assets/image/bud-live.webp">
                </div>

                <!--Middle Column-->
                <div class="middle-column">

                    <!-- Product Description -->

                   <div class="product-description"> <!-- v-bind:key="arr_.id" -->
                        <h1>Shop Name: {{arr.store_name}}</h1>
                        <h3>Rating: </h3>
                        <div class="rate">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label for="star1" title="text">1 star</label>
                        </div>
                        <!-- <span class="fa fa-star checked"></span> -->
                        <!-- <span class="fa fa-star checked"></span> -->
                        <!-- <span class="fa fa-star checked"></span> -->
                        <!-- <span class="fa fa-star"></span> -->
                        <!-- <span class="fa fa-star"></span></h3> -->
                        <h4>Earbuds|Phones|Tablets|Watches|Mobile Accessories and More.</h4>
                        <p>Shop Descriptions</p>
                        <p>We’re here online and offering services like in-store shopping and safe no-touch curbside pickup and repairs at select locations. Please visit each store page for more info or contact us here for support: Samsung Care, Facebook
                            Messenger, Twitter or 1-800-SAMSUNG.</p>
                    </div>
                </div>

                <!--Right Column-->
                <div class="right-column">
                    <h2>Direct Me!</h2>
                    <img src="assets/image/map.png">
                    <h3>Store Address: {{ arr.location }}</h3>
                </div>

            </main>
  </div>
</template>

<script>
import Service from "../Service";
import NavBar from"./NavBar";

export default {
  data() {
    return {
      arr: [],
    }
  },
  mounted(){
    this.getDetail()
  },
  methods: {
    getDetail(id){
      this.arr = Service.findDetail(id)
    }
  },
  name: 'StoreDetail',
  components:{NavBar},
  props: {
    msg: String
  },
}
</script>

