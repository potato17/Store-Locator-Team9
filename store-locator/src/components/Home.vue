<template>
    <div>
          <div class="container">
            <div class="slide-container">
                <div class="slides fade">
                    <img src="assets/img/shop/resize-Dieline.jpg">
                </div>

                <div class="slides fade">
                    <img src="assets/img/shop/G.jpg">
                </div>

                <div class="slides fade">
                    <img src="assets/img/shop/W.jpg">
               </div>

                <!-- <a onclick="plusSlides(-1)" class="prev">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a> -->
            </div>
            <br>

            <div style="text-align: center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>

            <div class="small-container">
                <h4>SEARCH RESULT</h4>
                <div class="row">
                    <div class="col-4"                 
                    v-for="(store, index) in Clothing"
                    v-bind:item="store"
                    v-bind:index="index"
                    v-bind:key="store._id">  

                    <a href="#">
                            <img src="assets/img/shop/pexels.jpg">
                            <p>Name: <strong>{{ store.store_name }}</strong></p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-full"></i>
                            </div>
                        </a>
                    </div>

                    <!-- <div class="col-4">
                        <a href="#">
                            <img src="assets/img/shop/scott.jpg">
                            <p>Name: <strong>MITDTLA</strong></p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                        </a>
                    </div> -->

                    <!-- <div class="col-4">
                        <a href="#">
                            <img src="assets/img/shop/starbuck.jpg">
                            <p>Name: <strong>Starbuck</strong></p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-full"></i>
                            </div>
                        </a>
                    </div> -->
<!-- 
                    <div class="col-4">
                        <a href="#"></a>
                        <img src="assets/img/shop/book-store.jpg">
                        <p>Name: <strong>Book Store</strong></p>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-full"></i>
                        </div>
                       </a>
                    </div> -->

                    <div class="col-4">
                        <a href="#">
                            <img src="assets/img/shop/hugo.jpg">
                            <p>Name: <strong>Vegatable</strong></p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <h4>POPULAR PRODUCTS</h4>
                <div class="row">
                    <div class="col-4">
                        <a href="#">
                            <img src="assets/img/shop/pexels.jpg">
                            <p>Name: <strong>News Agent</strong></p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-full"></i>
                            </div>
                        </a>
                    </div>

                    <div class="col-4">
                        <a href="#">
                            <img src="assets/img/shop/scott.jpg">
                            <p>Name: <strong>MITDTLA</strong></p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                        </a>
                    </div>

                    <div class="col-4">
                        <a href="#">
                            <img src="assets/img/shop/starbuck.jpg">
                            <p>Name: <strong>Starbuck</strong></p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-full"></i>
                            </div>
                        </a>
                    </div>

                    <div class="col-4">
                        <!--<a href="#"></a>-->
                        <img src="assets/img/shop/book-store.jpg">
                        <p>Name: <strong>Book Store</strong></p>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-full"></i>
                        </div>
                     <!--</a>-->
                    </div>

                    <div class="col-4">
                        <a href="#">
                            <img src="assets/img/shop/hugo.jpg">
                            <p>Name: <strong>Vegatable</strong></p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from '../Service'

export default {
    data() {
        return {
            Clothing : [],       
            slideIndex: 0,
        }
    },
    mounted() {
        this.showSlides();
    },
    methods: {
        async getClothingStore(){
            this.Clothing = await Service.getCategory('clothing');
        },
        // getStore(){
        //     this.Stores = Service.getCategory('clothing');
        // }
        showSlides() {
            var i;
            var slides = document.getElementsByClassName("slides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            this.slideIndex++;
            if (this.slideIndex > slides.length) {
                this.slideIndex = 1
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex - 1].style.display = "block";
            dots[this.slideIndex - 1].className += " active";
            setTimeout(this.showSlides, 3000);
        },
    },
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
