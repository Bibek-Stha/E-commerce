<template>
  <div>
<TemplateView>
   <!-- Navbar Start -->
   <div class="container-fluid">
        <div class="row border-top px-xl-5">
            <div class="col-lg-3 d-none d-lg-block">
                <a class="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style="height: 65px; margin-top: -1px; padding: 0 30px;">
                    <h6 class="m-0">Categories</h6>
                    <i class="fa fa-angle-down text-dark"></i>
                </a>
                <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style="width: calc(100% - 30px); z-index: 1;">
                    <div class="navbar-nav w-100 overflow-hidden" style="height: 410px">
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link" data-toggle="dropdown">Dresses <i class="fa fa-angle-down float-right mt-1"></i></a>
                            <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <a href="" class="dropdown-item">Men's Dresses</a>
                                <a href="" class="dropdown-item">Women's Dresses</a>
                                <a href="" class="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                        <a href="" class="nav-item nav-link">Shirts</a>
                        <a href="" class="nav-item nav-link">Jeans</a>
                        <a href="" class="nav-item nav-link">Swimwear</a>
                        <a href="" class="nav-item nav-link">Sleepwear</a>
                        <a href="" class="nav-item nav-link">Sportswear</a>
                        <a href="" class="nav-item nav-link">Jumpsuits</a>
                        <a href="" class="nav-item nav-link">Blazers</a>
                        <a href="" class="nav-item nav-link">Jackets</a>
                        <a href="" class="nav-item nav-link">Shoes</a>
                    </div>
                </nav>
            </div>
            <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" class="text-decoration-none d-block d-lg-none">
                        <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a href="index.html" class="nav-item nav-link" @click.prevent="$router.push({name:'home'})">Home</a>
                            <a href="shop.html" class="nav-item nav-link" @click.prevent="$router.push({name:'shop'})">Shop</a>
                            <a href="detail.html" class="nav-item nav-link" @click.prevent="$router.push({name:'detail'})">Shop Detail</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <a href="cart.html" class="dropdown-item" @click.prevent="$router.push({name:'cart'})">Shopping Cart</a>
                                    <a href="checkout.html" class="dropdown-item" @click.prevent="$router.push({name:'checkout'})">Checkout</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link " @click.prevent="$router.push({name:'contact'})">Contact</a>
                        </div>
                        <div class="navbar-nav ml-auto py-0">
                            <a href="" class="nav-item nav-link " @click.prevent="$router.push({name:'login'})">Login</a>
                            <a href="" class="nav-item nav-link active" @click.prevent="$router.push({name:'register'})">Register</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- Navbar End -->
  <div class="container content">
<div class="row align-items-center content">
<div class="col-12 text-center">
<h3 class="mb-4">Register <br> and Enjoy the Resources</h3>
<button type="button" class="btn btn-secondary px-4 py-3" data-toggle="modal" data-target="#exampleModalCenter">
Register
</button>
</div>
</div>
</div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
<div class="modal-content rounded-0">
<div class="modal-body py-0">
<div class="d-flex main-content">
<div class="bg-image promo-img mr-3" style="background-image: url('images/img_1.jpg');">
</div>
<div class="content-text p-4">
<h3>Sign up to access all the resourcess</h3>
<p>All their equipment and instruments are alive. The sky was cloudless and of a deep dark blue.</p>
<form @submit.prevent="register()">
<div class="form-group">
<label for="email">Email Address</label>
<input type="email" class="form-control" id="email" :v-model="form.email">
</div>
<div class="form-group">
<label for="name">First Name</label>
<input type="text" class="form-control" id="name" :v-model="form.firstname">
</div>
<div class="form-group">
<label for="name">Password</label>
<input type="password" class="form-control" id="password" :v-model="form.password">
</div>
<div class="form-group">
<input type="submit" value="Sign up" class="btn btn-primary btn-block">
</div>
<div class="form-group ">
<p class="custom-note"><small>By signing up you will agree to our <a href="#">Privacy Policy</a></small></p>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</TemplateView>
  </div>
</template>

<script>
    import axios from 'axios';
import TemplateView from './TemplateView.vue';
  export default {
    name:"RegisterView",
    components: { TemplateView },
    data(){
          return{
            form:{
                email:"",
                firstname:"",
                password:""
             }
          }  
        
    },
    methods :{
      async register(){
        try{
            let response =await axios.post("http://localhost:3000/user",this.form)
          console.warn(response.status)
            

        }catch(e){
        console.warn(e)
      } 
      }
        }
    }
    

</script>

<style lang="scss" scoped>

</style>