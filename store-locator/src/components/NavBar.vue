<template>
  <div class="nav_bar">
  <!-- Header Start -->
        <div class="header-area">
            <div class="main-header ">
                <div class="header-bottom  header-sticky">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <!-- Logo -->
                            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                                <div class="logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" style="width: 250px; margin-left: 20px;" alt=""></a>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-8 col-md-7 col-sm-5">
                            </div>
                            <div class="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                                <ul class="header-right f-right d-none d-lg-block d-flex justify-content-between">
                                    <li class="d-none d-lg-block"> <a href="#" class="btn1 header-btn">Sign in</a></li>
                                    <li class="d-none d-xl-block">
                                        <div class="form-box f-right ">
                                            <input type="text" name="Search" placeholder="Username">
                                            <div class="search-icon">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="d-none d-xl-block">
                                        <div class="form-box f-right ">
                                            <input type="password" name="Search" placeholder="Password">
                                            <div class="search-icon">
                                                <i class="fa fa-lock" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="d-none d-lg-block"> <a href="#" class="btn btn-secondary header-btn">Sign Up</a></li>
                                </ul>
                            </div>
                            <!-- Mobile Menu -->
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr style="border: 0.5px solid #cacaca; margin: 10px 0px 0px 0px;">
        <div class="header-area" style="margin-top: 10px;">
            <div class="main-header ">
                <div class="header-bottom  header-sticky">
                    <div class="container-fluid">
                        <div class="row">
                            <!-- Logo -->
                            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                                <a href="#" class="btn1 header-btn">
                                    <i class="fa fa-home fa-lg" aria-hidden="true" style="color: #707070; margin-left: 10px;"></i>
                                    <p style="margin-left: 0px;">Home</p>
                                </a>
                            </div>
                            <div class="col-xl-6 col-lg-8 col-md-7 col-sm-5">
                            </div>
                            <div class="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                                <ul class="header-right f-right d-none d-lg-block d-flex justify-content-between">

                                    <li class="d-none d-xl-block">
                                        <div class="form-box f-right" style="margin-top: 25px;">
                                            <input type="text" v-model="textstore"  v-on:keyup.enter="searchStore" name="Search" placeholder="Search">
                                            <div class="search-icon">
                                                <i class="fa fa-search" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="d-none d-lg-block" title="Filter">
                                        <a class="btn1 header-btn" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i class="fas fa-sort-amount-down fa-lg" style="margin-left:10px;color: #707070;margin-top: 5px;"></i>
                                            <p>Filter</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="dropdown">
                                            <button class="btn1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-list fa-lg" style="color: #707070;"></i>
                                            <p>Categories</p>
                                        </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" @click="updateCategory('clothing')" >Clothes</a>
                                                <a class="dropdown-item" @click="updateCategory('electronic')" >Electronic</a>
                                                <a class="dropdown-item" @click="updateCategory('furniture')">Furniture</a>
                                                <a class="dropdown-item" @click="updateCategory('second-hand-product')">SecondHand Product</a>
                                                <a class="dropdown-item" @click="updateCategory('fitness')">Fitness</a>
                                                <!-- <a class="dropdown-item" href="#">Stationary</a>          
                                          <a class="dropdown-item" href="#">Jewelry</a>
                                          <a class="dropdown-item" href="#">Technology</a>
                                          <a class="dropdown-item" href="#">Toy</a>
                                          <a class="dropdown-item" href="#">Mobile</a>
                                          <a class="dropdown-item" href="#">Book</a> -->
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="container collapse" id="collapseExample">
                                <div class="container ">
                                    <div class="row">

                                        <div class="col" style="color: #707070; font-size: 20px;">
                                            <div style="text-align: center;">Price</div>
                                            <input id="slider" type="range" min="0" max="100" value="50" style="width: 350px; ">
                                            <div class="range">
                                                <div style="float: left;">$1</div>
                                                <div style="float: right;">$100</div>
                                            </div>
                                            <div id="selector">
                                                <div class="SelectBtn"></div>
                                                <div id="SelectValue"></div>
                                            </div>
                                        </div>

                                        <div class="col" style="color: #707070; font-size: 20px;">
                                            <div style="text-align: center;">Distance</div>
                                            <input id="distancerange" type="range" min="0" max="10" value="5" style="width: 350px;">
                                            <div class="range">
                                                <div style="float: left;">0km</div>
                                                <div style="float: right;">10km</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Mobile Menu -->
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
  </div>
</template>

<script>
import Service from '../Service';
// import Service from '../Service'
export default {
    data() {
        return {
            textstore : '',
            cat: "clothing"
        }
    },

    methods:{
        updateCategory(value) {
            this.cat = value
            this.$root.$emit('changeCategory', value);
        },
        async searchStore(){
            const store = await Service.searchStore(this.cat, this.textstore)
            console.log(store)
            this.$root.$emit('getSearch',store)
            
        }

    },
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>



