import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ContactUs from "../views/ContactUs.vue"
import PriceList from "../views/PriceList.vue"
import FAQ from "../views/FAQ.vue"
import Step1 from "../views/Step-1.vue"
import Register from "../views/Register.vue"
import Step2 from "../views/Step-2.vue"
import Step3 from "../views/Step-3.vue"
import AboutUs from "../views/AboutUs.vue"
import store from "../store";

Vue.use(VueRouter);

const routes = [

  {
    path: "/contact-us",
    name: "Contact Us",
    component:
      ContactUs,
    meta: {
      title: "Contact Us"
    }

  },
  {
    path: "/about-us",
    name: "About Us",
    component:
      AboutUs,
    meta: {
      title: "About Us"
    }

  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/price-list",
    name: "Price List",
    component: PriceList,
    meta: {
      title: "Price List"
    }
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
    meta: {
      title: "FAQ"
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register"
    },
    children: [
      {
        path: "step-1",
        name: "Step 1",
        component: Step1,
        meta: {
          title: "Step 1",
          booking: true

        }
      },
      {
        path: "step-2",
        name: "Step 2",
        component: Step2,
        meta: {
          title: "Step 2",
          booking: true


        }
      },
      {
        path: "step-3",
        name: "Step 3",
        component: Step3,
        meta: {
          title: "Step 3",
          booking: true


        }
      }
    ]
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path.includes("register")) {
      return { x: 0, y: 0 }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});


export default router;
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
router.beforeEach((to, from, next) => {
  if (to.meta.title === "Step 1" && !store.state.step1Data && !store.step1DataReturn) {



    next({ name: "Home" })

  }
  else if (to.meta.title === "Step 2" && !store.state.step2Data && !store.state.step2DataReturn) {
    next({ name: "Home" })

  }
  else if (to.meta.title === "Step 3" && !store.state.step2Data && !store.state.step2DataReturn && !store.state.step1Data && !store.step1DataReturn) {
    next({ name: "Home" })

  }
  else if (to.path === "/") {
    next({ name: "Home" })
    location.reload()
  }
  else if (from.meta.title === "Step 1" || from.meta.title === "Step 2" && !to.meta.booking) {
    if (window.confirm("Bạn có thực sự muốn rời trang ? Những thông tin chưa được lưu sẽ bị mất")) {
      next()
    } else {
      return false
    }

  }
  else {
    next()
  }




})

